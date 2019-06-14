
import React, { Component } from 'react';
import firebase from 'firebase';
import FileUpload from './FileUpload';
import '../../App.css'
import   databaseReF from  '../../config/config';
import './styles.css';





// const HeaderHome = () => (
//   <HeaderHomeWrapper>
//     <i className = "material-icons">menu</i>
//     <span>Galeria</span>
//   </HeaderHomeWrapper>
// )


class Galeria extends Component {

  constructor(){
    super(); 
    this.state = {
      user: null,
      pictures: []
    }
    // this.authListener = this.authListener.bind(this);

    this.handleAuth = this.handleAuth.bind(this);
    this.handleLogOut = this.handleLogOut.bind(this);
    this.handleUpload = this.handleUpload.bind(this);
  }
//   componentDidMount() {
//     this.authListener();
//   }
  componentWillMount(){
    firebase.auth().onAuthStateChanged(user => {
      this.setState({ user });
    });
   databaseReF.ref('pictures').on('child_added', snapshot => {
      this.setState({
        pictures: this.state.pictures.concat(snapshot.val())
      });
    });
  }

  handleAuth(){
    const provider = new firebase.auth.GoogleAuthProvider();
    firebase.auth().signInWithPopup(provider)
    .then(result => console.log(`${result.user.email} Has iniciado sesion`))
    .catch(error => console.log(`Error ${error.code}: ${error.message}`));
  }

  handleLogOut(){
    firebase.auth().signOut()
    .then(result => console.log(`${result.user.email} Has cerrado sesion`))
    .catch(error => console.log(`Error ${error.code}: ${error.message}`));
  }

  handleUpload(event){
    const file = event.target.files[0];
    const storageRef = firebase.storage().ref(`/fotos/${file.name}`);
    const task = storageRef.put(file);
    task.on('state_changed', snapshot => {
        let percentage = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
        this.setState({
            uploadValue: percentage
        })
    }, error => { 
        console.log(error.message) 
    }, () =>  storageRef.getDownloadURL().then(url =>  {
        const record = {
          photoURL: this.state.user.photoURL,
          displayName: this.state.user.displayName,
          image: url
        };
        const dbRef = firebase.database().ref('pictures');
        const newPicture = dbRef.push();
        newPicture.set(record);
    }));
  }

  renderLoginButton(){
    //Si el usuario esta loguado 
    if(this.state.user){
      return(
        <div>
          <img width="100" src={this.state.user.photoURL} alt={this.state.user.displayName}/>
          <p>Hola { this.state.user.displayName }!</p>
          <button onClick={this.handleLogOut}>Cerrar sesion</button>
          
          <FileUpload onUpload={this.handleUpload} uploadValue={this.state.uploadValue} />

          {
            this.state.pictures.map(picture => (
              <div className="App-card">
                <figure className="App-card-image">
                  <img width="320" src={picture.image} />
                  <figCaption className="App-card-footer">
                    <img className="App-card-avatar" src={picture.photoURL} alt={picture.displayName} />
                    <span className="App-card-name">{picture.displayName}</span>
                  </figCaption>
                </figure>
              </div>
            )).reverse()
          }

        </div>
      );
    }else{
    //Si no lo esta
    return(
    
    <button onClick={this.handleAuth}>Registrarse</button>
    );
    }
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Kraken</h1>
        </header>
        <p className="App-intro">
         { this.renderLoginButton() }
        </p>
      </div>
    );
  }
}

export default Galeria;
 

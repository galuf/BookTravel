import React, { Component } from 'react';
import firebase from 'firebase';
import FileUpload from './FileUpload';
import '../../App.css'
import client from '../../config/client'
import './styles.css';
import HeaderHome from '../../components/header'
import Login  from '../Login'
import styled from 'styled-components'


const Imagen = styled.img`
  border-radius: 50%;
  width: 100%;
  height: 57px;
  position: absolute;
  top: -2px;
  left: 1px;
`
const User = styled.div`
  padding: 5px;
  height: 70px;
  width: 100%;
  display: flex;
  margin-bottom: 7px;
  /* align-self: center; */
`
const Caja = styled.div`
  height: 60px;
  width: 60px;
  position: relative;
`
const Texto = styled.div`
  height: 70px;
  /* width: 100%; */
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: flex-start;
  padding: 10px;
`
const Subir = styled.div`
  height: 100px;
  width: 100%;
  display: flex;
  justify-content: space-around;
  padding: 10px;
`

const Mensaje = styled.p`
  text-align: center;
  display: flex;
  align-items: center;
  padding: 10px;
  border: 1px solid green;
  border-radius: 5%;
  margin:5px;
`
const TextoDesc = styled.span`
  text-align:    start;
  font-size: 12px;
  margin: 2px;
`

const Usuario = ({user,foto})=>(
  <User>
    <Caja>
      {
        foto ? <Imagen src={foto} alt=""/> : <Imagen src='https://bolavip.com/export/sites/bolavip/arte/usuario_null.jpg_1931756597.jpg' alt=""/> 
      }
      
    </Caja>
    <Texto>
      <span className='username'>{user}</span>
      <TextoDesc className='descripcion'> Descripcion de Imagen </TextoDesc>
    </Texto>  
  </User>
)

class MiExperiencias extends Component {

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
   client.database().ref('pictures').on('child_added', snapshot => {
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
      //  var user = firebase.auth().currentUser;

      //       user.updateProfile({
      //         displayName: "Jane Q. User",
      //         photoURL: url
      //       }).then(function() {
      //         // Update successful.
      //       }).catch(function(error) {
      //         // An error happened.
      //       });
        const record = {
          photoURL: this.state.user.photoURL,
          displayName: this.state.user.displayName ,
          email:this.state.user.email,
          image: url
        };
        const dbRef = firebase.database().ref('pictures');
        const newPicture = dbRef.push();
        newPicture.set(record);
    }));
  }

  renderLoginButton(){
    
    if(this.state.user){
      return(
        <div>
          
          {/* <img width="100" src={this.state.user.photoURL} alt={this.state.user.displayName}/> */}
          
          <Subir>
            <Mensaje>Hola { this.state.user.displayName }! Comparte tus experiencias</Mensaje> 
            {/* <button onClick={this.handleLogOut}>Cerrar sesion</button> */}
            <FileUpload onUpload={this.handleUpload} uploadValue={this.state.uploadValue} />
          </Subir>

          {
            this.state.pictures.map((picture,index) => {
              if(picture.displayName === this.state.user.displayName){
                return(
                  <div className="App-card" key={index}>
                    <figure className="App-card-image">
                      
                      {/* <span className="App-card-name"> Hola hola {picture.displayName}</span> */}
                      <Usuario user = {picture.displayName}  foto={picture.photoURL}></Usuario>
                      <img width="320" src={picture.image} />
                      <figcaption className="App-card-footer">
                        {/* <img className="App-card-avatar" src={picture.photoURL} alt={picture.displayName} /> */}
                      </figcaption>
                    </figure>
                  </div>
                )
              }
            }).reverse()
          }

        </div>
      );
    }else{
    //Si no lo esta
    return(
    
    <Login >Registrarse</Login>
    );
    }
  }

  render() {
    return (
      <div className="App">
        <HeaderHome titulo='Mis Experiencias'/>
        <span className="App-intro">
         { this.renderLoginButton() }
        </span>
      </div>
    );
  }
}

export default MiExperiencias;
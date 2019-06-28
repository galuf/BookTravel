import React, { Component } from 'react';
import firebase from 'firebase';
import FileUpload from './FileUpload';
import '../../App.css'
import client from '../../config/client'
import './styles.css';
import HeaderHome from '../../components/header'
import Login  from '../Login'
import styled from 'styled-components'
import { Button } from '@material-ui/core';


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
const ParaSubir = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height:100%;
`
const publicar = {
  height:'30px',
  display: 'flex',
  alignItems: 'center',
  color : 'blue',
  border: '1px solid blue',
  marginTop: '10px',
  fontSize: '10px',
}

const Input = styled.input`
  border: 1px solid green;
  height: 50px;
  border-radius: 10px;
  padding: 15px;
  width: 100%;
  align-self: center;
  display: flex;
  flex-wrap:wrap;
`
const Usuario = ({user,foto,comentario})=>(
  <User>
    <Caja>
      {
        foto ? <Imagen src={foto} alt=""/> : <Imagen src='https://bolavip.com/export/sites/bolavip/arte/usuario_null.jpg_1931756597.jpg' alt=""/> 
      }
      
    </Caja>
    <Texto>
      <span className='username'>{user}</span>

      <TextoDesc className='descripcion'> <p style={{}}> Descripcion de Imagen:</p>  {comentario}</TextoDesc>
    </Texto>  
  </User>
)

class MiExperiencias extends Component {

  constructor(){
    super(); 
    this.state = {
      user: null,
      pictures: [],
      userInput:'',
      comentario:'',
      pictureSend:'',
      list:[]
    }
    // this.authListener = this.authListener.bind(this);

    this.handleAuth = this.handleAuth.bind(this);
    this.handleLogOut = this.handleLogOut.bind(this);
    this.handleUpload = this.handleUpload.bind(this);
  }
 
//   componentDidMount() {
//     this.authListener();
//   }
changeUserInput(input){
  this.setState({
    userInput:input
  });
}
addTolist(input){
  let listArray=this.state.list;
  listArray.push(input)
  this.setState({
    list:listArray,
    comentario:input,
    userInput:''
  })
  var user = firebase.auth().currentUser;

  user.updateProfile({
    comentario: input,
  }).then(function() {
    // Update successful.
    console.log('asd')
  }).catch(function(error) {
    // An error happened.
    console.log('error')
  });

  //-----------------------subir a la base de datos
  const record = {
    displayName: this.state.user.displayName ,
    email:this.state.user.email,
    comentario:input,
    image:this.state.pictureSend
  };

  const dbRef = firebase.database().ref('pictures');
  const newPicture = dbRef.push();
  newPicture.set(record);
}

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
        const record = {
          photoURL: this.state.user.photoURL,
          displayName: this.state.user.displayName ,
          email:this.state.user.email,
          image: url,
          comentario:''
        };

        this.setState({
          pictureSend:url
        });

    }));
  }

  renderLoginButton(){

    if(this.state.user){
      return(
        <div>
          
          {/* <img width="100" src={this.state.user.photoURL} alt={this.state.user.displayName}/> */}
          
          <Mensaje>Hola { this.state.user.displayName }! Comparte tus experiencias</Mensaje> 
          <div>
          <Subir>
              <Input 
                type="text" 
                onChange={(e)=>this.changeUserInput(e.target.value)}
                placeholder= 'Breve Descripcion' 
                value={this.state.userInput}
              />  
              <ParaSubir>
                <FileUpload onUpload={this.handleUpload} uploadValue={this.state.uploadValue} />
                <Button onClick={()=>this.addTolist(this.state.userInput)} style = {publicar}>  Publicar </Button>
              </ParaSubir>
            
            {/* <button onClick={this.handleLogOut}>Cerrar sesion</button> */}
            
          </Subir>

          </div>

          {
            this.state.pictures.map((picture,index) => (
              <div className="App-card" key={index}>
                <figure className="App-card-image">
                {/* comentario={this.state.comentario}  */}
                  {/* <span className="App-card-name"> Hola hola {picture.displayName}</span> */}
                  <Usuario user = {picture.displayName}  comentario={this.state.comentario}  foto={picture.photoURL}></Usuario>
                  {/* <Usuario user = {picture.displayName}  comentario={picture.comentario}  foto={picture.photoURL}></Usuario> */}
                  <img width="320" src={picture.image} />
                  <figcaption className="App-card-footer">
                    {/* <img className="App-card-avatar" src={picture.photoURL} alt={picture.displayName} /> */}
                  </figcaption>
                </figure>
              </div>
            )).reverse()
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
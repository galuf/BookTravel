import React, { Component } from 'react'
import styled from 'styled-components'
import { navigate } from "@reach/router"
import HeaderHome from '../../components/header'
import { style } from '@material-ui/system';
import  firebase from 'firebase'

const FotoPerfil = styled.div`
  background-color: #E9EBEE; 
  height: 200px;
  width: 200px;
  border-radius: 50%;
  position: relative;
`
const Foto = styled.img`
  width: 100%;
  border-radius: 50%;
`
const Icono = styled.div`
  color: white;
  height: 60px;
  width: 60px;
  background-color: #76B39D;
  position: absolute;
  left: 140px;
  bottom: 10px;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
`
const User = styled.div`
  display: flex;
  justify-content: center;
  padding: 10px;
`
const Desc = styled.div`
  display: flex;
  flex-direction: column;
  align-items : center;
`

const Upload = styled.input`
  position: absolute;
  top: 0;
  left: 0;
  right:0;
  bottom: 0;
  width: 100%;
  height: 100%;
  opacity: 0;
`


class Usuario extends Component {
  
  constructor(props){
    super(props)
    
    this.state = { 

      user: null,

     foto : 'https://bolavip.com/export/sites/bolavip/arte/usuario_null.jpg_1931756597.jpg'
    };

  this.handleUpload = this.handleUpload.bind(this);

}

componentWillMount(){

  firebase.auth().onAuthStateChanged(user => {
    this.setState({ user });
  });

}
// componentDidMount(){
//   var user = firebase.auth().currentUser;
  
//     this.setState({ foto: user.photoURL });
    
// }

    
  renderFoto(){
    if(this.state.user){
      if(this.state.user.photoURL)
        return (
          <Foto src={this.state.user.photoURL} alt=""/>
        )
      else {
        return (
          <Foto src={this.state.foto} alt=""/> 
        )
      }  
    }
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
      var user = firebase.auth().currentUser;

      user.updateProfile({
      //  this.state.user.photoURL

        photoURL: url
       
      }).then(function() {
        // Update successful.


      }).catch(function(error) {
        // An error happened.
      });
      this.setState({ foto: url });

    }));

  }
  
  render() {
    var user = firebase.auth().currentUser;

    return (
      <div>
         <HeaderHome titulo="Perfil"/>
         {console.log(user)}
        <User> 
         <FotoPerfil >
             

            {/* // en esta parte se debe llamar la foto desde la base de datos */}
            {/* <Foto src={this.state.foto} alt=""/>  */}
            {this.renderFoto()}
          <Icono>
            <i className = "material-icons">photo_camera</i>
            
              <Upload type="file"   onChange={this.handleUpload} />
            
          </Icono>

         </FotoPerfil>
        </User> 

        <Desc> 

          <span> User </span>
          <button> Haste Guia</button>

        </Desc>  
      </div>
    )
  }
}

export default Usuario

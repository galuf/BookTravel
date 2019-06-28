import React, { Component } from 'react';
//import client from '../../config/client'
import  firebase from 'firebase'
import Formulario from './form'
import Forms2 from './form2'
import styled from 'styled-components'
import HeaderHome from '../../components/header'

const Sesion = styled.div`
  width: 100%;

`
const Registrate = styled.div`
  text-align: center;
  margin-top: 20px;
`
const Log =({handlerChangeMode})=>(
  
  <Sesion>
    <Formulario /> <br/>
    <Registrate onClick={()=>handlerChangeMode(false)}  
          style={{color:'green',textDecoration:'underline green' }}>  Registrate </Registrate>
  </Sesion>
               
)

const Registro =({handlerChangeMode})=>(
          
      <div>
      
        <Forms2/>
        <br/>

      
     <Registrate onClick={()=>handlerChangeMode(true)} style={{color:'green',textDecoration:'underline green'}} >  Ya tengo una cuenta</Registrate>

        </div>

)
class Login extends Component {
    handleAuth(){
        const provider = new firebase.auth.GoogleAuthProvider();
        firebase.auth().signInWithPopup(provider)
        .then(result => console.log(`${result.user.email} Has iniciado sesion`))
        .catch(error => console.log(`Error ${error.code}: ${error.message}`));
      }
    constructor(props) {
      super(props);
     

      this.state = {
        email: '',
        password: '',
        displayname:'',
        Loginmode:true
      };
     
    //   this.handleAuth = this.handleAuth.bind(this);
    }
    handlerChangeMode=(node)=>{
      this.setState({
        Loginmode:node
      })
    }
    componentWillMount(){
        firebase.auth().onAuthStateChanged(user => {
          this.setState({ user });
          console.log(user)
        });
    }
  
      handleLogOut(){
        firebase.auth().signOut()
        .then(result => console.log(`${result.user.email} Has cerrado sesion`))
        .catch(error => console.log(`Error ${error.code}: ${error.message}`));
      }
   
    render() {
      return (
      
      <div>

      <HeaderHome titulo="Iniciar Sesion"/>
     {this.state.Loginmode
        ?<Log handlerChangeMode={this.handlerChangeMode}/>
        :<Registro handlerChangeMode={this.handlerChangeMode}/>
      
     }
      </div>
      );
    }
  }
  export default Login;
  
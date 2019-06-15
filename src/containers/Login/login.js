import React, { Component } from 'react';
import client from '../../config/client'
import  firebase from 'firebase'
import Forms from './form'
import Forms2 from './form2'
const Log =({handlerChangeMode})=>(
  
  <div>
       <Forms />
   <br/>
  
    <span onClick={()=>handlerChangeMode(false)}  style={{color:'red',textDecoration:'underline red' }}>  Registro</span>
    </div>
               
)
const Registro =({handlerChangeMode})=>(
          
      <div>
      
        <Forms2/>
        <br/>

      
     <span onClick={()=>handlerChangeMode(true)} style={{color:'orange',textDecoration:'underline red'}} >  Ya tengo una cuenta</span>

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

     {this.state.Loginmode
        ?<Log handlerChangeMode={this.handlerChangeMode}/>
        :<Registro handlerChangeMode={this.handlerChangeMode}/>
      
     }
      </div>
      );
    }
  }
  export default Login;
  
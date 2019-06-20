import React, { Component } from 'react';
import client from '../../config/client'
import  firebase from 'firebase'
import styled from  'styled-components'

const INITIAL_STATE = {
  UserName: '',
  email: '',
  password: '',
  passwordTwo: '',
  error: null,
};

const Registro = styled.input`
  width: 80%;
  height: 40px;
  margin-top: 25px;
  border: 2px solid #76B39D;
  border-radius: 4px;
  padding: 5px;
  padding-left: 15px;
`
const Boton = styled.button`
  width: 85%;
  background-color: #76B39D;
  height: 40px;
  color : white;
  margin: 7px;
  margin-top: 15px;
`
const Forms = styled.form`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
`

class Form2 extends Component {
    handleAuth(){
        const provider = new firebase.auth.GoogleAuthProvider();
        firebase.auth().signInWithPopup(provider)
        .then(result => console.log(`${result.user.email} Has iniciado sesion`))
        .catch(error => console.log(`Error ${error.code}: ${error.message}`));
      }
    constructor(props) {
      super(props);
     
      this.state = { ...INITIAL_STATE };

     

 
    //   this.login = this.login.bind(this);
      this.handleChange = this.handleChange.bind(this);
      this.signup = this.signup.bind(this);
    //   this.handleAuth = this.handleAuth.bind(this);
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
    handleChange(e) {
      this.setState({ [e.target.name]: e.target.value });
    }
    
   
  
    signup(e){
      const { UserName, email, password } = this.state;
      e.preventDefault();
      client.auth().createUserWithEmailAndPassword(this.state.email, this.state.password).then((u)=>{
      }).then((u)=>{console.log(u)
        var user = firebase.auth().currentUser;

        user.updateProfile({
          displayName: UserName,
        }).then(function() {
          // Update successful.
          console.log('asd')
        }).catch(function(error) {
          // An error happened.
          console.log('error')
        });
      
      
      }
      
      
      )
      .catch((error) => {
          console.log(error);
        })
    }
    
    render() {
      const {
        UserName,
        email,
        password,
        passwordTwo,
        error,
      } = this.state;
      const isInvalid =
      password !== passwordTwo ||
      password === '' ||
      email === '' ||
      UserName === '';
      return (
      
      <div className="col-md-6">
        <Forms>    
          <Registro value={this.state.email} 
                 onChange={this.handleChange} 
                 type="email" name="email" 
                 className="form-control" 
                 id="exampleInputEmail1" 
                 aria-describedby="emailHelp" 
                 placeholder="Ingresa tu Correo Electronico" />
          
          <Registro value={this.state.UserName} 
                 onChange={this.handleChange} 
                 type="UserName" name="UserName" 
                 className="form-control" 
                 id="exampleInputPassword1" 
                 placeholder="Username" />
        
          <Registro value={this.state.password} 
                 onChange={this.handleChange} 
                 type="password" name="password" 
                 className="form-control" 
                 id="exampleInputPassword1" 
                 placeholder="Password" />
        
          <Registro value={this.state.passwordTwo} 
                 onChange={this.handleChange} 
                 type="password" name="passwordTwo" 
                 className="form-control" 
                 id="exampleInputPassword2" 
                 placeholder="Comfirmar Password" />
        
          {/* <button type="submit" onClick={this.login} class="btn btn-primary">Login</button> */}
          <Boton onClick={this.signup}  disabled={isInvalid} className="btn btn-success">Registro</Boton>
          <Boton onClick={this.handleAuth}>Usar cuenta de google</Boton>
          {error && <p>{error.message}</p>}

        </Forms>
      </div>
      );
    }
  }
  export default Form2;
  
import React, { Component } from 'react';
import client from '../../config/client'
import  firebase from 'firebase';
import styled from 'styled-components';


const Formulario = styled.form`
  
  display: flex;
  flex-direction: column;
  width: 100%;
  align-items: center;
  margin-top: 10px;
  
`
const Correo = styled.input`
  width: 80%;
  height: 40px;
  margin: 5px;
  margin-bottom: 20px;
  border: 2px solid #76B39D;
  border-radius: 4px;
  padding: 5px;
  padding-left: 15px;
`
const Password = styled.input`
  width: 80%;
  height: 40px;
  margin: 5px;
  margin-bottom: 20px;
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
`

class Forms extends Component {
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
      displayname:''
    };
    this.login = this.login.bind(this);
    this.handleChange = this.handleChange.bind(this);
  //   this.signup = this.signup.bind(this);
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
  
  login(e) {
    e.preventDefault();
    client.auth().signInWithEmailAndPassword(this.state.email, this.state.password).then((u)=>{
    }).catch((error) => {
        console.log(error);
      });
      
  }

  render() {
    return (
    <div className="col-md-6">

      <Formulario>

        <Correo value={this.state.email} 
                onChange={this.handleChange} 
                type="email" 
                name="email" 
                className="form-control" 
                id="exampleInputEmail1" 
                aria-describedby="emailHelp" 
                placeholder="Ingrese su Email" />

        <Password value={this.state.password} 
                onChange={this.handleChange} 
                type="password" 
                name="password" 
                className="form-control" 
                id="exampleInputPassword1" 
                placeholder="Contraseña" />

        <Boton type="submit" onClick={this.login} className="btn btn-primary">Login</Boton>
        
      </Formulario>

    </div>
    );
  }
}

export default Forms;
  
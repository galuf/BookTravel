import React, { Component } from 'react';
import client from '../../config/client'
import  firebase from 'firebase'
class Form2 extends Component {
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
      e.preventDefault();
      client.auth().createUserWithEmailAndPassword(this.state.email, this.state.password).then((u)=>{
      }).then((u)=>{console.log(u)})
      .catch((error) => {
          console.log(error);
        })
    }
    render() {
      return (
         <div className="col-md-6">
         <form>
        <div class="form-group">
         <label for="exampleInputEmail1">Email address</label>
         <input value={this.state.email} onChange={this.handleChange} type="email" name="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email" />
         <small id="emailHelp" class="form-text text-muted">We'll never share your email with anyone else.</small>
        </div>
         <div class="form-group">
        <label for="exampleInputPassword1">Password</label>
        <input value={this.state.password} onChange={this.handleChange} type="password" name="password" class="form-control" id="exampleInputPassword1" placeholder="Password" />
        </div>
        <div class="form-group">
        <label for="exampleInputPassword1">UserName</label>
        <input value={this.state.displayname} onChange={this.handleChange} type="displayname" name="displayname" class="form-control" id="exampleInputPassword1" placeholder="Username" />
        </div>
        {/* <button type="submit" onClick={this.login} class="btn btn-primary">Login</button> */}
        <button onClick={this.signup} style={{marginLeft: '25px'}} className="btn btn-success">Registro</button>
        <button onClick={this.handleAuth}>Login con google</button>

   </form>
   
   </div>
      );
    }
  }
  export default Form2;
  
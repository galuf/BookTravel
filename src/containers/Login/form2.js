import React, { Component } from 'react';
import client from '../../config/client'
import  firebase from 'firebase'
const INITIAL_STATE = {
  UserName: '',
  email: '',
  password: '',
  passwordTwo: '',
  error: null,
};

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
         <form>
        <div className="form-group">
         <label htmlFor="exampleInputEmail1">Email address</label>
         <input value={this.state.email} onChange={this.handleChange} type="email" name="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email" />
         <small id="emailHelp" className="form-text text-muted">We'll never share your email with anyone else.</small>
        </div>
        <div className="form-group">
        <label htmlFor="exampleInputPassword1">UserName</label>
        <input value={this.state.UserName} onChange={this.handleChange} type="UserName" name="UserName" className="form-control" id="exampleInputPassword1" placeholder="Username" />
        </div>
         <div className="form-group">
        <label htmlFor="exampleInputPassword1">Password</label>
        <input value={this.state.password} onChange={this.handleChange} type="password" name="password" className="form-control" id="exampleInputPassword1" placeholder="Password" />
        </div>
        <div className="form-group">
        <label htmlFor="exampleInputPassword2">Password</label>
        <input value={this.state.passwordTwo} onChange={this.handleChange} type="password" name="passwordTwo" className="form-control" id="exampleInputPassword2" placeholder="Comfir Password" />
        </div>
        
        {/* <button type="submit" onClick={this.login} class="btn btn-primary">Login</button> */}
        <button onClick={this.signup}  disabled={isInvalid} style={{marginLeft: '25px'}} className="btn btn-success">Registro</button>
        <button onClick={this.handleAuth}>Login con google</button>
        {error && <p>{error.message}</p>}

   </form>
   
   </div>
      );
    }
  }
  export default Form2;
  
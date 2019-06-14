import React, { Component } from 'react';
import firebase from 'firebase';
import  client from '../../config/client'

import FileUpload from './FileUpload';
import '../../App.css'
import   databaseReF from  '../../config/config';
import Login from  './login'
import Home from '../Home/index'
class Log extends Component{
    constructor(props){
        super(props);
        this.state={
            user:null,
        }
        this.authListener=this.authListener.bind(this);
    }
    componentDidMount() {
            this.authListener();
          }
          authListener() {
            client.auth().onAuthStateChanged((user) => {
              console.log(user);
              if (user) {
                this.setState({ user });
                localStorage.setItem('user', user.uid);
              } else {
                this.setState({ user: null });
                localStorage.removeItem('user');
              }
            });
          }
    render(){
        return(
        <div >
        {this.state.user ? (<Home/>) :(<Login/>) }

        </div>
 

        )
    }
}



export default Log;

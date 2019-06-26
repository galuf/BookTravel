import React from 'react'
import HeaderHome from '../../components/header'
import Login  from '../Login'

import firebase from 'firebase';

import styled from 'styled-components'
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';

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
      {/* <TextoDesc className='descripcion'> Descripcion de Imagen </TextoDesc> */}
    </Texto>  
  </User>
)

class BrindarAyuda extends React.Component{


  constructor(){
    super();
    this.state={
      user:null,
      userImagen:null,
      commentSend:null,
      commentAnuncios:[]
    }
  }

  componentDidMount(){
    firebase.auth().onAuthStateChanged(user=>{
      this.setState({
        user:user
      });
    });

    // firebase.database().ref('pictures').on('child_added',snapshot=>{
    //   this.setState({
    //     pictures: this.state.pictures.concat(snapshot.val())
    //   });
    //   console.log(this.state.pictures);
    // })

    firebase.database().ref('anunciosTable/').on('value',snap=>{
      const currentAnuncios = snap.val();
      if(currentAnuncios!==null){
          this.setState({
              commentAnuncios:currentAnuncios
          });
      }else{
        console.log("DB anunciosTable-> vacio");
    }
  });
  }

  handleSubmit(e){
    e.preventDefault();
    console.log('enter');
    //const list = this.state.messages;
    const newAnuncio = {
        idAnuncio:this.state.commentAnuncios.length,
        userName:this.state.user.displayName,
        userImagen:this.state.user.photoURL,
        
        commentSend:this.state.commentSend
        
    };
    console.log("photoURL-> ",this.state.user.photoURL);

    firebase.database().ref(`anunciosTable/${this.state.commentAnuncios.length}`)
    .set(newAnuncio);
    this.setState({commentSend:''});
  }

  updateCommentSend(e){       
    this.setState({commentSend:e.target.value});
    //console.log(this.state.message);
  }

  // uploadUserTemp(uid){
  //   firebaseAdmin.auth().getUser(uid)
  //               .then(function(userRecord) {
  //                 // See the UserRecord reference doc for the contents of userRecord.
  //                 //userImagen.set(userRecord.photoURL);
  //                 console.log("Successfully fetched user data:", userRecord.toJSON());
  //                 //this.state.setState(
  //                   //userImagen:userRecord.photoURL
  //                 //)
  //               })
  //               .catch(function(error) {
  //                 console.log("Error fetching user data:", error);
  //               });
  // }

  renderSolAyuda(){
    
    if(this.state.user){
      return(
        <div>
          {/* <form onSubmit={this.handleSubmit.bind(this)}>
            <TextField
                type="text"
                value={this.state.commentSend}
                onChange={this.updateCommentSend.bind(this)}
              />
              
              <Button type="submit">
                  Send
              </Button>
              
                     
          </form> */}
          {

            this.state.commentAnuncios.map((anuncio,index) => {
              console.log("----> ",anuncio.userName);
              if(anuncio.userName == this.state.user.displayName){
                //var userImagen="";
                //this.uploadUserTemp(anuncio.userUID).bind(this);

                return(
                  <div className="App-card" key={index}>
                    <figure className="App-card-image">
                      
                      {/* <span className="App-card-name"> Hola {anuncio.displayName}</span> */}
                      <Usuario user = {anuncio.userName}  foto={anuncio.userImagen}></Usuario>
                      <p className="App-card-name">  Ayuda Solicitada:{anuncio.commentSend}</p>
                      {/* <Usuario user = {picture.displayName}  foto={picture.photoURL}></Usuario>
                      <img width="320" src={picture.image} />
                      <figcaption className="App-card-footer">
                        //<img className="App-card-avatar" src={picture.photoURL} alt={picture.displayName} /> 
                      </figcaption> */}
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

  render(){
    return(
      <div>
        <HeaderHome titulo = "Brindar Ayuda"/>
        <span className="App-intro">
         { this.renderSolAyuda() }
        </span>
      </div>
    )
  }
}

export default BrindarAyuda;




// import React, {Component} from 'react';

// import AppBar from '@material-ui/core/AppBar';
// import HeaderHome from '../../components/header'

// import ExperienciaComment from './components/experienciaComment';


// class BrindarAyuda extends Component{
// 	render(){
// 		return(
// 			<div className="App">
// 				<AppBar position="static" color="default">
// 					<HeaderHome titulo = "Brindar Ayuda"/>		
// 				</AppBar>
// 				<ExperienciaComment/>  
// 			</div>
// 		)
// 	}
// }


// export default BrindarAyuda;
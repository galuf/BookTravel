import React from 'react'
import HeaderHome from '../../components/header'
import Login  from '../Login'

import firebase from 'firebase';

import styled from 'styled-components'
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import { placeholder } from '@babel/types';

import numFormat from 'util';

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

const Ayuda = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 5px;
  border: 8px double #76B39D;
  background-color: white;
  border-radius: 5px;
  padding: 5px;
`
const respuesta = {
  width:'100%',
  display:'flex',
  justifyContent:'center',
  margin: '5px'

}

const subir = {
  border: '1px solid blue',
  color: 'blue',
  textDecoration: 'underline'
}

const Formulario = styled.form`
  display: flex;
  justify-content: space-around;
  margin: 10px;
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

// const Respuesta = ({foto,resp_all})=>(
//   <div>
//     {
//       if (resp_all.length) {
//         return(
//           <span>sdcs</span>
//         )   
//       }
//     }
//   </div>
// )

class SolAyuda extends React.Component{


  constructor(){
    super();
    this.state={
      user:null,
      userImagen:null,
      commentSend:null,
      responseSend:null,
      commentAnuncios:[],
      respuestasAnuncios:[]
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
<<<<<<< HEAD
        commentSend:this.state.commentSend
=======
        commentSend:this.state.commentSend,
        adResponses:[]
>>>>>>> d49eebed4fbd91e77ac7f42dd9fb141785d934f2
        
    };
    //console.log("photoURL-> ",this.state.user.photoURL);

    firebase.database().ref(`anunciosTable/${this.state.commentAnuncios.length}`)
    .set(newAnuncio);
    this.setState({commentSend:''});
  }

  updateCommentSend(e){       
    this.setState({commentSend:e.target.value});
    
  }

  
  updateResponseSend(e){       
    this.setState({responseSend:e.target.value});
    
  }

  
  addResponse(e,idAnuncio){
    e.preventDefault();
    console.log('enter');
    //const list = this.state.messages;
    const newResponse = {
        idResponse:this.state.respuestasAnuncios.length,
        userName:this.state.user.displayName,
        userImagen:this.state.user.photoURL,
        responseSend:this.state.responseSend,    
    };
    //console.log("photoURL-> ",this.state.user.photoURL);

    firebase.database().ref(`anunciosTable/${idAnuncio}/respuestas/${numFormat.format('%5d',idAnuncio)}${numFormat.format('%5d',newResponse.idResponse)}/`)
    .set(newResponse);
    this.setState({responseSend:''});
  }

  renderSolAyuda(){
    
    if(this.state.user){
      return(
        <div>
          <Formulario onSubmit={this.handleSubmit.bind(this)}>
            <TextField
                type="text"
                value={this.state.commentSend}
                onChange={this.updateCommentSend.bind(this)}
                placeholder= 'Que problema tienes ? ' 
              />
              
              <Button type="submit" style={subir}>
                  Send
              </Button>
              
                     
          </Formulario>
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
                      <Ayuda>
                        <p className="App-card-name" 
                           style={{textAlign:'end', color:'green', margin:'5px'}}>  
                          Ayuda Solicitada: 
                        </p>    
                        <span style={{textAlign:'justify'}}>
                          {anuncio.commentSend}
                        </span>
                      </Ayuda>
                      <div style={respuesta}>
                      <button style={{color:'white',                      
                                      border:'none',
                                      background: 'none',
                                      textDecoration:'underline', 
                                      margin:'2px',
                                      width:'150px',
                                      height: '30px'}}>Ver Respuestas</button>
                      </div>


<<<<<<< HEAD
                {}    </figure>
=======
                    </figure>
                    {/* {
                      
                      <Caja>asx</Caja>
                    } */}
>>>>>>> d49eebed4fbd91e77ac7f42dd9fb141785d934f2
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
        <HeaderHome titulo = "Solicitar Ayuda"/>
        <span className="App-intro">
         { this.renderSolAyuda() }
        </span>
      </div>
    )
  }
}

export default SolAyuda


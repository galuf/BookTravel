import React from 'react'
import HeaderHome from '../../components/header'
import Login  from '../Login'

import firebase from 'firebase';

import styled from 'styled-components'
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';

//import numFormat from 'util';

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

let idAnuncioTemporal01=null;

class BrindarAyuda extends React.Component{


  constructor(){
    super();
    this.state={
      user:null,
      userImagen:null,
      commentSend:null,
      responseSend:[],
      idAnuncioTemp:null,
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


    firebase.database().ref('anunciosTable/').on('value',snap=>{
      const currentAnuncios = snap.val();
      //permite 100 respuestas
      if(currentAnuncios!==null){
          this.setState({
              commentAnuncios:currentAnuncios,
              responseSend:Array(100)
          });
      }else{
        console.log("DB anunciosTable-> vacio");
      }
      
  });
  }

  handleSubmit(e){
    console.log('A name was submitted: ', e.target);
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
        respuestas:[]
>>>>>>> 186eb3ba9cbfd3d458d598f890e45f2ff296eeb5
        
    };

    console.log("photoURL-> ",this.state.user.photoURL);

    firebase.database().ref(`anunciosTable/${this.state.commentAnuncios.length}`)
    .set(newAnuncio);
    this.setState({commentSend:''});

  }

  handleSubmitResponse(e){
    //console.log('A name was submitted: ',e.target.name);
    /*this.state({
      idAnuncioTemp:e.target.name
    });*/


    const idAnuncioTemporal02 = e.target.name;
    //console.log("--------this.state.respuestasAnuncios>>>> ",Object.keys(this.state.commentAnuncios[Number(idAnuncioTemporal02)].respuestas).length);
    e.preventDefault();
    const newResponse = {
        idResponse:Object.keys(this.state.commentAnuncios[Number(idAnuncioTemporal02)].respuestas).length,
        userName:this.state.user.displayName,
        userImagen:this.state.user.photoURL,
        responseSend:this.state.responseSend[Number(idAnuncioTemporal02)]    
    };
    //console.log("photoURL-> ",this.state.user.photoURL);
    //console.log("idAnuncioTemp->",this.state.idAnuncioTemp);
    //console.log("newResponse->",newResponse);
    let ruta=`anunciosTable/${e.target.name}/respuestas/${e.target.name}`+"-"+`${newResponse.idResponse}`;
    //console.log("ruta->",ruta)

    if(newResponse.responseSend){
      firebase.database().ref(ruta).set(newResponse);
      let respuestas_input=this.state.responseSend;
      respuestas_input[idAnuncioTemporal02]='';
      this.setState({responseSend:respuestas_input});
    }else{
      alert("Ingrese una respuesta! :)");
    }
    
  }

  updateCommentSend(e){
    let valor =e.target.value;

    e.preventDefault();
    this.setState({commentSend:valor});
    
    //console.log(this.state.message);
  }

  updateResponseSend(e){
    let valor = e.target.value;
    e.preventDefault();
    let respuestas  =this.state.responseSend;
    
    e.preventDefault()
    respuestas[Number(e.target.name)]=valor

    this.setState({

      responseSend:respuestas
    }); 
    
  }

  updateIdAnuncioTemp(id){
    this.setState({
      idAnuncioTemp:id
    });
  }

  // addResponse(e,idAnuncio){
  //   e.preventDefault();
  //   console.log('enter');
  //   //const list = this.state.messages;
  //   const newResponse = {
  //       idResponse:this.state.respuestasAnuncios.length,
  //       userName:this.state.user.displayName,
  //       userImagen:this.state.user.photoURL,
  //       responseSend:this.state.responseSend,    
  //   };
  //   //console.log("photoURL-> ",this.state.user.photoURL);

  //   firebase.database().ref(`anunciosTable/${this.state.idAnuncioTemp}/respuestas/${numFormat.format('%5d',this.state.idAnuncioTemp)}${numFormat.format('%5d',newResponse.idResponse)}/`)
  //   .set(newResponse);
  //   this.setState({responseSend:''});
  // }


  renderBrindarAyuda(){
    
    if(this.state.user){
      return(
        <div>
          {

            this.state.commentAnuncios.map((anuncio,index) => {
<<<<<<< HEAD

=======
   
>>>>>>> 186eb3ba9cbfd3d458d598f890e45f2ff296eeb5
                return(
                  <div className="App-card" key={index}>
                    <figure className="App-card-image">
                      
                      {/* <span className="App-card-name"> Hola {anuncio.displayName}</span> */}
                      <Usuario user = {anuncio.userName}  foto={anuncio.userImagen}></Usuario>
                      <Ayuda>
                        <p className="App-card-name" 
                           style={{textAlign:'end', color:'green', margin:'5px', marginBottom:'10px'}}>  
                          Ayuda Solicitada: 
                        </p>    
                        <span style={{textAlign:'justify'}}>
                          {anuncio.commentSend}
                        </span>
                      </Ayuda>

                      <div style={respuesta} key={index}>

                      <form name={index} onSubmit={this.handleSubmitResponse.bind(this)}>
                        <TextField
                            name={index}
                            type="text"
                            value={this.state.responseSend[index]}
                            onChange={this.updateResponseSend.bind(this)}
                          />


                          <Button type="submit">
                              Send
                          </Button>
                          
                                
                      </form>
                      <button style={{color:'white',                      
                                      border:'none',
                                      background: 'none',
                                      textDecoration:'underline', 
                                      margin:'2px',
                                      width:'100px',
                                      height: '30px'}}>Responder</button>
                      </div>
                       
                    </figure>
                  </div>
                )
              //}
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
         { this.renderBrindarAyuda() }
        </span>
      </div>
    )
  }
}

export default BrindarAyuda;

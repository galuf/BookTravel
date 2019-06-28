import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import CloseIcon from '@material-ui/icons/Close';
import Slide from '@material-ui/core/Slide';

import styled from 'styled-components'

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
const verde = {
  color:'#76B39D'
}

const useStyles = makeStyles(theme => ({
  appBar: {
    position: 'relative',
  },
  title: {
    marginLeft: theme.spacing(2),
    flex: 1,
  },
}));

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

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

export default function FullScreenDialog({respuestas}) {
  const classes = useStyles();
  const [open, setOpen] = React.useState(false);

  function handleClickOpen() {
    setOpen(true);
  }

  function handleClose() {
    setOpen(false);
  }

  return (
    <div>
    <button style={{color:'white',                      
                                      border:'none',
                                      background: 'none',
                                      textDecoration:'underline', 
                                      margin:'2px',
                                      width:'150px',
                                      height: '30px'}} onClick={handleClickOpen}>
                                      Ver Respuestas</button>
      
      <Dialog fullScreen open={open} onClose={handleClose} TransitionComponent={Transition} style={verde}>
        <AppBar className={classes.appBar}>
          <Toolbar>
            <IconButton edge="start" color="inherit" onClick={handleClose} aria-label="Close">
              <CloseIcon />
              <p style = {{paddingLeft:'10px'}}>Respuestas</p>
            </IconButton>
          </Toolbar>
        </AppBar>

        {

            respuestas.map((anuncio,index) => {
              //console.log("----> ", Object.values(anuncio.respuestas) );
                return(
                  <div className="App-card" key={index}>
                    <figure className="App-card-image">
                      
                      
                      <Usuario user = {anuncio.userName}  foto={anuncio.userImagen}></Usuario>                      
                      <Ayuda>
                        <p className="App-card-name" 
                           style={{textAlign:'end', color:'green', margin:'5px'}}>  
                          Respuesta: 
                        </p>    
                        <span style={{textAlign:'justify'}}>
                          {anuncio.responseSend}
                        </span>
                      </Ayuda>
                      <div style={respuesta}>
                      </div>

                    </figure>
                    {/* {
                      
                      <Caja>asx</Caja>
                    } */}
                  </div>
                )
            }).reverse()
          }        

      </Dialog>
    </div>
  );
}
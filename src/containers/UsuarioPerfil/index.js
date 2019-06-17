import React, { Component } from 'react'
import styled from 'styled-components'
import { navigate } from "@reach/router"
import HeaderHome from '../../components/header'
import { style } from '@material-ui/system';

const FotoPerfil = styled.div`
  background-color: #E9EBEE; 
  height: 200px;
  width: 200px;
  border-radius: 50%;
  position: relative;
`
const Foto = styled.img`
  width: 100%;
  border-radius: 50%;
`
const Icono = styled.div`
  color: white;
  height: 60px;
  width: 60px;
  background-color: #76B39D;
  position: absolute;
  left: 140px;
  bottom: 10px;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
`
const User = styled.div`
  display: flex;
  justify-content: center;
  padding: 10px;
`
const Desc = styled.div`
  display: flex;
  flex-direction: column;
  align-items : center;
`

class Usuario extends Component {
  state = {
    foto : 'https://bolavip.com/export/sites/bolavip/arte/usuario_null.jpg_1931756597.jpg'
  }
  render() {
    return (
      <div>
         <HeaderHome titulo="Perfil"/>

        <User> 
         <FotoPerfil>
          {
            // en esta parte se debe llamar la foto desde la base de datos
            this.state.foto ? <Foto src={this.state.foto} alt=""/> : <div>Aqui la foto del</div>
          }
          <Icono>
            <i className = "material-icons">photo_camera</i>
          </Icono>

         </FotoPerfil>
        </User> 

        <Desc> 
          <span> User </span>
          <button> Haste Guia</button>
        </Desc>  

      </div>
    )
  }
}

export default Usuario

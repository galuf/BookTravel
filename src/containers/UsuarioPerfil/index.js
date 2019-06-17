import React, { Component } from 'react'
import styled from 'styled-components'
import { navigate } from "@reach/router"
import HeaderHome from '../../components/header'

class Usuario extends Component {
  state = {
    foto : 'https://d1bvpoagx8hqbg.cloudfront.net/259/eb0a9acaa2c314784949cc8772ca01b3.jpg'
  }
  render() {
    return (
      <div>
         <HeaderHome titulo="Perfil"/>

      </div>
    )
  }
}

export default Usuario

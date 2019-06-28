import React from 'react'
import HeaderHome from '../../components/header'
import styled from 'styled-components'

const Mensaje = styled.h1`
  width: 100%;
  height: 100px;
  font-size: 20px;
  text-align: center;
  display: flex;
  justify-content: center;
  align-items: center;
`
const Imagen = styled.img`
  width: 100px;
`
const Caja = styled.div`
  height: 100px;
  width: 100%;
  display: flex;
  justify-content: center;
  margin-top: 15px;
`
const BuscarGuia = () => (
  <div>
    <HeaderHome titulo = "Buscar Guia"/> 
    <Caja>
      <Imagen src = 'https://image.flaticon.com/icons/png/512/40/40010.png' alt = ""/>
    </Caja> 
    <Mensaje>Aun no hay guias registrados</Mensaje>
  </div>
)

export default BuscarGuia
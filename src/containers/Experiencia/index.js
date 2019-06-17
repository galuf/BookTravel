import React, { Component } from 'react'
import styled from 'styled-components'
import experiencias from '../../utils/experiencias'
import HeaderHome from '../../components/header'

const Imagen = styled.img`
  padding: 5px;
  width: 30%;
  height:20%;
`

const Texto = styled.div`
  padding: 5px;
  width: 50%;
  height:20%;
  font-size: 12px;
`
const ContForo = styled.div`

  display: flex;
  flex-direction: row;
  justify-content:space-around;
  margin-top:15px;

  width:100%;
  background-color:#ffffff;

`
export class Comentario extends Component{

  render(){
    const {experiencias}=this.props
    return (
      <ContForo >
        <Imagen  src = {experiencias.urlImg}  alt=""/>  
          <Texto>  {experiencias.descripcion} </Texto>
      </ContForo>
    )
  }
}

export class Experiencia extends Component {
  state = {
    experiencias :experiencias
  }
  render() {
    const { experiencias } = this.state;
    return (
      <div>
        <HeaderHome titulo="Experiencia"/> 
      
          {experiencias.map( (experiencias, index)=>{ return <Comentario experiencias={experiencias} key={index}/>})}
          
      </div>
    )
  }
}

export default Experiencia
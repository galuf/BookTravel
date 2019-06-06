import React, { Component } from 'react'
import styled from 'styled-components'
import { navigate } from "@reach/router"
import experiencias from '../../utils/experiencias'

const HeaderHomeWrapper = styled.div`
  background-color: #76B39D;
  display: flex;
  align-items: center;
  color: white;
  padding: 12px;
  i{

  }
  span{
    margin-left: 12px;
    font-size: 24px;
    font-family: 'Cabin', sans-serif;
  }
`
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

  width:100%
  background-color:#ffffff;

`
const HeaderHome = () => (
  <HeaderHomeWrapper>
    <i className = "material-icons">menu</i>
    <span>Inicio</span>
  </HeaderHomeWrapper>
)
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
           <HeaderHome/> 
         
            {experiencias.map(experiencias=>{ return <Comentario experiencias={experiencias} />})}
             
        </div>
      )
    }
  }
  
  export default Experiencia
import React, { Component } from 'react'
import styled from 'styled-components'
import { navigate } from "@reach/router"
import cuzco from '../../utils/cuzco'

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
  width: 100%;
  height:20%;
  
  
`

const Texto = styled.div`
  padding: 5px;
  width: 100%;
  height:20%;
  font-size: 12px;
  text-align: center;
  margin-right:90px;
  margin-left:80px;

  `
const ContForo = styled.div`

  display: flex;
  flex-direction: column;
  justify-content:space-around;
  margin-top:15px;
  align-items:center;

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
        const {cuzco}=this.props
        return (
            <ContForo >
                <Imagen  src = {cuzco.urlImg}  alt=""/>  
              
                <Texto>  {cuzco.descripcion} </Texto>
             </ContForo>
        )
    }

}

export class Experiencia extends Component {
    state = {
      cuzco :cuzco
    }
    render() {
      const { cuzco } = this.state;
      return (
        <div>
           <HeaderHome/> 
         
            {cuzco.map(cuzco=>{ return <Comentario cuzco={cuzco} />})}
             
        </div>
      )
    }
  }
  
  export default Experiencia
import React, { Component } from 'react'
import styled from 'styled-components'
import { navigate } from "@reach/router"
import arequipa from '../../utils/arequipa'

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
  height:50%;
  
  
`

const Texto = styled.div`
  padding: 5px;
  width: 100%;
  height:50%;
  font-size: 12px;
  text-align: center;
  margin-right:90px;
  margin-left:80px;
  margin-top:10px;


  `
const ContForo = styled.div`

  display: flex;
  flex-direction: column;
  justify-content:space-around;
  margin-top:1px;
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
        const {arequipa}=this.props
        return (
            <ContForo >
                <Imagen  src = {arequipa.urlImg}  alt=""/>  
              
                <Texto>  {arequipa.descripcion} </Texto>
             </ContForo>
        )
    }

}

export class Experiencia extends Component {
    state = {
      arequipa :arequipa
    }
    render() {
      const { arequipa } = this.state;
      return (
        <div>
           <HeaderHome/> 
         
            {arequipa.map(arequipa=>{ return <Comentario arequipa={arequipa} />})}
             
        </div>
      )
    }
  }
  
  export default Experiencia
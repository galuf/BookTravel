import React, { Component } from 'react'
import styled from 'styled-components'
import { navigate } from "@reach/router"
import arequipa from '../../utils/arequipa'
import HeaderHome from '../../components/header'

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

  width:100%;
  background-color:#ffffff;

`
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
           <HeaderHome titulo="Arequipa "/> 
         
            {arequipa.map(arequipa=>{ return <Comentario arequipa={arequipa} />})}
             
        </div>
      )
    }
  }
  
  export default Experiencia
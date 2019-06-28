import React, { Component } from 'react'
import styled from 'styled-components'
import cuzco from '../../utils/cuzco'
import HeaderHome from '../../components/header'

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

  width:100%;
  background-color:#ffffff;

`

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
           <HeaderHome titulo="Cuzco"/> 
         
            {cuzco.map((cuzco , index)=>{ return <Comentario cuzco={cuzco} key={index}/>})}
             
        </div>
      )
    }
  }
  
  export default Experiencia
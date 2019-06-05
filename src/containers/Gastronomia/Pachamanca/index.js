import React from 'react'
import styled from 'styled-components'

const HeaderHomeWrapper = styled.div`
  background-color: #76B39D;
  display: flex;
  align-items: center;
  color: white;
  padding: 12px;
  span{
    margin-left: 12px;
    font-size: 24px;
    font-family: 'Cabin', sans-serif;
  }
`
const Imagen = styled.img`
  width: 100%;
`
const Texto = styled.p`
  font-family : Arial, Helvetica, Sans-serif;
  padding: 15px;
  text-align:justify;
`
const Restaurant = styled.div`
  text-align: center;
  padding: 10px;
  font-size: 25px;
  ul li {
      margin: 15px;
  }
`

const HeaderHome = () => (
  <HeaderHomeWrapper>
    <i className = "material-icons">menu</i>
    <span>Pachamanca</span>
  </HeaderHomeWrapper>
)

class Pachamanca extends React.Component{
    render(){
        return (
            <div>
              <HeaderHome />
              
              <Imagen src='https://portal.andina.pe/EDPfotografia3/Thumbnail/2018/01/12/000473592W.jpg' ></Imagen>

              <Texto>
              Desde épocas ancestrales la gastronomía peruana era muy especial y utilizaba distintas 
              técnicas culinarias para la conservación y preparación de los alimentos. La pachamanca 
              forma parte de la herencia de nuestros antepasados, la más representativa de los Incas,
               una comida imponente que hasta el día de hoy nos representa a nivel mundial.
              </Texto>

              <Restaurant>

              <h3>Restaurantes Recomendados</h3>
              <ul>
                <li>
                  Sol de Mayo
                </li>
                <li>
                  La Carne
                </li>
                <li>
                  El Pregon
                </li>
              </ul>
              </Restaurant>

            </div>
        )
    }
}

export default Pachamanca
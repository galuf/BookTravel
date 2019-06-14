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
    <span>Cuy Chactado</span>
  </HeaderHomeWrapper>
)

class Cuy extends React.Component{
  render(){
    return (
    <div>
      <HeaderHome />

      <Imagen   src='https://i0.wp.com/comidaperuanaweb.org/wp-content/uploads/2018/10/Receta-de-Cuy-Chactado-1.jpg?resize=500%2C431&ssl=1' ></Imagen>

      <Texto>
        El cuy chactao o chactado es un plato típico de la cocina peruana, concretamente
        y representativamente de la región de Arequipa. Se trata de un cuy (conejillo de
        indias) frito en abundante aceite bajo una piedra que hace las veces de tapa. Se
          suele acompañar con papas hervidas, maíz, etc.   
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

export default Cuy
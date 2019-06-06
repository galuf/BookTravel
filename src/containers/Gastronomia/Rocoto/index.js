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
    <span>Rocoto Relleno</span>
  </HeaderHomeWrapper>
)

class Rocoto extends React.Component{
    render(){
        return (
            <div>
              <HeaderHome />
              
              <Imagen src='https://comidasperuanas.net/wp-content/uploads/2018/05/Rocoto-Relleno.jpg' ></Imagen>

              <Texto>
              El Rocoto Relleno es un plato que todo amante del picante debe probar, 
              su principal ingrediente el rocoto, es una de las tantas variedades de 
              ajíes (chile) que son nativos de nuestro país, no precisamente la más picante 
              pero sí la más conocida como tal, su forma es parecida a la de un tomate, el más 
              conocido es el de color rojo pero también lo tenemos en amarillo y verde.
              </Texto>

              <Restaurant>

              <h3>Restaurantes Recomendados</h3>
              <ul>
                <li>
                  Sol de Mayo
                </li>
                <li>
                  El Rocoto
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

export default Rocoto
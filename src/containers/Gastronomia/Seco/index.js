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
    <span>Seco Norteño</span>
  </HeaderHomeWrapper>
)

class Seco extends React.Component{
    render(){
        return (
            <div>
              <HeaderHome />
              
              <Imagen src='https://img-global.cpcdn.com/002_recipes/f7b662f841aca029/400x400cq70/photo.jpg' ></Imagen>

              <Texto>
              En mi visita al norte del Perú he podido disfrutar de este plato norteño de bandera.
               El Seco de Cabrito es uno de los platos más representativos del norte peruano con algunas 
               variaciones en distintas regiones, donde el ingrediente principal es la carne tierna del 
               cabrito y se sirve con frejoles aderezados en cebolla y ajos. Se acompaña con arroz. 
               Es de esta región del Perú donde he podido obtener
               esta espectacular receta que hoy comparto con ustedes.
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

export default Seco
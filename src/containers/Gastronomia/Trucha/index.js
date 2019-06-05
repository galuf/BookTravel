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
    <span>Trucha Frita</span>
  </HeaderHomeWrapper>
)

class Trucha extends React.Component{
    render(){
        return (
            <div>
              <HeaderHome />
              
              <Imagen src='https://www.enperu.org/gastronomia/wp-content/uploads/2016/07/trucha-frita.jpg' ></Imagen>

              <Texto>
              La primera experiencia para introducir la trucha en el Perú data de 1927, año que 
              fueron traídas las primeras ovas embrionadas desde los EE.UU por la familia 
              Arequipeña De La Romaña; por los años 30 algunos trabajadores de la entonces 
              empresa Cerro de Pasco Cooper Corporación importaron ovas, las Trucha
               Fritaencubaron y sembraron los alevinos en el rio Mantaro con fines deportivos,
                en 1934 el Sr. Juan Morales Vivanco construyó la primera piscigranja y estuvo 
                ubicada en el distrito de Quichuay, provincia de Huancayo, en 1940 se construyó 
                e instaló la estación pesquera de Chucuito-Puno de la Universidad Nacional de
                 Puno.
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

export default Trucha
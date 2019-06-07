import React from 'react'
import styled from 'styled-components'
import HeaderHome from '../../../components/header'

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

class Ceviche extends React.Component{
    render(){
        return (
            <div>
            <HeaderHome titulo="Ceviche"/>
              
              <Imagen src='https://cevicheperuano.net/wp-content/uploads/2018/12/ceviche-de-pescado_700x465.jpg' ></Imagen>

              <Texto>
              Según el historiador peruano Javier Pulgar Vidal el nombre ceviche viene de la 
              palabra quechua “siwichi”, que significa 'pescado fresco' o 'pescado tierno'. 
              Una hipótesis propone que las palabras siwichi y sikbaǧ se confundieron durante 
              la conquista del Imperio Inca por los españoles, lo cual hizo que se transformara
              en el nombre con que lo conocemos hoy.
              </Texto>

              <Restaurant>

              <h3>Restaurantes Recomendados</h3>
              <ul>
                <li>
                  Nanka
                </li>
                <li>
                  Maido
                </li>
                <li>
                  Cevicheria La Mar
                </li>
              </ul>
              </Restaurant>

            </div>
        )
    }
}

export default Ceviche
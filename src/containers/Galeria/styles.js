import styled from 'styled-components';

const Entrada = styled.div`
  margin-top: 20px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  @media screen and (min-width:480px){
    flex: 0 1 calc(50% -1rem)
  }
  @media screen and (min-width:768px){
    flex: 0 1 calc(33% -1rem )
  }
`
const Contenedor = styled.div`
  max-width: 1100px;
  margin: 0 auto;
  @media screen and (min-width:480px){
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
  }
`
const Titulo = styled.h2`
  flex: 0 1 100%;
  text-align : center;
`


const Imagen = styled.img`
    max-width: 100%;
`
const Contenido = styled.div`
  padding: 10px;
  background: white;
  display: flex;
  flex-direction: column;
  align-items: center;
  p{
    padding: 10px;
  }
`
const Boton = styled.a`
    background-color: #008fd1;
    color: white;
    padding: .6rem 2rem;
    margin-top: 1rem;
    display: inline-block;
    text-decoration: none;
    text-transform: uppercase;
    margin-bottom: 20px;
`
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

export { Entrada,
  Contenedor,
  Titulo,
  Imagen,
  Contenido,
  Boton,
  HeaderHomeWrapper
}
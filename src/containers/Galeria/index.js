import React from 'react';
import { Entrada,
  Contenedor,
  Titulo,
  Imagen,
  Contenido,
  Boton,
  HeaderHomeWrapper} from './styles.js';

import './styles.css';
import HeaderHome from '../../components/header'
import todo from '../../utils/todo'

class Actividad extends React.Component{
  render(){
    const {img , titulo, actividad, autor} = this.props.actividad;
    return (
      <Entrada>
          <Imagen src={img} alt="texto entrada"/>
          <Contenido>
             <h3>{titulo}</h3>
             <p>Publicado el: <span>19 Julio, 2018</span></p>
             <p>Por: <span>{autor}</span></p>
          </Contenido>
      </Entrada> 
    );
  }
}

class Galeria extends React.Component{
  render(){
    return (
      <Contenedor>
        <HeaderHome titulo="Galeria"/>
        {todo.map( (elemento, indice) =>{
          return <Actividad actividad = {elemento} key={indice}></Actividad>
        } )}
        {/* {/* */}
      </Contenedor>
    );
  }
}

export default Galeria;

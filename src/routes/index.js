import React from 'react';
import { Router } from "@reach/router"

import Home from '../containers/Home'

// import Gastronomia from '../containers/Gastronomia'
import Hacer from '../containers/Hacer'
import Destino from '../containers/Destino'
import Experiencia from '../containers/Experiencia'
import Galeria from '../containers/Galeria'
import Presupuesto from '../containers/Presupuesto'
import Cuzco from   '../containers/Destino/cuzco'
import Arequipa from   '../containers/Destino/arequipa'
import Log  from  '../containers/Login/index'
import Rocoto from '../containers/Gastronomia/Rocoto'
import Ceviche from '../containers/Gastronomia/Ceviche'
import Seco from '../containers/Gastronomia/Seco'
import Pachamanca from '../containers/Gastronomia/Pachamanca'
import Trucha from '../containers/Gastronomia/Trucha'
import Cuy from '../containers/Gastronomia/Cuy'
import Gastronomia from  '../containers/MisExperiencias/components/experienciaComment'
// import Login from '../containers/Login'

const FeatureDetail = () => (
  <div>
    sera
  </div>
)
const Routes = () => (
  <Router>
    <Home path="/"/>
    <Hacer path="/hacer"/>
    <Destino path="/destino"/>
    <Experiencia path="/experiencia" />
    <Log path="/login"/> 
    <Gastronomia path="/gastronomia"/> 
    <Rocoto path="/gastronomia/rocoto"/>
    <Ceviche path='gastronomia/ceviche'/>
    <Seco path='gastronomia/seco'/>
    <Pachamanca path='gastronomia/pachamanca'/>
    <Trucha path='gastronomia/trucha'/> 
    <Cuy path='gastronomia/cuy'/>
    {/* <Login path="/login"/> */}

    <Galeria path="/galeria"/>
    <Presupuesto path="/presupuesto" />    
    <Cuzco path="/cuzco"/>
    <Arequipa path="/arequipa"/>

  </Router>
)

export default Routes;

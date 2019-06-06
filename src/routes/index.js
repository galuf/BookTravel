import React from 'react';
import { Router } from "@reach/router"

import Home from '../containers/Home'

import Gastronomia from '../containers/Gastronomia'
import Hacer from '../containers/Hacer'
import Destino from '../containers/Destino'
import Experiencia from '../containers/Experiencia'
import Galeria from '../containers/Galeria'
import Presupuesto from '../containers/Presupuesto'
import Cuzco from   '../containers/Destino/cuzco'
import Arequipa from   '../containers/Destino/arequipa'

import Rocoto from '../containers/Gastronomia/Rocoto'
import Ceviche from '../containers/Gastronomia/Ceviche'
import Seco from '../containers/Gastronomia/Seco'
import Pachamanca from '../containers/Gastronomia/Pachamanca'
import Trucha from '../containers/Gastronomia/Trucha'
import Cuy from '../containers/Gastronomia/Cuy'

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

    <Gastronomia path="/gastronomia"/> 
    <Rocoto path="/gastronomia/rocoto"/>
    <Ceviche path='gastronomia/ceviche'/>
    <Seco path='gastronomia/seco'/>
    <Pachamanca path='gastronomia/pachamanca'/>
    <Trucha path='gastronomia/trucha'/> 
    <Cuy path='gastronomia/cuy'/>
    
    <Galeria path="/galeria"/>
    <Presupuesto path="/presupuesto" />    
    <Cuzco path="/cuzco"/>
    <Arequipa path="/arequipa"/>

  </Router>
)

export default Routes;

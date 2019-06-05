import React from 'react';
import { Router } from "@reach/router"

import Home from '../containers/Home'

import Gastronomia from '../containers/Gastronomia'
import Hacer from '../containers/Hacer'
import Destino from '../containers/Destino'
import Experiencia from '../containers/Experiencia'
import Galeria from '../containers/Galeria'
import Presupuesto from '../containers/Presupuesto'

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
    <Galeria path="/galeria"/>
    <Presupuesto path="/presupuesto" />      
  </Router>
)

export default Routes;

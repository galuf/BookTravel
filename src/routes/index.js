import React from 'react';
import { Router } from "@reach/router"

import Home from '../containers/Home'

import Gastronomia from '../containers/Gastronomia'
import Hacer from '../containers/Hacer'
import Destino from '../containers/Destino'
import Experiencia from '../containers/Experiencia'

import SolAyuda from '../containers/SolAyuda';
import BuscarGuia from '../containers/BuscarGuia';
import BrindarAyuda from '../containers/BrindarAyuda';


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

import MisExperiencias from '../containers/MisExperiencias';

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
    <MisExperiencias path="/MisExperiencias"/>
    
    <SolAyuda path="/SolAyuda"/>
    <BuscarGuia path="/BuscarGuia"/>
    <BrindarAyuda path="/BrindarAyuda"/>

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

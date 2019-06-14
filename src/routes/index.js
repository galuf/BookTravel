import React from 'react';
import { Router } from "@reach/router"

import Home from '../containers/Home'

import Hacer from '../containers/Hacer'
import Destino from '../containers/Destino'
import Experiencia from '../containers/Experiencia'

import SolAyuda from '../containers/SolAyuda';
import BuscarGuia from '../containers/BuscarGuia';
import BrindarAyuda from '../containers/BrindarAyuda';
import Login    from   '../containers/Login'

import Galeria from '../containers/Galeria'
import Presupuesto from '../containers/Presupuesto'
import Cuzco from   '../containers/Destino/cuzco'
import Arequipa from   '../containers/Destino/arequipa'

import MiExperiencias from '../containers/MisExperiencias';
import GastronomiaWrapper from './Gastronomia';

const Routes = () => (
  <Router>
    <Home path="/"/>
    <Hacer path="/hacer"/>
    <Destino path="/destino"/>
    <Experiencia path="/experiencia" />
    <MiExperiencias path="/MisExperiencias"/>
    
    <SolAyuda path="/SolAyuda"/>
    <BuscarGuia path="/BuscarGuia"/>
    <BrindarAyuda path="/BrindarAyuda"/>

    <GastronomiaWrapper path="/gastronomia/*"/>
    <Login path="/login"/>
    <Galeria path="/galeria"/>
    <Presupuesto path="/presupuesto"/>    
    <Cuzco path="/cuzco"/>
    <Arequipa path="/arequipa"/>  
  </Router>
)

export default Routes;

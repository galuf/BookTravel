import React from 'react'

import { Router } from '@reach/router'

import Gastronomia from '../../containers/Gastronomia'
import Rocoto from '../../containers/Gastronomia/Rocoto'
import Ceviche from '../../containers/Gastronomia/Ceviche'
import Seco from '../../containers/Gastronomia/Seco'
import Pachamanca from '../../containers/Gastronomia/Pachamanca'
import Trucha from '../../containers/Gastronomia/Trucha'
import Cuy from '../../containers/Gastronomia/Cuy'


const GastronomiaWrapper = () => (
	<Router>
		<Gastronomia path="/"/>
		<Rocoto path="/rocoto"/>
		<Ceviche path='/ceviche'/>
		<Seco path='/seco'/>
		<Pachamanca path='/pachamanca'/>
		<Trucha path='/trucha'/> 
		<Cuy path='/cuy'/>
	</Router>
)

export default GastronomiaWrapper;
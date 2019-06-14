import React, {Component} from 'react';

import AppBar from '@material-ui/core/AppBar';
import HeaderHome from '../../components/header'

import ExperienciaComment from './components/experienciaComment';


class BrindarAyuda extends Component{
	render(){
		return(
			<div className="App">
				<AppBar position="static" color="default">
					<HeaderHome titulo = "Brindar Ayuda"/>		
				</AppBar>
				<ExperienciaComment/>  
			</div>
		)
	}
}


export default BrindarAyuda;
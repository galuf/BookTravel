import React, {Component} from 'react';


import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';

import Paper from '@material-ui/core/Paper';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Avatar from '@material-ui/core/Avatar';
import Typography from '@material-ui/core/Typography';
import styled from 'styled-components'

import client from '../../../config/client'

const Principal = styled.div`
	height: 550px;
	display: flex;
	flex-direction: column;
	justify-content: space-between;
	align-items: center;
`
const Pregunta = styled.h2`
	height: 50px;
	text-align: center;
	display: flex;
	align-items: center;
	justify-content: center;
	font-size: 25px;
	margin: 25px;
`
const ListaU = styled.ul`
	padding-left: 5px;
`

class Experiencia extends Component{
	constructor(){
		super();
		this.state = {
			experiencia_comment:'',
			experiencias:[]
		}
	}

	handleSubmit = (e) => {
		e.preventDefault();
		const newExperiencia = {
			id:     this.state.experiencias.length,
			comment:  this.state.experiencia_comment
		};
		client.database().ref(`experiencias/${newExperiencia.id}`)
		.set(newExperiencia)
		this.setState({experiencia_comment:''});
	}
	updateExperiencia = (e) => this.setState({experiencia_comment:e.target.value})


	componentDidMount(){
		client.database().ref('experiencias/').on('value',post_exp=>{
			const currentExperiencias = post_exp.val();
			if(currentExperiencias!==null){
				this.setState({
						experiencias:   currentExperiencias
				});
			}
		});
	}

	

	render(){

		const classes = makeStyles(theme => ({
			root_padre: {
				flexGrow: 1,
				overflow: 'hidden',
				padding: theme.spacing(1, 3),
				border: 10,
				},
			paper: {
				maxWidth: 40,
				margin: `${theme.spacing(1)}px auto`,
				padding: theme.spacing(2),
				border: 10,
			},
		}));

		const {experiencias} = this.state;
		const experienciasList = experiencias.map(experiencia=>{
			return( 
				<li key={experiencia.id}>
					<div className={classes.root_padre}>
						<Paper className={classes.paper}>
							<Grid container wrap="nowrap" spacing={2}>
								<Grid item>
									<Avatar>E</Avatar>
								</Grid>
								<Grid item xs>
									<Typography >
											{experiencia.comment}
									</Typography>
								</Grid>
							</Grid>
						</Paper>
					</div>
				</li>
			);
		});
		return(
			<Principal>
				<div>
					<Pregunta>
						Que lugares de Cusco me recomiendan visitar
					</Pregunta>
					<ListaU>{experienciasList}</ListaU>
				</div>

				<form onSubmit={this.handleSubmit.bind(this)} justify="center" >
						
					<TextField
					justify="center"
							type="text"
							value={this.state.experiencia_comment}
							onChange={this.updateExperiencia.bind(this)}
						/>
						
					<Button type="submit" >
							COMPARTIR
					</Button>
							
				</form>
			</Principal>
		)
	}
}

export default Experiencia;
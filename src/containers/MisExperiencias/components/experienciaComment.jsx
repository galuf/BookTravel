import React, {Component} from 'react';
import firebase from 'firebase';
import  {DB_CONFIG}from  '../../../config/config';

import TextField from '@material-ui/core/TextField';
//import Button from '@material-ui/core/Button';
import Button from '@material-ui/core/Button';
import 'firebase/database'

import Paper from '@material-ui/core/Paper';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Avatar from '@material-ui/core/Avatar';
import Typography from '@material-ui/core/Typography';
//console.log("Estoy en mis experiencias");


const useStyles = makeStyles(theme => ({
    
    paper: {
      maxWidth: 400,
      margin: `${theme.spacing(1)}px auto`,
      padding: theme.spacing(2),
    },
  }));


class Experiencia extends Component{
    

    constructor(){
        super();
        this.state = {
            experiencia_comment:'',
            
            experiencias:[
                //  {id:0,comment:'text1'},
                //  {id:1,comment:'text2'},
                //  {id:2,comment:'text3'}
            ]
        }
        this.addNote = this.addNote.bind(this);
		this.removeNote = this.removeNote.bind(this);

		// db connection
		this.app = firebase.initializeApp(DB_CONFIG);
		this.db = this.app.database().ref().child('experiencias');
    }
	componentDidMount() {
		const { experiencias } = this.state;
		this.db.on('child_added', snap => {
			experiencias.push({
				experienciaId: snap.key,
				experienciaContent: snap.val().experienciaContent
			});
 
			this.setState({experiencias});
		});

		this.db.on('child_removed', snap => {
			for(let i = 0; i < experiencias.length; i++) {
				if(experiencias[i].experienciaId === snap.key) {
					experiencias.splice(i , 1);
				}
			}
			console.log(experiencias);
			this.setState({experiencias});
		});

    }
    addNote(experiencia) {
		/*
		let { notes } = this.state;
		notes.push({
			noteId: notes.length + 1,
			noteContent: note
		});
		this.setState({
			notes
		});
		*/
		this.db.push().set({experienciaContent: experiencia});
	}	

	removeNote(experienciaId) {
		this.db.child(experienciaId).remove();
	}
  
    

    render(){
        console.log("inciiando render");

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
            console.log("experienciasLis->",experiencia.comment);
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
        
                
        // const classes = useStyles();
        // const mensaje = "ascascsdcsadcasd asdc asdcas";
        

        return(
            <div>
                {/* <div>
                <Paper className={classes.paper}>
                    <Grid container wrap="nowrap" spacing={2}>
                    <Grid item>
                        <Avatar>W</Avatar>
                    </Grid>
                    <Grid item xs zeroMinWidth>
                        <Typography noWrap>{mensaje}</Typography>
                    </Grid>
                    </Grid>
                </Paper>
                <Paper className={classes.paper}>
                    <Grid container wrap="nowrap" spacing={2}>
                    <Grid item>
                        <Avatar>W</Avatar>
                    </Grid>
                    <Grid item xs>
                        <Typography noWrap>{mensaje}</Typography>
                    </Grid>
                    </Grid>
                </Paper>
                <Paper className={classes.paper}>
                    <Grid container wrap="nowrap" spacing={2}>
                    <Grid item>
                        <Avatar>W</Avatar>
                    </Grid>
                    <Grid item xs>
                        <Typography>{mensaje}</Typography>
                    </Grid>
                    </Grid>
                </Paper>
                </div> 
                
                
                
                <Grid item xs={12}>
                    <Grid container justify="center" >
                    {[0, 1, 2].map(value => (
                        <Grid key={value} item>
                        <Paper className={classes.paper} />
                        </Grid>
                    ))}
                    </Grid>
                </Grid>*/}
                
                <ul>
                    
                        
                            {experienciasList}
                        
                </ul>

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
                     {/*
                     <Button
                        onClick={this.handleSubmit.bind(this)}
                        raised color="primary">
                        Send
                    </Button>
                    */}
                     
                </form>
            </div>
        )
    }
}

export default Experiencia;
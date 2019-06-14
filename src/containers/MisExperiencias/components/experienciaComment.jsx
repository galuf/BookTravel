import React, {Component} from 'react';

import  databaseReF  from  '../../../config/config';

import TextField from '@material-ui/core/TextField';
//import Button from '@material-ui/core/Button';
import Button from '@material-ui/core/Button';

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
    }

    handleSubmit(e){
        e.preventDefault();
        console.log('enter');
        const list = this.state.experiencias;
        const newExperiencia = {
            id:     this.state.experiencias.length,
            //user:   this.state.user,
            //ciudad: this.state,   
            comment:  this.state.experiencia_comment
        };
        //list.push(newExperiencia);
        //this.setState({experiencias:list});

        databaseReF.ref(`experiencias/${newExperiencia.id}`)
        .set(newExperiencia)
        this.setState({experiencia_comment:''});
    }
    updateExperiencia(e){
        
        this.setState({experiencia_comment:e.target.value});
        console.log("-updateExperiencia->",this.state.experiencia_comment);
    }


    componentDidMount(){
        databaseReF.ref();
        databaseReF.ref('experiencias/').on('value',post_exp=>{
            const currentExperiencias = post_exp.val();
            if(currentExperiencias!==null){
                this.setState({
                    experiencias:   currentExperiencias
                });
            }else{
                console.log("DB -> vacio");
            }
        });
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
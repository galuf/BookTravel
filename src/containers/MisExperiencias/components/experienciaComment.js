import React, {Component} from 'react';


import TextField from '@material-ui/core/TextField';
//import Button from '@material-ui/core/Button';
import Button from '@material-ui/core/Button';

import Paper from '@material-ui/core/Paper';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Avatar from '@material-ui/core/Avatar';
import Typography from '@material-ui/core/Typography';
//console.log("Estoy en mis experiencias");
import styled from 'styled-components'

const Imagen = styled.img`
  padding: 5px;
  width: 30%;
  height: 30%;
`
const Text = styled.p`
  font-size:10px;
  margin: 5px;
`
const ContForo = styled.div`
  display:flex;
  justify-content: space-around;
`

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

        window.firebase.database().ref(`experiencia/${newExperiencia.id}`)
        .set(newExperiencia)
        this.setState({experiencia_comment:''});
    }
    updateExperiencia(e){
        
        this.setState({experiencia_comment:e.target.value});
        console.log("-updateExperiencia->",this.state.experiencia_comment);
    }


    componentDidMount(){
        window.firebase.database().ref('experiencia/').on('value',post_exp=>{
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
           // console.log("experienciasLis->",mejia.comment);
            
            return( 
                
            <li key={experiencia.id}>
                
                <div className={classes.root_padre}>
                   <ContForo>
                        <Imagen src="http://lorempixel.com/500/500/sports/" alt=""/>
                            <div>
                                <h3>Visita a Machupichu #12212</h3>
                                <span>Muy Valorado</span>
                                <Text>
                                    {experiencia.comment}
                                </Text>
                            </div> 
                    </ContForo>
                    
                </div>
            </li>
            );
        });
        
                
        // const classes = useStyles();
        // const mensaje = "ascascsdcsadcasd asdc asdcas";
        

        return(
            <Principal>
                <div>

                <Pregunta>
                    Mis Vacaciones
                </Pregunta>
                
                <ListaU>
                            {experienciasList}
                </ListaU>
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
import React, {Component} from 'react';



//
import AppBar from '@material-ui/core/AppBar';
import ToolBar from '@material-ui/core/Toolbar';
//import Typography from '@material-ui/core/Typografy';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import HeaderHome from '../../components/header'
//

import ExperienciaComment from './components/experienciaComment';


class BrindarAyuda extends Component{
    render(){
        return(
            <div className="App">
                <AppBar position="static" color="default">
                    <HeaderHome titulo = "Brindar Ayuda"/>
                    
                    
                </AppBar>
                {/* <Container maxWidth="sm"> */}
                    <ExperienciaComment/>  
                {/* </Container> */}

            </div>
        )
    }
}


export default BrindarAyuda;
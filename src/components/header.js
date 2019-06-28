import React from 'react'
import styled from 'styled-components'
import { navigate } from "@reach/router"
import { makeStyles } from '@material-ui/core/styles';
import SwipeableDrawer from '@material-ui/core/SwipeableDrawer';
import List from '@material-ui/core/List';
import Divider from '@material-ui/core/Divider';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import InboxIcon from '@material-ui/icons/MoveToInbox';
import MailIcon from '@material-ui/icons/Mail';
import client from '../config/client'
import features from '../utils/features'
import items from './items.js'
import myitems from './myitems.js'

const useStyles = makeStyles({
  list: {
    width: 250,
  },
  fullList: {
    width: 'auto',
  },
});

const Button = styled.button`
  background-color:#76B39D;
  color: white;
  border: 2px solid white;
  padding: 8px; 
  width: 80%;
  margin-top: 5px;
  font-size: 15px;
`

const Perfil = styled.button`
  background-color:white;
  border: 2px solid #76B39D;
  padding: 8px; 
  width: 80%;
  margin-top: 5px;
  margin-bottom: 5px;
  color: #76B39D;
  font-size: 15px;
`

const HeaderHomeWrapper = styled.div`
background-color: #76B39D;
display: flex;
align-items: center;
color: white;
padding: 12px;
flex: 1 1;
i{

}
span{
  margin-left: 12px;
  font-size: 24px;
  font-family: 'Cabin', sans-serif;
}
`

const Inicio = styled.div`
  font-size: 20px;
  height: 55px;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`
const Boton = styled.div`
  width: 100%;
  display: flex;
  justify-content:flex-end;
`
const Draw = styled.div`
  width: 25px;
  height: 25px;
`
const SesionStyle = {
  width: '100%',
  display: 'flex',
  flexDirection: 'column',
  justifyContend: 'center',
}
 
const BotonStyle = {
  width: '100%',
  display: 'flex',
  flexDirection: 'column',
  justifyContend: 'center',
  alignItems: 'center',
}


class Sesion extends React.Component{

  constructor(props){
    super(props)
    this.logout=this.logout.bind(this);
  }
  logout(){
    client.auth().signOut()
  }
  state = {
    features: features,
    user:null
  }
  
  componentDidMount() {
    this.authListener();
  }
  
  authListener() {
    client.auth().onAuthStateChanged((user) => {
      console.log(user);
      if (user) {
        this.setState({ user });
        localStorage.setItem('user', user.uid);
      } else {
        this.setState({ user: null });
        localStorage.removeItem('user');
      }
    });
  }
  renderUser(){
    if(this.state.user){
        return (
        <List style={SesionStyle}> 
          {  
            myitems.map((text, index) => (
              <ListItem button key={index} onClick={ () => {navigate(`${text.link}`)} }>
              <ListItemIcon>{index % 2 === 0 ? <InboxIcon /> : <MailIcon />}</ListItemIcon>
              <ListItemText primary={text.name} />
              </ListItem>
              ))         
          }  
          <div style={BotonStyle}>
            <Perfil onClick={ () => {navigate('./perfil')}}> Perfil </Perfil>
            <Button onClick={this.logout}> Log Out</Button>
          </div>
        </List>
           
        )
    }else {
        return (
          <div style={BotonStyle}>
            <Button onClick={ ()=>{ navigate('./login') }}> Iniciar Sesion</Button>
          </div>
        )
    }  
  }

  render(){
    return(
      <Boton>
        {this.renderUser()}
      </Boton>
    )
  }
}


function HeaderHome(props) {
    
    const classes = useStyles();
    const [state, setState] = React.useState({
    left: false,
    user: null, 
  });
  
  const toggleDrawer = (side, open) => event => {
    if (event && event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
      return;
    }

    setState({ ...state, [side]: open });
  };

  const sideList = side => (
    <div
      className={classes.list}
      role="presentation"
      onClick={toggleDrawer(side, false)}
      onKeyDown={toggleDrawer(side, false)}
    >
      
      <Inicio onClick={ () => {navigate('/')}} >BookTravel</Inicio>  

      <Divider />
      <List>
        {

          items.map((text, index) => (
          <ListItem button key={index} onClick={ () => {navigate(`${text.link}`)} }>
            <ListItemIcon>{index % 2 === 0 ? <InboxIcon /> : <MailIcon />}</ListItemIcon>
            <ListItemText primary={text.item} />
          </ListItem>
        ))}
      </List>
      <Divider />
      <Sesion/>
    </div>
  );

    return (

    <HeaderHomeWrapper>
      <Draw  onClick={toggleDrawer('left', true)}>
        <i className = "material-icons">menu</i>
      </Draw>
      <span>{props.titulo}</span>
      <SwipeableDrawer
        open={state.left}
        onClose={toggleDrawer('left', false)}
        onOpen={toggleDrawer('left', true)}
      >
        {sideList('left')}
      </SwipeableDrawer>
       
    </HeaderHomeWrapper>
    )
}
  
export default HeaderHome  
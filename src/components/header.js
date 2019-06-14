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

const useStyles = makeStyles({
  list: {
    width: 250,
  },
  fullList: {
    width: 'auto',
  },
});

const HeaderHomeWrapper = styled.div`
background-color: #76B39D;
display: flex;
align-items: center;
color: white;
padding: 12px;
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



function HeaderHome(props) {
    
    const classes = useStyles();
  const [state, setState] = React.useState({
    left: false,
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
      <Inicio>BookTravel</Inicio>  
      <Divider />
      <List>
        {['Que Hacer', 'Destinos', 'Experiencias', 'Gastronomia', 'Galeria', 'Presupuesto'].map((text, index) => (
          <ListItem button key={text} onClick={ () => {navigate("/")} }>
            <ListItemIcon>{index % 2 === 0 ? <InboxIcon /> : <MailIcon />}</ListItemIcon>
            <ListItemText primary={text} />
          </ListItem>
        ))}
      </List>
      <Divider />
      <List>
        {['Mis Experiencias', 'Solicitar Ayuda', 'Buscar Guia', 'Brindar Ayuda'].map((text, index) => (
          <ListItem button key={text}>
            <ListItemIcon>{index % 2 === 0 ? <InboxIcon /> : <MailIcon />}</ListItemIcon>
            <ListItemText primary={text} />
          </ListItem>
        ))}
      </List>
    </div>
  );

    return (

    <HeaderHomeWrapper>
      <i className = "material-icons" onClick={toggleDrawer('left', true)}>menu</i>
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
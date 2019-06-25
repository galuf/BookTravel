import React, { Component } from 'react'
import styled from 'styled-components'
import { navigate } from "@reach/router"
import features from '../../utils/features'
import HeaderHome from '../../components/header'
import client from '../../config/client'
import ToastServive from 'react-material-toast';

const toast = ToastServive.new({
  place:'bottomRight',
  duration:2,
  maxCount:1
});

const GridFeaturesWrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-auto-rows: 112px;
  grid-gap: 4px;
  padding: 4px;
`

const FeatureWrapper = styled.div`
  position: relative;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: ${({bg})=> bg === "true" ? "#76B39D": "transparent"};
  img{
    position: absolute;
    width: 100%;
    height: 112px;
    object-fit: cover;
    object-position: center;
  }
  .layer {
    position: absolute;
    width: 100%;
    height: 112px;
    background-color: rgba(0,0,0,0.2);
  }
  .content {
    z-index: 1000;
    color: white;
    display: flex;
    flex-direction: column;
    align-items: center;
    i{
      font-size: 32px;
    }
    span{
      font-family: 'Cabin', sans-serif;
      font-size: 14px;
      font-weight: 500;
      margin-top: 4px;
    }
  }
`


const Feature = ({item: {urlImg, iconName, title, bg, link }, user }) => (
  <FeatureWrapper bg = { bg ? "true": "false"} onClick = { () => {
    if(user){
      navigate(link)
    }else{
      const id = toast.info('Debes Iniciar Sesion',()=>{
      console.log('closed')
    });
    }
  }}>
    <img src = {urlImg} alt = ""/>
    { !bg && <div className = "layer"/>}
    <div className = "content">
      <i className = "material-icons">{iconName}</i>
      <span>{title}</span>
    </div>
  </FeatureWrapper>
)

const GridFeatures = ({features, user}) => (
  <GridFeaturesWrapper>
    { features.map(( item , index) => (
      <Feature key = { index } item = {item} user={user}/>
    ))}
  </GridFeaturesWrapper>
)

export class Home extends Component {
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

  render() {
    const { features, user } = this.state;
    return (
      <div>
        <HeaderHome titulo = "Inicio"/>
        <GridFeatures features = { features } user = {user}/>
      </div>
    )
  }
}

export default Home

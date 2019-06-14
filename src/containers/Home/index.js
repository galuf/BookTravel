import React, { Component } from 'react'
import styled from 'styled-components'
import { navigate } from "@reach/router"
import features from '../../utils/features'
import HeaderHome from '../../components/header'
import client from '../../config/client'
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

const Feature = ({item: {urlImg, iconName, title, bg, link } }) => (
  <FeatureWrapper bg = { bg ? "true": "false"} onClick = { () => {
    navigate(link)
  }}>
    <img src = {urlImg} alt = ""/>
    { !bg && <div className = "layer"/>}
    <div className = "content">
      <i className = "material-icons">{iconName}</i>
      <span>{title}</span>
    </div>
  </FeatureWrapper>
)

const GridFeatures = ({features}) => (
  <GridFeaturesWrapper>
    { features.map(( item , index) => (
      <Feature key = { index } item = {item}/>
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
    features: features
  }
  render() {
    const { features } = this.state;
    return (
      <div>
        <HeaderHome titulo = "Inicio"/>
        <button onClick={this.logout}> logout</button> 
        <GridFeatures features = { features }/>
      </div>
    )
  }
}

export default Home

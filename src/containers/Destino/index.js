import React, { Component } from 'react'
import styled from 'styled-components'
import { navigate } from "@reach/router"
import destinos from '../../utils/destinos'

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

const HeaderHome = () => (
  <HeaderHomeWrapper>
    <i className = "material-icons">menu</i>
    <span>Inicio</span>
  </HeaderHomeWrapper>
)

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

const Feature = ({item: {urlImg, title, bg } }) => (
  <FeatureWrapper bg = { bg ? "true": "false"} onClick = { () => {
    navigate('/adios')
  }}>
    <img src = {urlImg} alt = ""/>
    { !bg && <div className = "layer"/>}
    <div className = "content">
      <span>{title}</span>
    </div>
  </FeatureWrapper>
)

const GridFeatures = ({destinos}) => (
  <GridFeaturesWrapper>
    { destinos.map(( item , index) => (
      <Feature key = { index } item = {item}/>
    ))}
  </GridFeaturesWrapper>
)

export class Destino extends Component {
  state = {
    destinos: destinos
  }
  render() {
    const { destinos } = this.state;
    return (
      <div>
         <HeaderHome/> 
        <GridFeatures destinos = { destinos }/>
      </div>
    )
  }
}

export default Destino

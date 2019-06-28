import React, { Component } from 'react'
import styled from 'styled-components'
import { navigate } from "@reach/router"
import platos from '../../utils/platos'
import HeaderHome from '../../components/header'

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

const Feature = ({item: {urlImg, title, link } }) => (
  <FeatureWrapper onClick = { () => {
    navigate(link)
  }}>
    <img src = {urlImg} alt = ""/>
    <div className = "content">
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

export class Gastronomia extends Component {
  state = {
    features: platos
  }
  render() {
    const { features } = this.state;
    const { children } = this.props;
    return (
      <div>
        <HeaderHome titulo="Gastronomia"/>
        <GridFeatures features = { features }/>
        {children}
      </div>
    )
  }
}

export default Gastronomia

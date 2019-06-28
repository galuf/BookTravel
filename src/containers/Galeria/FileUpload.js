import React, { Component } from 'react';
//import firebase from 'firebase';
import styled from 'styled-components'

const Upload = styled.input`

  position: absolute;
  top: 0;
  left: 0;
  right:0;
  bottom: 0;
  width: 100%;
  height: 100%;
  opacity: 0;
`
const Icono = styled.div`
  position: relative;
  color: white;
  height: 60px;
  width: 60px;
  background-color: #76B39D;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  
`
const Contenedor = styled.div`
  display: flex ;
  align-items: center;
`

class FileUpload extends Component {

  constructor(){
    super();
    this.state = {
      uploadValue: 0,
      //picture: null
    };  
  }

  render(){
    return(
      <Contenedor>
        {/* <progress value={this.props.uploadValue} max="100"></progress> */}
        <br/>
        <Icono>
          <i className = "material-icons">photo_camera</i>
          <Upload type="file" onChange={this.props.onUpload}/>
        </Icono>
      </Contenedor>
    )
  }    
}

export default FileUpload;
import React, { Component } from 'react';
import './Note.css';
import PropTypes from 'prop-types';
import styled from 'styled-components'

const Imagen = styled.img`
	width: 30%;

	height: 120px;
`
class Note extends Component {
	
	constructor(props) {
		super(props);
		this.noteContent = props.noteContent;
		this.noteId = props.noteId;
	}

	handleRemoveNote(id) {
		this.props.removeNote(id);
	}

	render(props) {
		return (
			<div style={{ display:"flex" ,flexDirection:"row",justifyContent:"space-around",marginTop:"15px"}}>
        <Imagen src={"http://lorempixel.com/500/500/sports/"} alt=""/> 
				<p
					className="btn-close"
					onClick={() => this.handleRemoveNote(this.noteId)}
				>
				&times;	
				</p>
				<p>{this.noteContent}</p>
			</div>
		)
	}

}

Note.propTypes = {
	noteContent: PropTypes.string	
};

export default Note;
import React, { Component } from 'react';
import './Note.css';
import PropTypes from 'prop-types';
import styled from 'styled-components'

const Imagen = styled.img`
    max-width: 30%;
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
			<div style={{ display:"flex" ,flexDirection:"row",justifyContent:"space-around"}}>
        <Imagen src={require("../../utils/índice.jpeg")} alt=""/> 
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
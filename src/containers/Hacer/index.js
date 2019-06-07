import React, { Component } from 'react'
import styled from 'styled-components'
import { navigate } from "@reach/router"
import experiencias from '../../utils/experiencias'
import NoteForm from '../NoteForm/NoteForm';
import Note from  '../Note/Note'
import firebase from 'firebase';
import  {DB_CONFIG}from  '../../config/config';
import 'firebase/database'
import axios from 'axios'
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
const Imagen = styled.img`
    max-width: 100%;
`
const Footer =styled.div `
	bottom: 10px;
	position: fixed;
	left: 500px;
	width: 100%;

	`
const HeaderHome = () => (
  <HeaderHomeWrapper>
    <i className = "material-icons">menu</i>
    <span>Inicio</span>
  </HeaderHomeWrapper>
)
// class Upload extends Component{
//   render(){
//    return    <input type="file"  onChange={this.fileSelectedHandler}/>

//   }

// }
class Experiencia extends Component {

	constructor() {
		super();
		this.state = {
			notes: [
			//	{noteId: 1, noteContent: 'Note 1'},
			//	{noteId: 2, noteContent: 'Note 2'}
			],
			selectdFile:null
		}
		this.addNote = this.addNote.bind(this);
		this.removeNote = this.removeNote.bind(this);

		// db connection
		this.app = firebase.initializeApp(DB_CONFIG);
		this.db = this.app.database().ref().child('notes');
	}

	componentDidMount() {
		const { notes } = this.state;
		this.db.on('child_added', snap => {
			notes.push({
				noteId: snap.key,
				noteContent: snap.val().noteContent
			});
 
			this.setState({notes});
		});

		this.db.on('child_removed', snap => {
			for(let i = 0; i < notes.length; i++) {
				if(notes[i].noteId === snap.key) {
					notes.splice(i , 1);
				}
			}
			console.log(notes);
			this.setState({notes});
		});

	}

	addNote(note) {
		/*
		let { notes } = this.state;
		notes.push({
			noteId: notes.length + 1,
			noteContent: note
		});
		this.setState({
			notes
		});
		*/
		this.db.push().set({noteContent: note});
	}	

	removeNote(noteId) {
		this.db.child(noteId).remove();
	}
	fileSelectedHandler=event=>{
         this.setState({
			 selectdFile:event.target.files
		 })
		 console.log(event.target.files)
	}
	//  fileUploadHandler =()=>(
	//  	<Imagen src = {this.state.selectdFile} alt = ""/>

	// )
	
	render() {
		return (
			<div className="notesContainer" >
			
					<HeaderHome/> 


				<div className="notesBody" >
					{
						this.state.notes.map(note => {
							return (
								<Note 
									noteContent={note.noteContent} 
									noteId={note.noteId}
									key={note.noteId}
									removeNote={this.removeNote}
								/>)
						})
					}
					{/* <Imagen src = {this.state.selectdFile} alt = "" /> */}
				</div>
				
				<Footer >
				{/* <input type="file"  onChange={this.fileSelectedHandler}/> */}
			{/* //	<button onClick={this.fileUploadHandler} >Upload</button>	 */}
					<NoteForm addNote={this.addNote}/>
				</Footer>
			</div>
		);
	}
}
  
  export default Experiencia
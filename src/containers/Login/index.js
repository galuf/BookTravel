import React, {Component} from 'react'
//import Forms from './form'
import axios from 'axios'
import styled from 'styled-components'
import firebase from 'firebase';
// import  {DB_CONFIG}from  '../../config/config';
import 'firebase/database'
const Log = styled.div`
    display: flex;
    align-items: center;
    margin-left:60px;
`
// export default class Forms2 extends Component{
//     constructor(){
//         super()
//         this.state={
//                  users:[ 

//                 ] 
//         }
//        this.app=firebase.initializeApp(DB_CONFIG) ;
//        this.db=this.app.database().ref().child('users')
//     }
//     componentDidMount() {
// 		const { users } = this.state;
// 		this.db.on('child_added', snap => {
// 			users.push({
// 				userId: snap.key,
// 				name: snap.val().name
// 			});

//             this.setState({users});
//             console.log(users);

// 		});

// 		this.db.on('child_removed', snap => {
// 			for(let i = 0; i < users.length; i++) {
// 				if(users[i].userId === snap.key) {
// 					users.splice(i , 1);
// 				}
// 			}
// 			console.log(users);
// 			this.setState({users});
// 		});

// }


// addNote(user) {

//     this.db.push().set({nameContent: user});
// }	

// removeNote(userId) {
//     this.db.child(userId).remove();
// }
//     // handleSubmit=(e)=>{
//     //     //evento para evitar que el boton haga submit
//     //     e.preventDefault()
//     //     console.log(this.state)
//     //     const  { name, email,password, sexo, date,kind}=this.state
       
//     // }
  
//     render(){
//         return(
//          <div >
//              <Log>
//             <form  >
                 
          
//                      <br/>
//                     <p> 
//                           <input
//                              style={{color:'#000',width:180,height:40}}
                        
//                        //   id='name'
//                           name='name'
//                          onChange={e=>this.setState({name:e.target.value})}
//                           placeholder='nombre de Usuario'
//                        //   ref={inputElement=>this.inputName=inputElement}
//                          value={this.state.name}
//                         />  
      
//                      </p>       
//                      <br/>
//                      <p>
//                        <input
//                          style={{color:'#000',width:180,height:40}}
//                          onChange={e=>this.setState({email:e.target.value})}
//                           type="email"
//                          // id='facebook'
//                           name='email'
//                          // onChange={e=>this.setState({inputTwitter:e.target.value})}
//                          value={this.state.email}

//                           placeholder='Introduce tu email'
//                         //  value={this.state.inputTwitter}
//                         /> 
//                         </p> 
//                         <br/>
//                     <p>
//                         <input
//                           style={{color:'#000',width:180,height:40}}
//                           onChange={e=>this.setState({sexo:e.target.value})}
//                          name='sexo'
//                          value={this.state.sexo}

//                         placeholder="sexo"
//                         />
//                     </p>
//                     <br/>
//                     <p>

//                         <input
//                          style={{color:'#000',width:180,height:40}}
//                          onChange={e=>this.setState({date:e.target.value})}
//                         type="date"
//                         value={this.setState.date}
//                          name='Fecha de nacimiento'
//                         placeholder="Fecha de nacimiento"
//                         />
//                     </p>
//                     <br/>
//                     <p>

//                     <input
//                     style={{color:'#000',width:180,height:40}}
//                     onChange={e=>this.setState({kind:e.target.value})}
                    
//                     value={this.setState.kind}
//                     name='kind of user'
//                     placeholder="Ingresa el tipo de usuario"
//                     />
//                     </p>
//                     <br/>
//                     <p>
//                         <input
//                          style={{color:'#000',width:180,height:40}}
//                          onChange={e=>this.setState({password:e.target.value})}
//                          value={this.state.password}
//                          type='password'
//                          name='password'
//                         placeholder="password"
//                         />
//                     </p>
//                     <br/>
//                     <p>
//                         <input
//                          style={{color:'#000',width:180,height:40}}
//                          type='password'
//                          name='cpassword'
//                         placeholder="Confirmar password"
//                         />
//                     </p>
                        
//                     <br/>
//                     <p>
//                     <button onClick={this.addNote} style={{background:'#22699E',width:180,height:30}}> Registrarse </button>
    


//                     </p> 
                           
                        
                      
                          
                        
                               
                        
                    
//                     </form>
//               </Log>
//              </div>
  
  
//         )
  
        
//     }
// }


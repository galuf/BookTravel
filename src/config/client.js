import firebase from 'firebase'
import 'firebase/auth';
import 'firebase/database';
const defaultAppConfig = {
	apiKey: "AIzaSyDuOKF1KFiwhuJq-X0X22H56kN2AFdTiw4",
	authDomain: "tour-2c1c8.firebaseapp.com",
	databaseURL: "https://tour-2c1c8.firebaseio.com",
	projectId: "tour-2c1c8",
	storageBucket: "tour-2c1c8.appspot.com",
	messagingSenderId: "750445169589",
	appId: "1:750445169589:web:06a2526d78f03aeb"
}

const client = firebase.initializeApp(defaultAppConfig)
const databaseRef = firebase.database()
export {databaseRef}
export default client

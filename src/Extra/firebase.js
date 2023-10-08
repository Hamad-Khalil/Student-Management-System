import { initializeApp} from 'firebase/app'
import {getFirestore } from 'firebase/firestore'
import App from '../App';

const firestore= getFirestore(App)

const createData=(name, contact, address)=>{
    
}
const firebaseConfig = {
    apiKey: "AIzaSyDK3EG77aVu7vIEbRxXiktRTLCfVs6AgCs",
    authDomain: "student-managment-system-app.firebaseapp.com",
    projectId: "student-managment-system-app",
    storageBucket: "student-managment-system-app.appspot.com",
    messagingSenderId: "981474108263",
    appId: "1:981474108263:web:2d7b37025a11074ab805c2"
  };
export default
 App = initializeApp(firebaseConfig)  
export const db = getFirestore(App)
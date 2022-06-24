import firebase from 'firebase/app'
import 'firebase/auth'
import { getAuth } from 'firebase/auth'
import firebaseConfig from './firebaseConfig'

const app = firebase.initializeApp(firebaseConfig)

export const auth = getAuth(app)

export default app

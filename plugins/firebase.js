import * as firebase from 'firebase/app'
import 'firebase/auth'

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyBGCWh_G9lYKjfBxDpHsyhsCSaPXd6Aw7U",
    authDomain: "manuka-firebase.firebaseapp.com",
    projectId: "manuka-firebase",
    storageBucket: "manuka-firebase.appspot.com",
    messagingSenderId: "440793085820",
    appId: "1:440793085820:web:cdec785aaa35c43a6896f9",
    measurementId: "G-THHCWSDGFL"
};
// Initialize Firebase
!firebase.apps.length ? firebase.initializeApp(firebaseConfig) : ''


export const auth = firebase.auth()
export default firebase
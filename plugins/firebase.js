import firebase from 'firebase/app'
import "firebase/database"
import 'firebase/auth'

require('firebase/auth')

var firebaseConfig = {
    apiKey: "AIzaSyBboWg3jcLnKIeo5Q8BsVpCEGScKAdvkmA",
    authDomain: "manuka-nuxt-bf3e6.firebaseapp.com",
    projectId: "manuka-nuxt-bf3e6",
    storageBucket: "manuka-nuxt-bf3e6.appspot.com",
    messagingSenderId: "18753036510",
    appId: "1:18753036510:web:8c74a77b9156dee699224f"
}

if (firebase.apps.length == 0) {

    var defaultProject = firebase.initializeApp(firebaseConfig)

}
var defaultProject = firebase.apps[0]


// const database = defaultProject.database()



export default firebase





//   firebase.initializeApp(firebaseConfig);
//   const database=firebase.database()
//   database.ref('messages').on('value',function(){

//   })
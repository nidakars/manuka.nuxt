import firebase from 'firebase/app'
import "firebase/database"
import 'firebase/auth'

require('firebase/auth')

var firebaseConfig = {
    apiKey: "AIzaSyBDl0DImA2BlNJndznBci_rmIzYa8VhEEA",
    authDomain: "manuka-nuxt.firebaseapp.com",
    databaseURL: "https://manuka-nuxt-default-rtdb.firebaseio.com",
    projectId: "manuka-nuxt",
    storageBucket: "manuka-nuxt.appspot.com",
    messagingSenderId: "848001636087",
    appId: "1:848001636087:web:234e4fe76dbdb91876e5f2"
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
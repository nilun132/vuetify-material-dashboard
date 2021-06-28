import * as firebase from 'firebase/app'
import 'firebase/auth'
import 'firebase/firestore'

// firebase init - add your own config here
const firebaseConfig = {
    apiKey: 'AIzaSyBkDMMONV5LDlHJp6-sWMBpAyAesOMRQuQ',
    authDomain: 'smartfarm-7a278.firebaseapp.com',
    databaseURL: 'https://smartfarm-7a278-default-rtdb.asia-southeast1.firebasedatabase.app',
    projectId: 'smartfarm-7a278',
    storageBucket: 'smartfarm-7a278.appspot.com',
    messagingSenderId: '1036535197662',
    appId: '1:1036535197662:web:195f17291aed2a3d53774f',
}
firebase.initializeApp(firebaseConfig).then((_) => console.log('connect success'))

// utils
const db = firebase.firestore()
const auth = firebase.auth()

// collection references
const usersCollection = db.collection('users')
const postsCollection = db.collection('posts')
const commentsCollection = db.collection('comments')
const likesCollection = db.collection('likes')

// export utils/refs
export {
  db,
  auth,
  usersCollection,
  postsCollection,
  commentsCollection,
  likesCollection,
}

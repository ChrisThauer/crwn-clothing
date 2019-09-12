import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
  apiKey: 'AIzaSyBtj_v-J7HnYVZJizJoJSM3WlHY_GHaZvg',
  authDomain: 'crwn-db-aebe0.firebaseapp.com',
  databaseURL: 'https://crwn-db-aebe0.firebaseio.com',
  projectId: 'crwn-db-aebe0',
  storageBucket: '',
  messagingSenderId: '124939564197',
  appId: '1:124939564197:web:f3f6d76ab9ca51dff1494c'
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
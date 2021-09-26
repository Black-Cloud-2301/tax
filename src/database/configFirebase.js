import 'firebase/auth'; // for authentication
import 'firebase/storage'; // for storage
import 'firebase/database'; // for realtime database
// import firebase from "firebase";
import firebase from 'firebase/app';
// import 'firebase/auth';

const firebaseConfig = {
  apiKey: 'AIzaSyA_7hcbcmZllVaUtzR4VvSfTi7qdxT8neI',
  authDomain: 'notereacttest-a0fc5.firebaseapp.com',
  databaseURL: 'https://notereacttest-a0fc5-default-rtdb.firebaseio.com',
  projectId: 'notereacttest-a0fc5',
  storageBucket: 'notereacttest-a0fc5.appspot.com',
  messagingSenderId: '630382193066',
  appId: '1:630382193066:web:9746d767fbe315f3bde3d3',
  measurementId: 'G-11JQTX5T3J',
};
firebase.initializeApp(firebaseConfig);
export const noteData = firebase.database().ref('taxInfo');

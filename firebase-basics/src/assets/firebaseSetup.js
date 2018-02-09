import firebase from 'firebase';

firebase.initializeApp({
  apiKey: 'apiKey',
  authDomain: 'projectId.firebaseapp.com',
  databaseURL: 'https://databaseName.firebaseio.com',
  storageBucket: 'bucket.appspot.com'
});

const database = firebase.database();

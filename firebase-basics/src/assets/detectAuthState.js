import firebase from 'firebase';

const auth = firebase.auth();

firebase.auth().onAuthStateChanged(function (user) {
  if (user) {
    // User is signed in.
  } else {
    // No user is signed in.
  }
});

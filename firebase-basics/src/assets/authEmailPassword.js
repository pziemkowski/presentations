import firebase from 'firebase';

const email = 'email';
const password = 'password';

const auth = firebase.auth();

auth.createUserWithEmailAndPassword(email, password).catch(function (error) {
  // Handle Errors here.
  const errorCode = error.code;
  const errorMessage = error.message;
  // ...
});

auth.signInWithEmailAndPassword(email, password).catch(function (error) {
  // Handle Errors here.
  const errorCode = error.code;
  const errorMessage = error.message;
  // ...
});

auth.signOut().then(function() {
  // Sign-out successful.
})
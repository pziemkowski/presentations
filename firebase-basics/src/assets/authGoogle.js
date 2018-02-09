import firebase from 'firebase';

const auth = firebase.auth();

const provider = new firebase.auth.GoogleAuthProvider();
provider.addScope('https://www.googleapis.com/auth/contacts.readonly');

auth.signInWithPopup(provider).then(function (result) {
  // This gives you a Google Access Token. You can use it to access the Google API.
  const token = result.credential.accessToken;
  // The signed-in user info.
  const user = result.user;
  // ...
});

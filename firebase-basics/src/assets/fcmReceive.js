import firebase from 'firebase';

const messaging = firebase.messaging();

messaging.onMessage(function (payload) {
  console.log('Message received. ', payload);
  // ...
});
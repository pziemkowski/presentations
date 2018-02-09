import firebase from 'firebase';

const messaging = firebase.messaging();

messaging.requestPermission().then(function () {
  console.log('Notification permission granted.');
});

const sendTokenToServer = () => {};
const updateUIForPushEnabled = () => {};

messaging.getToken().then(function (currentToken) {
  if (currentToken) {
    sendTokenToServer(currentToken);
    updateUIForPushEnabled(currentToken);
  }
});
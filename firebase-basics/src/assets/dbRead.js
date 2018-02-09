import firebase from 'firebase';

const db = firebase.database();

const ref = db.ref('users').child('pziemkowski');

ref.on('value', (snapshot) => {
  const value = snapshot.val();
  const { key } = snapshot;

  console.log(key, value);
});

const promise = ref.once('value');
promise.then((snapshot) => {
  const value = snapshot.val();
  const { key } = snapshot;

  console.log(key, value);
});

const handle = () => {};

db.ref('users').on('child_added', handle);

db.ref('users').on('child_removed', handle);

db.ref('users').on('child_changed', handle);
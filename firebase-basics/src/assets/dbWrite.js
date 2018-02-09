import firebase from 'firebase';

const db = firebase.database();

db.ref('users/pziemkowski/firstName').set('Patryk');

db.ref('users').child('pziemkowski').set({
  firstName: 'Patryk',
  lastName: 'Ziemkowski',
  type: 'human',
});

db.ref('users').child('pziemkowski').update({
  firstName: 'Patryk',
});

db.ref('users').push({
  firstName: 'Nowy',
  lastName: 'Użytkownik',
  type: 'unknown'
});

/**
 * {
 *    "users": {
 *      "-=23jfsfoj324f": {
 *        "firstName": "Nowy",
 *        "lastName": "Użytkownik",
 *        "type": "unknown"
 *      }
 *    }
 * }
 **/
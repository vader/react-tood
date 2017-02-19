import firebase from 'firebase';

try {
  var config = {
    apiKey: process.env.API_KEY,
    authDomain: process.env.AUTH_DOMAIN,
    databaseURL: process.env.DATABASE_URL,
    storageBucket: process.env.STORAGE_BUCKET,
    messagingSenderId: process.env.MESSAGE_ID
  };
  firebase.initializeApp(config);
} catch (e) {
  console.log(e);
}

export let githubProvider = new firebase.auth.GithubAuthProvider();
export let firebaseRef = firebase.database().ref();

export default firebase;

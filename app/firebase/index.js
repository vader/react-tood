import firebase from 'firebase';

try {
  var config = {
    apiKey: "AIzaSyD5tStUoVXwUDyzCfNtZhRw2kd6ipyvj7A",
    authDomain: "fiskl-todo-app.firebaseapp.com",
    databaseURL: "https://fiskl-todo-app.firebaseio.com",
    storageBucket: "fiskl-todo-app.appspot.com",
    messagingSenderId: "843974020211"
  };
  firebase.initializeApp(config);
} catch (e) {
  console.log(e);
}

export let firebaseRef = firebase.database().ref();

export default firebase;
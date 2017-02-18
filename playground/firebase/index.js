import firebase from 'firebase';

var config = {
  apiKey: "AIzaSyD5tStUoVXwUDyzCfNtZhRw2kd6ipyvj7A",
  authDomain: "fiskl-todo-app.firebaseapp.com",
  databaseURL: "https://fiskl-todo-app.firebaseio.com",
  storageBucket: "fiskl-todo-app.appspot.com",
  messagingSenderId: "843974020211"
};
firebase.initializeApp(config);

let firebaseRef = firebase.database().ref();
firebaseRef.set(
  {
    app: {
      name: 'todo-app',
      version: '1.0.0'
    },
    isRunning: true,
    user: {
      name: 'Shawn',
      age: 26
    }
  }
);

let logData = (snapshot) => {
  console.log('Listened to changes for value', snapshot.val());
};

firebaseRef.child('user').on('value', logData);

firebaseRef.update({'user/name': 'One hell of a user'});
firebaseRef.update({'user/name': 'One useless user'});
firebaseRef.update({isRunning: false});

firebaseRef.once('value').then((snapshot) => {
  console.log('Success', snapshot.val());
}, (e) => {
  console.log('Failed');
});
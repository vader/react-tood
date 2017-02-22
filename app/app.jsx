var React = require('react');
var ReactDOM = require('react-dom');
var {Provider} = require('react-redux');
var { hashHistory } = require('react-router');

let actions = require('actions');
let store = require('configureStore').configure();
import firebase from 'app/firebase/'
import router from 'app/router/'

firebase.auth().onAuthStateChanged((user) => {
  if(user){
    console.log('dispatching login', user.uid);
    store.dispatch(actions.login(user.uid));
    store.dispatch(actions.startAddTodos());
    hashHistory.push('/todos')
  }else{
    console.log('dispatching logout');
    store.dispatch(actions.logout());
    hashHistory.push('/');
  }
});


// Start foundation select document using jquery and call the foundation method
$(document).foundation();

//app.css
require('style!css!sass!applicationStyles');

ReactDOM.render(
  <Provider store={store}>
    {router}
  </Provider>, document.getElementById('app'));

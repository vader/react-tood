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
    hashHistory.push('/todos')
  }else{
    hashHistory.push('/')
  }
});

store.dispatch(actions.startAddTodos());

// Start foundation select document using jquery and call the foundation method
$(document).foundation();

//app.css
require('style!css!sass!applicationStyles');

ReactDOM.render(
  <Provider store={store}>
    {router}
  </Provider>, document.getElementById('app'));

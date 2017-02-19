import React from 'react';
var { Route, Router, IndexRoute, hashHistory } = require('react-router');

import TodoApp from 'TodoApp';

import Login from 'Login';
import firebase from 'app/firebase/'


var requireLogin = (nextState, replace, next) => {
  if(!firebase.auth().currentUser){
    replace('/');
  }
  next();
};

var redirectLoggedIn = (nextState, replace, next) => {
  if(firebase.auth().currentUser){
    replace('/todos');
  }
  next();
};

export default (
  <Router history={hashHistory} >
  <Route path='/'>
    <IndexRoute component={Login} onEnter={redirectLoggedIn}/>
    <Route path='/todos' component={TodoApp} onEnter={requireLogin}/>
  </Route>
</Router>
)


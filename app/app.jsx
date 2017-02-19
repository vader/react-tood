var React = require('react');
var ReactDOM = require('react-dom');
var {Provider} = require('react-redux');
var { Route, Router, IndexRoute, hashHistory } = require('react-router');

import TodoApp from 'TodoApp';

let actions = require('actions');
let store = require('configureStore').configure();
let TodoApi = require('TodoApi');
import Login from 'Login';

store.dispatch(actions.startAddTodos());

// Start foundation select document using jquery and call the foundation method
$(document).foundation();

//app.css
require('style!css!sass!applicationStyles');

ReactDOM.render(
  <Provider store={store}>
    <Router history={hashHistory} >
      <Route path='/'>
        <IndexRoute component={Login}/>
        <Route path='/todos' component={TodoApp}/>
      </Route>
    </Router>
  </Provider>, document.getElementById('app'));

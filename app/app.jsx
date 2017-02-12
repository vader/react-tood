var React = require('react');
var ReactDOM = require('react-dom');
var {Provider} = require('react-redux');

var { Route, Router, IndexRoute, hashHistory } = require('react-router');

var TodoApp = require('TodoApp');

let actions = require('actions');
let store = require('configureStore').configure();

store.subscribe( () => {
  console.log('New state', store.getState());
});

// Start foundation select document using jquery and call the foundation method
$(document).foundation();

//app.css
require('style!css!sass!applicationStyles');

ReactDOM.render(
  <Provider store={store}>
    <TodoApp/>
  </Provider>, document.getElementById('app'));

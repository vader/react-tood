var React = require('react');
var ReactDOM = require('react-dom');
var {Provider} = require('react-redux');
var { Route, Router, IndexRoute, hashHistory } = require('react-router');

var TodoApp = require('TodoApp');

let actions = require('actions');
let store = require('configureStore').configure();
let TodoApi = require('TodoApi');

store.subscribe( () => {
  let state = store.getState();
  console.log('New state', state);
  TodoApi.setTodos(state.todos);
});

let initialTodos = TodoApi.getTodos();
store.dispatch(actions.addTodos(initialTodos));

// Start foundation select document using jquery and call the foundation method
$(document).foundation();

//app.css
require('style!css!sass!applicationStyles');

ReactDOM.render(
  <Provider store={store}>
    <TodoApp/>
  </Provider>, document.getElementById('app'));

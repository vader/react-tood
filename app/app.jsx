var React = require('react');
var ReactDOM = require('react-dom');
var { Route, Router, IndexRoute, hashHistory } = require('react-router');

// Load foundation

// Start foundation select document using jquery and call the foundation method
$(document).foundation();

//app.css
require('style!css!sass!applicationStyles');

ReactDOM.render(
  <p>Boilerplate 3 project</p>, document.getElementById('app'));

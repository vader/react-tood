var React = require('react');
var ReactDOM = require('react-dom');
var expect = require('expect');
var TestUtils = require('react-addons-test-utils');
var $ = require('jQuery');

var TodoList = require('TodoList');

//Use describe from Mocha to format and display the tests
describe('TodoList tests', () => {
  it('should exist', () => {
    expect(TodoList).toExist();
  })
});

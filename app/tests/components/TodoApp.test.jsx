var React = require('react');
var ReactDOM = require('react-dom');
var expect = require('expect');
var TestUtils = require('react-addons-test-utils');
var $ = require('jQuery');

var TodoApp = require('TodoApp');

describe('TodoApp tests', () => {
  it('it should exist', () => {
    expect(TodoApp).toExist();
  });

  it('should add new todo to the todo state in handleAddTodo', function () {
    let todoText = 'Sleep for 8 hours';
    let app = TestUtils.renderIntoDocument(<TodoApp/>);

    app.setState({todo: []});
    app.handleAddTodo(todoText);

    expect(app.state.todo.length).toBe(1);
    expect(app.state.todo[0].text).toBe(todoText);
  })
});
var React = require('react');
var ReactDOM = require('react-dom');
var expect = require('expect');
var TestUtils = require('react-addons-test-utils');
var $ = require('jQuery');

var TodoApp = require('TodoApp');
var TodoList = require('TodoList');
var TodoItem = require('TodoItem');

describe('TodoApp tests', () => {
  it('it should exist', () => {
    expect(TodoApp).toExist();
  });

  it('should add new todo to the todo state in handleAddTodo', function () {
    let todoText = 'Sleep for 8 hours';
    let app = TestUtils.renderIntoDocument(<TodoApp/>);

    app.setState({ todo: [] });
    app.handleAddTodo(todoText);

    expect(app.state.todo.length).toBe(1);
    expect(app.state.todo[0].text).toBe(todoText);
  });

  it('should handle toggle', function () {
    let todoText = 'Sleep for 8 hours';

    let todoData = [{
      id: 10,
      completed: false,
      text: todoText
    }];

    let todoApp = TestUtils.renderIntoDocument(<TodoApp/>);
    todoApp.setState({ todo: todoData });
    expect(todoApp.state.todo[0].completed).toBe(false);
    todoApp.handleToggle(10);
    expect(todoApp.state.todo[0].completed).toBe(true);
  })


});
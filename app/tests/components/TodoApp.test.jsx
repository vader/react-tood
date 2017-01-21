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
    expect(app.state.todo[0].createdAt).toBeA('number');
  });

  it('should handle toggle', function () {
    let todoText = 'Sleep for 8 hours';

    let todoData = [{
      id: 10,
      completed: false,
      text: todoText
    }];

    let app = TestUtils.renderIntoDocument(<TodoApp/>);
    app.setState({ todo: todoData });
    expect(app.state.todo[0].completed).toBe(false);
    app.handleToggle(10);
    expect(app.state.todo[0].completed).toBe(true);
    expect(app.state.todo[0].completedAt).toBeA('number');

  })

  it('should toggle completed date', function () {
    let todoText = 'Sleep for 8 hours';

    let todoData = [{
      id: 10,
      completed: true,
      text: todoText,
      createdAt: 1484980720,
      completedAt: 1484980720
    }];

    let app = TestUtils.renderIntoDocument(<TodoApp/>);
    app.setState({ todo: todoData });
    app.handleToggle(10);
    expect(app.state.todo[0].completedAt).toBe(undefined);

  })

});
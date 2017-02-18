var React = require('react');
var ReactDOM = require('react-dom');
var expect = require('expect');
var TestUtils = require('react-addons-test-utils');
var $ = require('jQuery');

import {TodoItem} from 'TodoItem';
import ConnectedTodoList,  {TodoList} from 'TodoList'

import * as actions from 'actions';

describe('TodoItem tests', () => {
  it('it should exist', () => {
    expect(TodoItem).toExist();
  });

  it('should dispatch TOGGLE_TODO action on click', function () {

    let todo = {
      id: '123',
      text: 'Some todo',
      completed: true,
    };

    let action = actions.startToggleTodo(todo.id, !todo.completed);

    let spy = expect.createSpy();
    let todoItem = TestUtils.renderIntoDocument(<TodoItem key={todo.id} {...todo} dispatch={spy} />);

    let $el = $(ReactDOM.findDOMNode(todoItem));
    let find = $el[0];
    TestUtils.Simulate.click(find);

    expect(spy).toHaveBeenCalledWith(action);
  })
});
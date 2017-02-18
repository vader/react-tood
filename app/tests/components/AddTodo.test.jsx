var React = require('react');
var ReactDOM = require('react-dom');
var expect = require('expect');
var TestUtils = require('react-addons-test-utils');
var $ = require('jQuery');

import * as actions from 'actions';

var {AddTodo} = require('AddTodo');

describe('AddTodo tests', () => {
  it('it should exist', () => {
    expect(AddTodo).toExist();
  });

  it('should dispatch ADD_TODO when valid todo text', () => {
    let spy = expect.createSpy();
    let todoText = 'Wash elephant';
    let action = actions.startAddTodo(todoText);

    let todoForm = TestUtils.renderIntoDocument(<AddTodo dispatch={spy}/>);
    let $el = $(ReactDOM.findDOMNode(todoForm));
    todoForm.refs.todoItem.value = action.text;
    let form = $el.find('form')[0];
    TestUtils.Simulate.submit(form);

    expect(spy).toHaveBeenCalledWith(action);
  });

  it('should not dispatch ADD_TODO when invalid search text', () => {
    let spy = expect.createSpy();
    let todoText = '';
    let action = {
      type: 'ADD_TODO',
      text: todoText
    };

    let todoForm = TestUtils.renderIntoDocument(<AddTodo dispatch={spy}/>);
    let $el = $(ReactDOM.findDOMNode(todoForm));
    todoForm.refs.todoItem.value = action.text;
    let form = $el.find('form')[0];
    TestUtils.Simulate.submit(form);

    expect(spy).toNotHaveBeenCalled();
  });
});
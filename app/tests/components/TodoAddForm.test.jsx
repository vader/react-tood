var React = require('react');
var ReactDOM = require('react-dom');
var expect = require('expect');
var TestUtils = require('react-addons-test-utils');
var $ = require('jQuery');

var TodoAddForm = require('TodoAddForm');

describe('TodoAddForm tests', () => {
  it('it should exist', () => {
    expect(TodoAddForm).toExist();
  });

  it('should only add valid values', () => {
    let spy = expect.createSpy();
    let todoForm = TestUtils.renderIntoDocument(<TodoAddForm onAddTodo={spy}/>);
    let $el = $(ReactDOM.findDOMNode(todoForm));

    todoForm.refs.todoItem.value = 'todo';
    let find = $el.find('form')[0];
    TestUtils.Simulate.submit(find);
    expect(spy).toHaveBeenCalled();
  });

  it('should not add invalid values', () => {
    let spy = expect.createSpy();
    let todoForm = TestUtils.renderIntoDocument(<TodoAddForm onAddTodo={spy}/>);
    let $el = $(ReactDOM.findDOMNode(todoForm));

    todoForm.refs.todoItem.value = '';
    let find = $el.find('form')[0];
    TestUtils.Simulate.submit(find);
    expect(spy).toNotHaveBeenCalled();
  });
});
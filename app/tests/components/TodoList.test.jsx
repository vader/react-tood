var React = require('react');
var ReactDOM = require('react-dom');
var expect = require('expect');
var TestUtils = require('react-addons-test-utils');
var $ = require('jQuery');

var TodoList = require('TodoList');
var TodoItem = require('TodoItem');

const TD = [
  {
    id: 1,
    text: "Walk the dog"
  }, {
    id: 2,
    text: "Feed the cat"
  }, {
    id: 3,
    text: "Fly the fish"
  }, {
    id: 4,
    text: "Play with parrot"
  }, {
    id: 5,
    text: "Swim with dolphin"
  }, {
    id: 6,
    text: "Sail away after saying goodbye to this cruel world"
  },
];

//Use describe from Mocha to format and display the tests
describe('TodoList tests', () => {
  it('should exist', () => {
    expect(TodoList).toExist();
  });


  it('should contain all list todos', () => {
    const TODO_LIST = TestUtils.renderIntoDocument(<TodoList todoList={TD}/>);
    let todoComponents = TestUtils.scryRenderedComponentsWithType(TODO_LIST, TodoItem);
    expect(todoComponents.length).toBe(6);
  });

});

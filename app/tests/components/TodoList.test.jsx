var React = require('react');
var ReactDOM = require('react-dom');
var expect = require('expect');
var TestUtils = require('react-addons-test-utils');
var $ = require('jQuery');

let {Provider} = require('react-redux');

import {configure} from 'configureStore';
import ConnectedTodoList,  {TodoList} from 'TodoList';
import ConnectedTodoItem,  {TodoItem} from 'TodoItem';

const TD = [
  {
    id: 1,
    text: "Walk the dog",
    completed:false,
    completedAt:undefined,
    createdAt: 500
  }, {
    id: 2,
    text: "Feed the cat",
    completed:false,
    completedAt:undefined,
    createdAt: 500
  },
];

//Use describe from Mocha to format and display the tests
describe('TodoList tests', () => {
  it('should exist', () => {
    expect(TodoList).toExist();
  });


  it('should contain all list todos', () => {

    var store = configure({
      todos: TD
    });

    let provider = TestUtils.renderIntoDocument(
      <Provider store={store}>
        <ConnectedTodoList/>
      </Provider>
    );

    let todoList = TestUtils.scryRenderedComponentsWithType(provider, ConnectedTodoList)[0];
    let todoComponents = TestUtils.scryRenderedComponentsWithType(todoList, ConnectedTodoItem);

    expect(todoComponents.length).toBe(TD.length);
  });
});

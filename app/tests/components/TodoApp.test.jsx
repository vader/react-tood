var React = require('react');
var ReactDOM = require('react-dom');
var { Provider } = require('react-redux');
var expect = require('expect');
var TestUtils = require('react-addons-test-utils');
var $ = require('jQuery');

let configureStore = require('configureStore');

var TodoApp = require('TodoApp');
import TodoList from 'TodoList';
var TodoItem = require('TodoItem');

describe('TodoApp tests', () => {
  it('it should exist', () => {
    expect(TodoApp).toExist();
  });

  it('should render TodoList', () => {
    var store = configureStore.configure();
    var provider = TestUtils.renderIntoDocument(
      <Provider store={store}>
        <TodoApp/>
      </Provider>
    );
    var todoApp = TestUtils.scryRenderedComponentsWithType(provider, TodoApp)[0];
    var todoList = TestUtils.scryRenderedComponentsWithType(todoApp, TodoList);

    expect(todoList.length).toEqual(1)
  });


});
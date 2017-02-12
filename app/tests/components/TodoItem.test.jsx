var React = require('react');
var ReactDOM = require('react-dom');
var expect = require('expect');
var TestUtils = require('react-addons-test-utils');
var $ = require('jQuery');

var {TodoItem} = require('TodoItem');
import ConnectedTodoList,  {TodoList} from 'TodoList'

describe('TodoItem tests', () => {
  it('it should exist', () => {
    expect(TodoItem).toExist();
  });

  it('should dispatch TOGGLE_TODO action on click', function () {
    let todoText = 'Sleep for 8 hours';

    let todo = {
      id: 10,
      completed: false,
      text: todoText
    };

    let spy = expect.createSpy();
    let todoItem = TestUtils.renderIntoDocument(<TodoItem key={todo.id} {...todo} dispatch={spy} />);

    let $el = $(ReactDOM.findDOMNode(todoItem));
    let find = $el[0];
    TestUtils.Simulate.click(find);

    expect(spy).toHaveBeenCalledWith({
      type : 'TOGGLE_TODO',
      id: todo.id
    });


  })
});
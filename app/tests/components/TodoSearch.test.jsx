var React = require('react');
var ReactDOM = require('react-dom');
var expect = require('expect');
var TestUtils = require('react-addons-test-utils');
var $ = require('jQuery');

var {TodoSearch} = require('TodoSearch');

describe('TodoSearch', () => {
  it('should exist', () => {
    expect(TodoSearch).toExist();
  });

  it('should dispatch SET_SEARCH_TEXT on valid search text', () => {
    let searchText = 'Rabbit';
    let action = {
      type: 'SET_SEARCH_TEXT',
      searchText: searchText
    };
    let spy = expect.createSpy();
    var todoSearch = TestUtils.renderIntoDocument(<TodoSearch dispatch={spy}/>);

    todoSearch.refs.searchText.value = searchText;
    TestUtils.Simulate.change(todoSearch.refs.searchText);

    expect(spy).toHaveBeenCalledWith(action);

  });

  it('should dispatch TOGGLE_SHOW_COMPLETED when show completed selected', () => {
    let action = {
      type : 'TOGGLE_SHOW_COMPLETED',
    };

    let spy = expect.createSpy();
    let todoSearch = TestUtils.renderIntoDocument(<TodoSearch dispatch={spy}/>);
    todoSearch.refs.showCompleted.checked = true;
    TestUtils.Simulate.change(todoSearch.refs.showCompleted);
    expect(spy).toHaveBeenCalledWith(action);
  });
});
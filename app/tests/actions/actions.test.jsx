let expect = require('expect');
let actions = require('actions');

describe('Actions',  () => {
  it('should generate search text action', () => {
      let action = {
        type: 'SET_SEARCH_TEXT',
        searchText: 'Big Kahuna'
      };
      let res = actions.setSearchText(action.searchText);

      expect(res).toEqual(action);
  });

  it('should generate add todo action action', () => {
    let action = {
      type: 'ADD_TODO',
      text: 'Clean Car'
    };
    let res = actions.addTodo(action.text);

    expect(res).toEqual(action);
  });

  it('should toggle show todo action', () => {
    let action = {
      type: 'TOGGLE_SHOW_COMPLETED'
    };
    let res = actions.toggleShowCompleted();

    expect(res).toEqual(action);
  });
  
  it('should toggle todo action', () => {
    let action = {
      type: 'TOGGLE_TODO',
      id: '123'
    };
    let res = actions.toggleTodo(action.id);

    expect(res).toEqual(action);
  });  
});
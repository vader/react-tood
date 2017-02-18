let expect = require('expect');
import * as actions from 'actions';
import configureStore from 'redux-mock-store';
import thunk from 'redux-thunk';

const middlewares = [thunk];

let createMockStore = configureStore(middlewares);

describe('Actions', () => {
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
      todo: {
        id: '123',
        text: 'Clean Car',
        createdAt: 1232,
        completed: false,
      }
    };
    let res = actions.addTodo(action.todo);

    expect(res).toEqual(action);
  });

  it('should create todo and dispatch ADD_TODO', (done) => {
    const store = createMockStore({});
    const todoText = 'New todo 2';

    store.dispatch(actions.startAddTodo(todoText)).then(() => {
      const actions = store.getActions();
      expect(actions[0]).toInclude({
        type: 'ADD_TODO'
      });
      expect(actions[0].todo).toInclude({
        text: todoText,
      });
      done();
    }).catch(done);
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
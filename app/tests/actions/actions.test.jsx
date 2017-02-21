let expect = require('expect');
import * as actions from 'actions';
import configureStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import {firebaseRef} from 'app/firebase';

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
      type: 'UPDATE_TODO',
      id: '123',
      updates: {
        completed: false,
        completedAt: null
      }
    };
    let res = actions.updateTodo(action.id, action.updates);

    expect(res).toEqual(action);
  });

  describe('Tests with firebase todos', () => {
    let testTodoRef;

    beforeEach((done) => {
      var todosRef = firebaseRef.child('todos');

      todosRef.remove().then(() => {
        testTodoRef = firebaseRef.child('todos').push();

        return testTodoRef.set({
          text: 'unit test todo',
          completed: false,
          createdAt: 12345
        });
      })
        .then(() => done())
        .catch(done);
    });

    afterEach((done) => {
      testTodoRef.remove().then(() => done());
    });

    it('Should update todo and dispatch UPDATE_TODO action', (done) => {
      const store = createMockStore({});
      const action = actions.startToggleTodo(testTodoRef.key, true);
      store.dispatch(action).then(() => {
        const mockActions = store.getActions();
        expect(mockActions[0]).toInclude({
          type: 'UPDATE_TODO',
          id: testTodoRef.key,
        });
        expect(mockActions[0].updates.completed).toBe(true);

        expect(mockActions[0].updates.completedAt).toExist();
        done();

      }, done());
    });

    it('should call ADD_TODOS action with initial todos from firebase', (done) => {
      const store = createMockStore({});
      let action = actions.startAddTodos();
      store.dispatch(action).then(() => {
        let mockActions = store.getActions();

        expect(mockActions[0]).toInclude({
          type: 'ADD_TODOS'
        });

        expect(mockActions[0].todos.length).toBe(1);
        expect(mockActions[0].todos[0]).toInclude({
          text: 'unit test todo',
          completed: false,
          createdAt: 12345
        });

        expect(mockActions[0].todos[0].id).toExist();

        done();
      }, done)
    });
  });

  describe('auth actions', () => {
    it('should generate logout action', () => {
      let action = {
        type: 'LOGOUT'
      };

      let res = actions.logout();
      expect(res).toEqual(action);
    });
  });

  describe('auth actions', () => {
    it('should generate login action', () => {
      let action = {
        type: 'LOGIN',
        uuid: '123'
      };

      let res = actions.login(action.uuid);
      expect(res).toEqual(action);
    });
  });
});
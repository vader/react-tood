let expect = require('expect');
let reducers = require('reducers');
let df = require('deep-freeze-strict');
let moment = require('moment');


describe('Reducers', () => {
  describe('setSearchTextReducer', () => {
    it('should set searchText', () => {
      var action = {
        type: 'SET_SEARCH_TEXT',
        searchText: 'cat',
      };
      let res = reducers.searchTextReducer(df(''), df(action));

      expect(res).toEqual(action.searchText);
    });
  });

  describe('showCompletedReducer', () => {
    it('should flip the status of show completed', () => {
      var action = {
        type: 'TOGGLE_SHOW_COMPLETED',
      };
      let res = reducers.showCompletedReducer(df(false), df(action));

      expect(res).toEqual(true);
    });
  });

  describe('todosReducer', () => {
    it('should add a new todo', () => {
      let action = {
        type: 'ADD_TODO',
        todo: {
          id: '123',
          text: 'todo',
          createdAt: 999,
          completed: false
        }
      };
      let res = reducers.todosReducer(df([]), df(action));

      expect(res.length).toEqual(1);
      expect(res[0]).toEqual(action.todo);
    })
  });

  it('Should update todos', () => {
    let action = {
      type: 'UPDATE_TODO',
      id: '123',
      updates: {
        completed: false,
        completedAt: null,
      }
    };
    let todos = [{
      id: '123',
      text: 'Walk cats',
      completed: true,
      createdAt: moment().unix(),
      completedAt: undefined,
    }];

    let res = reducers.todosReducer(df(todos), df(action));
    expect(res.length).toEqual(1);
    expect(res[0].completed).toEqual(false);
    expect(res[0].completedAt).toNotExist();
    expect(res[0].text).toEqual(todos[0].text);

  });

  it('should add all todos', () => {
    let todos = [{
      id: '123',
      text: 'Walk cats',
      completed: false,
      createdAt: 3000,
      completedAt: undefined,
    }];
    let action = {
      type: 'ADD_TODOS',
      todos,
    };
    //
    let res = reducers.todosReducer(df([]), df(action));
    expect(res.length).toEqual(1);
    expect(res[0].id).toEqual('123');
    expect(res[0]).toEqual(todos[0]);

  });

  it('should remove all todos', () => {
    let todos = [{
      id: '123',
      text: 'Walk cats',
      completed: false,
      createdAt: 3000,
      completedAt: undefined,
    }];
    let action = {
      type: 'LOGOUT'
    };
    //
    let res = reducers.todosReducer(df(todos), df(action));
    expect(res.length).toEqual(0);

  });

  describe('authReducer', () => {
    it('Should wipe auth on LOGOUT', () => {
      let auth = {
        uid: '123'
      };

      let action = {
        type: 'LOGOUT'
      };

      let res = reducers.authReducer(df(auth), df(action));
      expect(res).toEqual({});
    });

    it('Should store in on LOGIN', () => {
      let auth = {
        uid: '123'
      };

      let action = {
        type: 'LOGIN',
        uid: '123'
      };

      let res = reducers.authReducer(undefined, df(action));
      expect(res).toEqual(auth);
    });
  });

  it('Should clear todos from store on LOGOUT', () => {
    let auth = {
      uid: '123'
    };

    let action = {
      type: 'LOGOUT'
    };

    let res = reducers.authReducer(undefined, df(action));
    expect(res).toEqual({});
  });
});
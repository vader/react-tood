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

  it('Should toggle completed', () => {
    let action = {
      type : 'TOGGLE_TODO',
      id: '123',
    };
    let todos = [{
      id: '123',
      text: 'Walk cats',
      completed: false,
      createdAt: moment().unix(),
      completedAt: undefined,
    }];

    let res = reducers.todosReducer(df(todos), df(action));
    expect(res.length).toEqual(1);
    expect(res[0].completed).toEqual(true);
    expect(res[0].completedAt).toNotEqual(undefined);

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
      type : 'ADD_TODOS',
      todos,
    };
    //
    let res  = reducers.todosReducer(df([]), df(action));
    expect(res.length).toEqual(1);
    expect(res[0].id).toEqual('123');
    expect(res[0]).toEqual(todos[0]);

  })

});
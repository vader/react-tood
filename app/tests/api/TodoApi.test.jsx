var expect = require('expect');

var TodoApi = require('TodoApi');
const KEY = 'todos';
describe('Tests the TodoApi', () => {
  beforeEach(() => {
    localStorage.removeItem(KEY);
  });
  it('should exist', () => {
    expect(TodoApi).toExist();
  });

  it('should set the todos', () => {
    let todos = [{ id: 1, todo: 'optimist', isChecked: false }, { id: 2, todo: 'lazer', isChecked: true }];
    let saved = TodoApi.setTodos(todos);
    expect(todos).toBe(saved);
  });

  it('should set the todos to null as not an array', () => {
    let todos = 'non array string';
    let saved = TodoApi.setTodos(todos);
    expect(saved).toNotExist();
  });

  it('should match set and get todos', () => {
    let todos = [{ id: 1, todo: 'optimist', isChecked: false }, { id: 2, todo: 'lazer', isChecked: true }];
    let saved = TodoApi.setTodos(todos);
    expect(todos).toBe(saved);

    let cached = TodoApi.getTodos();
    expect(todos).toMatch(cached);

  });

  describe('filtered todos', () => {
    let todos = [{ id: 1, text: 'optimist', completed: false }, { id: 2, text: 'Save Money', completed: true }, { id: 3, text: 'neutral', completed: false }];

    it('should match all', () => {
      let filterTodos = TodoApi.filterTodos(todos, true, '');
      expect(filterTodos.length).toBe(3);
    });

    it('should match non completed only', () => {
      let filterTodos = TodoApi.filterTodos(todos, false, '');
      expect(filterTodos.length).toBe(2);
    });

    it('should sort by completed status', () => {
      let filterTodos = TodoApi.filterTodos(todos, true, '');
      expect(filterTodos[2].completed).toBe(true);
    });

    it('should search by text', () => {
      let filterTodos = TodoApi.filterTodos(todos, true, "optimist");
      expect(filterTodos.length).toBe(1);
    });

    it('should search by substring text', () => {
      let filterTodos = TodoApi.filterTodos(todos, true, "opti");
      expect(filterTodos.length).toBe(1);
    });

    it('should search by substring text', () => {
      let filterTodos = TodoApi.filterTodos(todos, true, "t");
      expect(filterTodos.length).toBe(2);
    });


    it('should search by substring text Sav', () => {
      let filterTodos = TodoApi.filterTodos(todos, true, "Sav");
      expect(filterTodos.length).toBe(1);
    });

    it('should search by substring text sav', () => {
      let filterTodos = TodoApi.filterTodos(todos, true, "sav");
      expect(filterTodos.length).toBe(1);
    });

    it('should search by substring text Sav but completed so should return 0', () => {
      let filterTodos = TodoApi.filterTodos(todos, false, "Sav");
      expect(filterTodos.length).toBe(0);
    });
  })

});
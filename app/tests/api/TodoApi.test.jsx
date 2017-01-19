var expect = require('expect');

var TodoApi = require('TodoApi');

describe('Tests the TodoApi',  () => {
  beforeEach( () => {
    localStorage.removeItem('todos')
  });
  it('should exist', () => {
    expect(TodoApi).toExist();
  });

  it('should set the todos', () => {
    let todos = [{id:1,todo:'optimist', isChecked:false},{id:2,todo:'lazer', isChecked:true}];
    let saved = TodoApi.setTodos(todos);
    expect(todos).toBe(saved);
  });

  it('should set the todos to null as not an array', () => {
    let todos = 'non array string';
    let saved = TodoApi.setTodos(todos);
    expect(saved).toNotExist();
  });

  it('should match set and get todos', () => {
    let todos = [{id:1,todo:'optimist', isChecked:false},{id:2,todo:'lazer', isChecked:true}];
    let saved = TodoApi.setTodos(todos);
    expect(todos).toBe(saved);

    let cached = TodoApi.getTodos();
    expect(todos).toMatch(cached);

  });

});
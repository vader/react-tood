let uuid = require('node-uuid');
let $ = require('jquery');

const TODO_KEY = 'todos';


module.exports = {
  setTodos: function (todos) {
    if ($.isArray(todos)) {
      localStorage.setItem(TODO_KEY, JSON.stringify(todos));
      return todos;
    }
  },

  getTodos: function () {
    let stringTodos = localStorage.getItem(TODO_KEY);
    let todos = []
    try {
      todos = JSON.parse(stringTodos);
    } catch (e) {
      console.log(e);
    }

    return $.isArray(todos) ? todos : [];
  },

  filterTodos: function (todos, showCompleted, searchText) {
    let filteredTodos = todos;
    //Filter completed
    filteredTodos = todos.filter((todo) => {
      return !todo.completed || showCompleted;
    });

    if (searchText.length > 0) {
      //Filter by search
      filteredTodos = filteredTodos.filter((todo) => {
        return todo.text.toLowerCase().includes(searchText.toLowerCase());
      });
    }

    //Sort filters
    filteredTodos.sort((a, b) => {
      if (!a.completed && b.completed) {
        return -1;
      } else if (a.completed && !b.completed) {
        return 1;
      } else {
        return 0;
      }
    });

    return filteredTodos;
  }
};
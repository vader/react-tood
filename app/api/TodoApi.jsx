let uuid = require('node-uuid');
let $ = require('jquery');

const TODO_KEY = 'todos';


module.exports = {

  filterTodos: function (todos, showCompleted, searchText) {
    //Filter completed
    let filteredTodos = todos.filter((todo) => {
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
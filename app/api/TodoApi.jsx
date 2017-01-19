let uuid = require('node-uuid');
let $ = require('jquery');

const TODO_KEY = 'todos';



module.exports = {
  setTodos: function (todos) {
     if($.isArray(todos)){
       localStorage.setItem(TODO_KEY, JSON.stringify(todos));
       return todos;
     }
  },

  getTodos: function () {
    let stringTodos = localStorage.getItem(TODO_KEY);
    let todos = []
    try {
       todos = JSON.parse(stringTodos);
    }catch (e){
      console.log(e);
    }

    return $.isArray(todos) ? todos : [];
  }
};
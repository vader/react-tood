import {firebaseRef} from 'app/firebase/';
import moment from 'moment';

export let setSearchText = (searchText) => {
  return {
    type: 'SET_SEARCH_TEXT',
    searchText
  }
};

export let addTodo = (todo) => {
  return {
    type: 'ADD_TODO',
    todo
  }
};


export let addTodos = (todos) => {
  return {
    type: 'ADD_TODOS',
    todos
  }
};

export let startAddTodo = (text) => {
  return (dispatch, getState) => {
    let todo = {
      text,
      completed: false,
      createdAt: moment().unix(),
      completedAt: null,
    };
    let todoRef = firebaseRef.child('todos').push(todo);
    return todoRef.then(() => {
      dispatch(addTodo({
        ...todo,
        id: todoRef.key,
      }))
    }, () => {

    })
  }
};

export let toggleShowCompleted = () => {
  return {
    type: 'TOGGLE_SHOW_COMPLETED',
  }
};

export let updateTodo = (id, updates) => {
  return {
    type: 'UPDATE_TODO',
    id,
    updates
  }
};

export let startToggleTodo = (id, completed) => {
  console.log('startToggleTodo');
  return (dispatch, getState) => {
    var todoRef = firebaseRef.child(`todos/${id}`);
    var updates = {
      completed,
      completedAt: completed ? moment().unix() : null,
    };

    return todoRef.update(updates).then(() => {
      dispatch(updateTodo(id, updates));
    })
  };
};

export let startAddTodos = () => {
  console.log('Starting to fetch todos from firebase');
  return (dispatch, getState ) => {
    var todos = [];
    var todosRef = firebaseRef.child('todos');
    return todosRef.once('value').then((snapshot) => {
      var todos = snapshot.val() || {};
      var parsedTodos = [];
      Object.keys(todos).forEach((todoId) => {
        parsedTodos.push({
          id: todoId,
          ...todos[todoId]
        })
      });
      dispatch(addTodos(parsedTodos));
    }, (e) => {
      console.log(e);
    });
  };
};
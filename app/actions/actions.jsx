import {firebaseRef, githubProvider} from 'app/firebase/';
import moment from 'moment';
import firebase from 'firebase';


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
    let uid = getState().auth.uid;
    let todoRef = firebaseRef.child(`users/${uid}/todos`).push(todo);
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
  //console.log('startToggleTodo');
  return (dispatch, getState) => {
    let uid = getState().auth.uid;
    var todoRef = firebaseRef.child(`users/${uid}/todos/${id}`);
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
  return (dispatch, getState) => {
    var todos = [];
    let uid = getState().auth.uid;
    let url = `users/${uid}/todos`;
    console.log('Fetching todos from', url);
    var todosRef = firebaseRef.child(url);
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

export let startLogin = () => {
  return (dispatch, getState) => {
    return firebase.auth().signInWithPopup(githubProvider).then((result) => {
      console.log('Auth successful', result);
    }, (error) => {
      console.log('Unable to authenticate', error);
    })
  }
};

export let startLogout = () => {
  console.log('startLogout');
  return (dispatch, getState) => {
    console.log('startLogout dispatch');

    return firebase.auth().signOut().then(() => {
      console.log('Successfully logged out');
    })
  };
};

export let login = (uid) => {
  return {
    type: 'LOGIN',
    uid
  }
};


export let logout = () => {
  return {
    type: 'LOGOUT',
  }
};
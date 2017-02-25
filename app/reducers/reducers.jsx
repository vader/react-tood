let uuid = require('node-uuid');
let moment = require('moment');

export let searchTextReducer = (state = '', action) => {
  switch (action.type) {
    case 'SET_SEARCH_TEXT' :
      return action.searchText;
    default:
      return state;
  }
};

export let showCompletedReducer = (state = false, action) => {
  switch (action.type) {
    case 'TOGGLE_SHOW_COMPLETED':
      return !state;
    default:
      return state;
  }
};

export let todosReducer = (state = [], action) => {
  switch (action.type) {
    case 'ADD_TODO':
      return [
        ...state,
        action.todo
      ];
    case 'ADD_TODOS':
      return [
        ...state,
        ...action.todos
      ];
    //Add case for TOGGLE_TODO match the item of the id of the array. Then set completed to opposite and updateCompletedAt
    case 'UPDATE_TODO':
      return state.map((todo) => {
        if (todo.id === action.id) {
          return {
            ...todo,
            ...action.updates,
          }
        } else {
          return todo;
        }
      });
    case 'LOGOUT':
      return [];
    default:
      return state;
  }
};

export let authReducer = (state = {}, action) => {
  switch (action.type) {
    case 'LOGIN':
      return {
        uid: action.uid
      };
    case 'LOGOUT':
      return {};
    default:
      return state;
  }
};

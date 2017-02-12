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
        {
          id: uuid(),
          text: action.text,
          completed: false,
          createdAt: moment().unix(),
          completedAt: undefined,
        }
      ];
    case 'ADD_TODOS':
      return [
        ...state,
        ...action.todos
      ];
    //Add case for TOGGLE_TODO match the item of the id of the array. Then set completed to opposite and updateCompletedAt
    case 'TOGGLE_TODO':
      return state.map( (todo) => {
        if (todo.id === action.id) {
          let isCompleted = !todo.completed;
          return {
            ...todo,
            completed: isCompleted,
            completedAt: isCompleted ? moment().unix() : undefined,
          }
        } else {
          return todo;
        }
      });
    default:
      return state;
  }
};
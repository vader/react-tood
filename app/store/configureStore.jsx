let redux = require('redux');
import {createStore, applyMiddleware} from 'redux';
import thunk from 'redux-thunk';


let { searchTextReducer, showCompletedReducer, todosReducer } = require('reducers');

export let configure = (initialState = {}) => {
  let reducer = redux.combineReducers({
    searchText: searchTextReducer,
    showCompleted: showCompletedReducer,
    todos: todosReducer,
  });

  const store = createStore(
    reducer, initialState,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
    applyMiddleware(thunk));

  return store;
};
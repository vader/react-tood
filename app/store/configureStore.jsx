import {createStore, applyMiddleware, combineReducers, compose} from 'redux';
import thunk from 'redux-thunk';
import {searchTextReducer, showCompletedReducer, todosReducer, authReducer} from 'reducers';
import { composeWithDevTools } from 'redux-devtools-extension';

export let configure = (initialState = {}) => {
  let reducer = combineReducers({
    searchText: searchTextReducer,
    showCompleted: showCompletedReducer,
    todos: todosReducer,
    auth: authReducer,
  });

  // const store = createStore(
  //   reducer, initialState,
  //   applyMiddleware(thunk),
  //   window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());

  //See https://github.com/zalmoxisus/redux-devtools-extension#usage
  // const store = createStore(
  //   reducer, initialState,
  //   // window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
  //   applyMiddleware(thunk) );


  const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
  const store = createStore(reducer, initialState, composeEnhancers(
    applyMiddleware(thunk)
  ));


  return store;
};
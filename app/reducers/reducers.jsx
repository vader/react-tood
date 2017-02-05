export let searchTextReducer = (state = '' , action) => {
  switch (action.type) {
    case 'SET_SEARCH_TEXT' :
      return action.searchText;
    default:
      return state;
  }
};

export let showCompletedReducer = (state = false, action) => {
  console.log('Action Type ' + action.type);
  console.log('State ' + state);
  switch (action.type){
    case 'TOGGLE_SHOW_COMPLETED':
      return !state;
    default:
      return state;
  }
};
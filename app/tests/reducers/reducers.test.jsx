let expect = require('expect');
let reducers = require('reducers');
let df = require('deep-freeze-strict');

describe('Reducers', () => {
  describe('setSearchTextReducer', () => {
    it('should set searchText', () => {
      var action = {
        type: 'SET_SEARCH_TEXT',
        searchText: 'cat',
      };
      let res = reducers.searchTextReducer(df(''), df(action));

      expect(res).toEqual(action.searchText);
    });
  });

 describe('showCompletedReducer', () => {
    it('should flip the status of show completed', () => {
      var action = {
        type: 'TOGGLE_SHOW_COMPLETED',
      };
      let res = reducers.showCompletedReducer(df(false), df(action));

      expect(res).toEqual(true);
    });
  });

});
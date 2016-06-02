import { createStore, combineReducers } from 'redux';
import '../actions/actions.js';
var _ = require('underscore');

var locals = [{id: 1, name: 'local 1'}, {id: 2, name: 'local 2'}, {id: 3, name: 'local 3'}];

// The User Reducer
const localReducer = function(state = {locals}, action) {
  var newState = state
  switch(action.type){
    default: break;   
  }
  return newState;
}

// Combine Reducers
const reducers = combineReducers({
  localState: localReducer/*,
  layoutState: layoutReducer*/
});

const store = createStore(reducers);

module.exports = store;
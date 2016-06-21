import { createStore, combineReducers } from 'redux';
import { FETCH_LOCALS_REQUEST, FETCH_LOCALS_SUCCESS, FETCH_LOCALS_FAILURE, 
  FETCH_CATEGORIES_REQUEST,FETCH_CATEGORIES_SUCCESS,FETCH_CATEGORIES_FAILURE,
  FETCH_DISTRICTS_REQUEST,FETCH_DISTRICTS_SUCCESS,FETCH_DISTRICTS_FAILURE,
  FILTER_BY_NAME_SET, FILTER_BY_NAME_RESET } from '../actions/Locals.actions.js';

import { FETCH_LOCAL_REQUEST, FETCH_LOCAL_SUCCESS, FETCH_LOCAL_FAILURE, 
  FETCH_QUEUES_REQUEST, FETCH_QUEUES_SUCCESS, FETCH_QUEUES_FAILURE,
  TICKET, LAST_TICKET, LAST_CALL } from '../actions/Local.actions.js';

var _ = require('underscore');

//[{id: 1, name: 'local 1'}, {id: 2, name: 'local 2'}, {id: 3, name: 'local 3'}];

// The User Reducer
const localsReducer = function(state = {locals: [], fetching_locals: true, failed_locals: false, search: ''}, action) {

  var newState = state
  console.log('New Action: ', action.type, 'Action Object: ', JSON.stringify(action));
  switch(action.type){
    case FETCH_LOCALS_REQUEST:
      newState = U.merge(newState, { fetching_locals: true, failed_locals: false }); break;
    case FETCH_LOCALS_FAILURE:
      newState = U.merge(newState, { fetching_locals: false, failed_locals: true }); break;
    case FETCH_LOCALS_SUCCESS:
      newState = U.merge(newState, { fetching_locals: false, failed_locals: false, locals: action.locals }); break;
    case FILTER_BY_NAME_SET:
      newState = U.merge(newState, { search: action.search }); break;
    case FILTER_BY_NAME_RESET:
      newState = U.merge(newState, { search: '' }); break;
    default: break;   
  }

  return newState;
}

const localReducer = function(state = {local: {}, fetching_local: true, failed_local: false, 
  queues: [], fetching_queues: true, failed_queues: false}, action) {

  var newState = state
  console.log('New Action: ', action.type, 'Action Object: ', JSON.stringify(action));
  switch(action.type){
    case FETCH_LOCAL_REQUEST:
      newState = U.merge(newState, { fetching_local: true, failed_local: false }); break;
    case FETCH_LOCAL_FAILURE:
      newState = U.merge(newState, { fetching_local: false, failed_local: true }); break;
    case FETCH_LOCAL_SUCCESS:
      newState = U.merge(newState, { fetching_local: false, failed_local: false, local: action.local }); break;
    case FETCH_QUEUES_REQUEST:
      newState = U.merge(newState, { fetching_queues: true, failed_queues: false }); break;
    case FETCH_QUEUES_FAILURE:
      newState = U.merge(newState, { fetching_queues: false, failed_queues: true }); break;
    case FETCH_QUEUES_SUCCESS:
      newState = U.merge(newState, { fetching_queues: false, failed_queues: false, queues: action.queues }); break;
    case TICKET:
      newState = U.merge(newState, {queues: _.map(newState.queues, function(queue){
        if(queue.id == action.queue_id){ return U.merge(queue, {ticket: action.ticket}); } 
        return queue;
      })}); break;
    case LAST_TICKET:
      newState = U.merge(newState, {queues: _.map(newState.queues, function(queue){
        if(queue.id == action.queue_id){ return U.merge(queue, {last_ticket: action.ticket}); } 
        return queue;
      })});
      break;
    case LAST_CALL:
      newState = U.merge(newState, {queues: _.map(newState.queues, function(queue){
        if(queue.id == action.queue_id){ return U.merge(queue, {last_call: action.call} ); }
        return queue;
      })});
      break;
    default: break;   
  }

  return newState;
}

// Combine Reducers
const reducers = combineReducers({
  localsState: localsReducer,
  localState: localReducer
});

const store = createStore(reducers);

module.exports = store;
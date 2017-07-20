import { createStore, combineReducers } from 'redux';
import { FETCH_REPOS_REQUEST, FETCH_REPOS_SUCCESS, FETCH_REPOS_FAILURE, 
  FILTER_BY_NAME_SET, FILTER_BY_NAME_RESET } from '../actions/Repos.actions.js';

import { FETCH_REPO_REQUEST, FETCH_REPO_SUCCESS, FETCH_REPO_FAILURE } 
from '../actions/Repo.actions.js';

var _ = require('underscore');

//[{id: 1, name: 'repo 1'}, {id: 2, name: 'repo 2'}, {id: 3, name: 'repo 3'}];

// The User Reducer
const reposReducer = function(state = {repos: [], fetching_repos: true, failed_repos: false, search: ''}, action) {
  var newState = state
  console.log('New Action: ', action.type, 'Action Object: ', JSON.stringify(action));
  switch(action.type){
    case FETCH_REPOS_REQUEST:
      newState = U.merge(newState, { fetching_repos: true, failed_repos: false }); break;
    case FETCH_REPOS_FAILURE:
      newState = U.merge(newState, { fetching_repos: false, failed_repos: true }); break;
    case FETCH_REPOS_SUCCESS:
      newState = U.merge(newState, { fetching_repos: false, failed_repos: false, repos: action.repos }); break;
    case FILTER_BY_NAME_SET:
      newState = U.merge(newState, { search: action.search }); break;
    case FILTER_BY_NAME_RESET:
      newState = U.merge(newState, { search: '' }); break;
    default: break;   
  }

  return newState;
}

const repoReducer = function(state = {repo: {}, fetching_repo: true, failed_repo: false, 
  queues: [], fetching_queues: true, failed_queues: false}, action) {
  var newState = state
  switch(action.type){
    case FETCH_REPO_REQUEST:
      newState = U.merge(newState, { fetching_repo: true, failed_repo: false }); break;
    case FETCH_REPO_FAILURE:
      newState = U.merge(newState, { fetching_repo: false, failed_repo: true }); break;
    case FETCH_REPO_SUCCESS:
      newState = U.merge(newState, { fetching_repo: false, failed_repo: false, repo: action.repo }); break;
    default: break;   
  }
  return newState;
}

// Combine Reducers
const reducers = combineReducers({
  reposState: reposReducer,
  repoState: repoReducer
});

const store = createStore(
  reducers,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

module.exports = store;
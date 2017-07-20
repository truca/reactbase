export const FETCH_REPOS_REQUEST = 'FETCH_REPOS_REQUEST'; 
export const FETCH_REPOS_SUCCESS = 'FETCH_REPOS_SUCCESS';
export const FETCH_REPOS_FAILURE = 'FETCH_REPOS_FAILURE';

export const FETCH_CATEGORIES_REQUEST = 'FETCH_CATEGORIES_REQUEST';
export const FETCH_CATEGORIES_SUCCESS = 'FETCH_CATEGORIES_SUCCESS';
export const FETCH_CATEGORIES_FAILURE = 'FETCH_CATEGORIES_FAILURE';

export const FETCH_DISTRICTS_REQUEST = 'FETCH_DISTRICTS_REQUEST';
export const FETCH_DISTRICTS_SUCCESS = 'FETCH_DISTRICTS_SUCCESS';
export const FETCH_DISTRICTS_FAILURE = 'FETCH_DISTRICTS_FAILURE';

export const FILTER_BY_NAME_SET = 'FILTER_BY_NAME_SET';
export const FILTER_BY_NAME_RESET = 'FILTER_BY_NAME_RESET';

//Repos
/*export {
	fetchReposRequest: () => { return { type: FETCH_REPOS_REQUEST } }
}*/
export function fetchReposRequest() {
  return { type: FETCH_REPOS_REQUEST }
}
export function fetchReposSuccess(repos) {
  return { type: FETCH_REPOS_SUCCESS, repos }
}
export function fetchReposFailure(error) {
  return { type: FETCH_REPOS_FAILURE, error: error }
}
export function fetchCategoriesRequest() {
  return { type: FETCH_CATEGORIES_REQUEST }
}
export function fetchCategoriesSuccess(categories) {
  return { type: FETCH_CATEGORIES_SUCCESS, categories }
}
export function fetchCategoriesFailure(error) {
  return { type: FETCH_CATEGORIES_FAILURE, error: error }
}
export function fetchDistrictsRequest() {
  return { type: FETCH_DISTRICTS_REQUEST }
}
export function fetchDistrictsSuccess(districts) {
  return { type: FETCH_DISTRICTS_SUCCESS, districts }
}
export function fetchDistrictsFailure(error) {
  return { type: FETCH_DISTRICTS_FAILURE, error: error }
}
export function filterByNameSet(search) {
  return { type: FILTER_BY_NAME_SET, search: search }
}
export function filterByNameReset() {
  return { type: FILTER_BY_NAME_RESET }
}
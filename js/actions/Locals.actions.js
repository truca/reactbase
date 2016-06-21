export const FETCH_LOCALS_REQUEST = 'FETCH_LOCALS_REQUEST'; 
export const FETCH_LOCALS_SUCCESS = 'FETCH_LOCALS_SUCCESS';
export const FETCH_LOCALS_FAILURE = 'FETCH_LOCALS_FAILURE';

export const FETCH_CATEGORIES_REQUEST = 'FETCH_CATEGORIES_REQUEST';
export const FETCH_CATEGORIES_SUCCESS = 'FETCH_CATEGORIES_SUCCESS';
export const FETCH_CATEGORIES_FAILURE = 'FETCH_CATEGORIES_FAILURE';

export const FETCH_DISTRICTS_REQUEST = 'FETCH_DISTRICTS_REQUEST';
export const FETCH_DISTRICTS_SUCCESS = 'FETCH_DISTRICTS_SUCCESS';
export const FETCH_DISTRICTS_FAILURE = 'FETCH_DISTRICTS_FAILURE';

export const FILTER_BY_NAME_SET = 'FILTER_BY_NAME_SET';
export const FILTER_BY_NAME_RESET = 'FILTER_BY_NAME_RESET';

//Locals
/*export {
	fetchLocalsRequest: () => { return { type: FETCH_LOCALS_REQUEST } }
}*/
export function fetchLocalsRequest() {
  return { type: FETCH_LOCALS_REQUEST }
}
export function fetchLocalsSuccess(locals) {
  return { type: FETCH_LOCALS_SUCCESS, locals }
}
export function fetchLocalsFailure(error) {
  return { type: FETCH_LOCALS_FAILURE, error: error }
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
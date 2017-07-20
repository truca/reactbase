
export const FETCH_REPO_REQUEST = 'FETCH_REPO_REQUEST'; 
export const FETCH_REPO_SUCCESS = 'FETCH_REPO_SUCCESS';
export const FETCH_REPO_FAILURE = 'FETCH_REPO_FAILURE';

export const FETCH_QUEUES_REQUEST = 'FETCH_QUEUES_REQUEST'; 
export const FETCH_QUEUES_SUCCESS = 'FETCH_QUEUES_SUCCESS';
export const FETCH_QUEUES_FAILURE = 'FETCH_QUEUES_FAILURE';

export const TICKET = 'TICKET';
export const LAST_TICKET = 'LAST_TICKET';
export const LAST_CALL = 'LAST_CALL';

//Repo
export function fetchRepoRequest() {
  return { type: FETCH_REPO_REQUEST }
}
export function fetchRepoSuccess(repo) {
  return { type: FETCH_REPO_SUCCESS, repo }
}
export function fetchRepoFailure(error) {
  return { type: FETCH_REPO_FAILURE, error: error }
}
export function fetchQueuesRequest() {
  return { type: FETCH_QUEUES_REQUEST }
}
export function fetchQueuesSuccess(queues) {
  return { type: FETCH_QUEUES_SUCCESS, queues: queues }
}
export function fetchQueuesFailure(error) {
  return { type: FETCH_QUEUES_FAILURE, error: error }
}

export function ticket(ticket, queue_id) {
  return { type: TICKET, ticket, queue_id}
}
export function lastTicket(ticket, queue_id) {
  return { type: LAST_TICKET, ticket, queue_id}
}
export function lastCall(call, queue_id) {
  return { type: LAST_CALL, call, queue_id }
}

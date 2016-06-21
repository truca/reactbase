
export const FETCH_LOCAL_REQUEST = 'FETCH_LOCAL_REQUEST'; 
export const FETCH_LOCAL_SUCCESS = 'FETCH_LOCAL_SUCCESS';
export const FETCH_LOCAL_FAILURE = 'FETCH_LOCAL_FAILURE';

export const FETCH_QUEUES_REQUEST = 'FETCH_QUEUES_REQUEST'; 
export const FETCH_QUEUES_SUCCESS = 'FETCH_QUEUES_SUCCESS';
export const FETCH_QUEUES_FAILURE = 'FETCH_QUEUES_FAILURE';

export const TICKET = 'TICKET';
export const LAST_TICKET = 'LAST_TICKET';
export const LAST_CALL = 'LAST_CALL';

//Local
export function fetchLocalRequest() {
  return { type: FETCH_LOCAL_REQUEST }
}
export function fetchLocalSuccess(local) {
  return { type: FETCH_LOCAL_SUCCESS, local: local }
}
export function fetchLocalFailure(error) {
  return { type: FETCH_LOCAL_FAILURE, error: error }
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

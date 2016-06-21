export const FETCH_TICKETS_REQUEST = 'FETCH_TICKETS_REQUEST'; 
export const FETCH_TICKETS_SUCCESS = 'FETCH_TICKETS_SUCCESS';
export const FETCH_TICKETS_FAILURE = 'FETCH_TICKETS_FAILURE';


//Tickets
export function fetchTicketRequest() {
  return { type: FETCH_TICKETS_REQUEST }
}
export function fetchTicketSuccess(local) {
  return { type: FETCH_TICKETS_SUCCESS, local: local }
}
export function fetchTicketFailure(error) {
  return { type: FETCH_TICKETS_FAILURE, error: error }
}



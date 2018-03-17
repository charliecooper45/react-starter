import { RIDES_FETCH_SUCCESS, RIDES_LOADING, RIDES_FETCH_ERROR, SET_RIDE, RIDE_ERROR } from '../constants/rides';

export function ride(state = { title: '', distance: '' }, action) {
  switch (action.type) {
    case SET_RIDE:
      return action.ride;
    default:
      return state;
  }
}

export function rideError(state = { title: '', distance: '' }, action) {
  switch (action.type) {
    case RIDE_ERROR:
      return action.error;
    default:
      return state;
  }
}

export function ridesLoading(state = false, action) {
  switch (action.type) {
    case RIDES_LOADING:
      return action.loading;
    default:
      return state;
  }
}

export function rides(state = [], action) {
  switch (action.type) {
    case RIDES_FETCH_SUCCESS:
      return action.rides;
    default:
      return state;
  }
}

export function ridesFetchError(state = '', action) {
  switch (action.type) {
    case RIDES_FETCH_ERROR:
      return action.error;
    default:
      return state;
  }
}
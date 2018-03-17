import { RIDES_FETCH_SUCCESS, RIDES_LOADING, RIDES_FETCH_ERROR, SET_RIDE, RIDE_ERROR } from '../constants/rides';
import axios from 'axios';

const URL = 'http://localhost:3000';

export function ride(ride) {
  return {
    type: SET_RIDE,
    ride
  }
}

export function rideError(error) {
  return {
    type: RIDE_ERROR,
    error
  }
}

export function ridesAdd(newRide) {
  return (dispatch) => {
    axios.post(`${URL}/rides`, newRide)
      .then(() => {
        dispatch(ride({ title: '', distance: '' }));
        dispatch(ridesFetchData())
      })
      .catch((err) => {
        dispatch(ridesFetchError('an error occurred'));
      });
  }
}

export function ridesDelete(id) {
  return (dispatch) => {
    axios.delete(`${URL}/rides/${id}`)
      .then(() => {
        dispatch(ridesFetchData())
      })
      .catch((err) => {
        dispatch(ridesFetchError('an error occurred'));
      });
  }
}

export function ridesFetchData() {
  return (dispatch) => {
    dispatch(ridesLoading(true));
    axios.get(`${URL}/rides`)
      .then((res) => {
        dispatch(rides(res.data))
      })
      .catch((err) => {
        // TODO: better errors
        dispatch(ridesFetchError('an error occurred'));
      })
      .finally(() => {
        dispatch(ridesLoading(false));
      });
  };
}

export function ridesLoading(loading) {
  return {
    type: RIDES_LOADING,
    loading
  };
}

function rides(rides) {
  return {
    type: RIDES_FETCH_SUCCESS,
    rides
  }
}

function ridesFetchError(error) {
  return {
    type: RIDES_FETCH_ERROR,
    error
  }
}
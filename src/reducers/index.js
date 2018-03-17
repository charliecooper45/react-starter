import { combineReducers } from 'redux';
import { rides, ridesLoading, ride, rideError, ridesFetchError } from './rides';

export default combineReducers({ rides, ridesLoading, ride, rideError, ridesFetchError });
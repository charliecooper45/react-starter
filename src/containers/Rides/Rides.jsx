import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { ridesFetchData, ridesDelete, ridesAdd, ride, rideError } from '../../actions/rides';
import RidesList from '../../components/Rides/RidesList';
import AddRideForm from '../../components/Rides/AddRideForm';

function displayMessage(message) {
  return (
    <div className="row">
      <h2>{message}</h2>
    </div>
  );
}

class Rides extends Component {
  constructor(props) {
    super(props);

    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleClick = this.handleClick.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  componentDidMount() {
    this.props.fetchRides();
  }

  handleChange = propertyName => (event) => {
    event.preventDefault();

    const updatedRide = {
      ...this.props.ride,
      [propertyName]: event.target.value
    };
    this.props.setRide(updatedRide);
  }

  validateForm() {
    let title = '';
    let distance = '';

    if (this.props.ride.title.trim() === '') {
      title = 'Title cannot be empty';
    }
    if (this.props.ride.distance.trim() === '') {
      distance = 'Distance cannot be empty';
    } else if (Number.isNaN(Number(this.props.ride.distance))) {
      distance = 'Distance must be a number';
    }

    this.props.setError({ title, distance });
    if (title !== '' || distance !== '') {
      return false;
    }
    return true;
  }

  handleSubmit(event) {
    event.preventDefault();

    if (this.validateForm()) {
      this.props.addRide(this.props.ride);
    }
  }

  handleClick(id) {
    this.props.deleteRide(id);
  }

  render() {
    if (this.props.fetchError) {
      return displayMessage('Sorry an error has occurred!!');
    }
    if (this.props.loading) {
      return displayMessage('Loading...');
    }

    return (
      <div className="row">
        <RidesList
          clickHandler={this.handleClick}
        />
        <br />
        <AddRideForm changeHandler={this.handleChange} submitHandler={this.handleSubmit} />
      </div>
    );
  }
}

Rides.propTypes = {
  loading: PropTypes.bool.isRequired,
  ride: PropTypes.shape({
    title: PropTypes.string,
    distance: PropTypes.string
  }).isRequired,
  fetchError: PropTypes.string.isRequired,
  setRide: PropTypes.func.isRequired,
  setError: PropTypes.func.isRequired,
  fetchRides: PropTypes.func.isRequired,
  deleteRide: PropTypes.func.isRequired,
  addRide: PropTypes.func.isRequired
};

const mapStateToProps = state => ({
  loading: state.ridesLoading,
  rideError: state.rideError,
  fetchError: state.ridesFetchError,
  rides: state.rides,
  ride: state.ride
});

const mapDispatchToProps = dispatch => ({
  setRide: newRide => dispatch(ride(newRide)),
  setError: err => dispatch(rideError(err)),
  fetchRides: () => dispatch(ridesFetchData()),
  deleteRide: id => dispatch(ridesDelete(id)),
  addRide: newRide => dispatch(ridesAdd(newRide))
});

export default connect(mapStateToProps, mapDispatchToProps)(Rides);

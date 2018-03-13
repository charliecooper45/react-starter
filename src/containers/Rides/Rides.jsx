import React, { Component } from 'react';
import axios from 'axios';
import AddRideForm from '../../components/Rides/AddRideForm';
import RidesList from '../../components/Rides/RidesList';

class Rides extends Component {
  constructor(props) {
    super(props);

    this.state = {
      rides: [],
      ride: {
        title: '',
        distance: ''
      },
      formErrors: {
        title: '',
        distance: ''
      },
      error: null
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleClick = this.handleClick.bind(this);
  }

  componentDidMount() {
    this.fetchRides();
  }

  fetchRides() {
    axios.get('http://localhost:3000/rides')
      .then((res) => {
        this.setState({ rides: res.data });
      })
      .catch((error) => {
        this.setState({ error });
      });
  }

  handleChange = propertyName => (event) => {
    event.preventDefault();

    const { ride } = this.state;
    const updatedRide = {
      ...ride,
      [propertyName]: event.target.value
    };
    this.setState({ ride: updatedRide });
  }

  validateForm() {
    let title = '';
    let distance = '';

    const { ride } = this.state;
    if (ride.title.trim() === '') {
      title = 'Title cannot be empty';
    }
    if (ride.distance.trim() === '') {
      distance = 'Distance cannot be empty';
    } else if (Number.isNaN(Number(ride.distance))) {
      distance = 'Distance must be a number';
    }

    this.setState({
      formErrors: { title, distance }
    });
    if (title !== '' || distance !== '') {
      return false;
    }
    return true;
  }

  handleSubmit(event) {
    event.preventDefault();

    if (this.validateForm()) {
      axios.post('http://localhost:3000/rides', this.state.ride)
        .then(() => {
          this.setState({
            ride: {
              title: '',
              distance: ''
            }
          });
          this.fetchRides();
        })
        .catch((error) => {
          this.setState({ error });
        });
    }
  }

  handleClick(id) {
    axios.delete(`http://localhost:3000/rides/${id}`)
      .then(() => {
        this.fetchRides();
      });
  }

  render() {
    if (this.state.error) {
      return (
        <div className="row">
          <h2>Sorry an error has occurred!!</h2>
        </div>
      );
    }

    return (
      <div className="row">
        <RidesList
          rides={this.state.rides}
          clickHandler={this.handleClick}
        />
        <br />
        <AddRideForm
          ride={this.state.ride}
          formErrors={this.state.formErrors}
          changeHandler={this.handleChange}
          submitHandler={this.handleSubmit}
        />
      </div>
    );
  }
}

export default Rides;

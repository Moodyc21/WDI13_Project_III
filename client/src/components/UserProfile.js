import React, { Component } from 'react';

import { Link } from 'react-router-dom';

class UserProfile extends Component {
    render() {
        return (
            <div>
                <h1>Golfer's Profile</h1>

                <div>Full Name: {this.props.firstName} {this.props.lastName}</div>
                <div>Email: {this.props.email}</div>
                <div>Handicap: {this.props.handicap}</div>
                <div><a href={this.props.Scorecard}>Scorecard</a></div>

                <Link to="/">Home</Link>
            </div>
        );
    }
}

export default UserProfile;
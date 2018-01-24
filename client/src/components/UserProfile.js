import React, { Component } from 'react';

import { Link } from 'react-router-dom';

class UserProfile extends Component {
    render() {
        console.log(this.props.user)
        return (
            <div>
                <h1>Golfer's Profile</h1>
                
                <div>
                <img src={this.props.photo} alt="profile photo"/>
                </div>

                <div>Full Name: {this.props.firstName} {this.props.lastName} </div>
                <div>Email: {this.props.email} </div>
                <div>Handicap: {this.props.handicap} </div>


                <Link to="/">Home</Link>
                <br/>
                <Link to='/holes'>Play</Link>
                <br/>
                <Link to='/scoreCard'>Scorecard</Link>
                <br/>
                <Link to='/editUser'>Edit User</Link>
            </div>
        );
    }
}

export default UserProfile
import React, { Component } from 'react';

import { Link } from 'react-router-dom';

class UserProfile extends Component {
    render() {
        console.log(this.props.user)
        return (
            <div>
                <h1>Golfer's Profile</h1>
                
                <div>
                
                </div>

                <div>Full Name: </div>
                <div>Email: </div>
                <div>Handicap: </div>


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
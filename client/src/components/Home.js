import React, {Component} from 'react'
import {Link} from 'react-router-dom'

class Home extends Component {
    render () {
        return (
            <div>
                <img src="" alt=""/>
                <h1>Scratch</h1>
                <div>
                    <Link to='/newUser'>New User</Link>
                </div>
                <div>
                    <Link to='/userProfile'>User Profile</Link>
                </div>
            
                
            </div>
        )
    }
}

export default Home
import React, { Component } from 'react'
import { Link } from 'react-router-dom'

class NewUser extends Component {
    render () {
        return (
            <div>
                <h1>Create a New User</h1>
                <div>
                    <form>
                        <label>
                            First Name
                            <input type="text"/>
                        </label>
                        <label>
                            Last Name
                            <input type="text"/>
                        </label>
                        <label>
                            Email
                            <input type="text"/>
                        </label>
                        <label>
                            Handicap
                            <input type="text"/>
                        </label>
                        <label>
                            PhotoURL
                            <input type="text"/>
                        </label>
                        <input type='submit' value='Submit'/>
                    </form>
                </div>
            </div>
            
        )
    }
}

export default NewUser
import React, { Component } from 'react'
import axios from 'axios'
import UserList from './UserList'

class UserPage extends Component {
    state = {
        users: []
    }

    async componentWillMount () {
        const response = await axios.get (`/api/users`)
        this.setState({users: response.data})
    }

    createUser = async () => {
        const response = await axios.post(`/api/users`)
        const newUser = response.data

        const newUsers = [...this.state.users]
        newUsers.unshift(newUser)
        this.setState({users: newUsers})
    }

    deleteUser = async (user) => {
        try {
            await axios.delete(`/api/users/${user._id}`)

            const indexToDelete = this.state.users.indexOf(user)
            const newUsers = [...this.state.users]
            newUsers.splice(indexToDelete, 1)
            this.setState({users: newUsers})
        } catch(error) {
            console.log(error)
        }
    }

    handleChange = (user, event) => {
        const updatedUsers = [...this.state.users]
        const userToUpdate = updatedUsers.find((newUser) => {
            return newUser._id === user._id
        })

        userToUpdate[event.target.name] = event.target.value

        this.setState({users: updatedUsers})
    }

    updateUser = async (user) => {
        try {
            await axios.patch(`/api/users/${user._id}`, user)
        } catch (error) {
            console.log(error)
        }
    }

    render () {
        return (
            <div>
                <div>
                    <h1>Golfers</h1>
                    <button onClick={this.createUser}>New Golfer</button>

                </div>
                <UserList users={this.state.users}
                          handleChange={this.handleChange}
                          updateUser={this.updateUser}
                          deleteUser={this.deleteUser}/>

            </div>
        )
    }

}

export default UserPage
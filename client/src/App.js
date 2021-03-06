import React, {Component} from 'react';
import {BrowserRouter as Router, Switch, Route, Link} from 'react-router-dom'
import axios from 'axios'
import Home from './components/Home'
import UserList from './components/UserList'
import NewUser from './components/NewUser'
import ExistingUser from'./components/ExistingUser'
import UserProfile from './components/UserProfile'
import EditUser from './components/EditUser'
import Holes from './components/Holes'
import Hole from './components/Hole'
import ScorecardList from './components/ScorecardList'
import styled from 'styled-components'
import Table from './components/Table'
import ReactDataGrid from 'react-data-grid'

class App extends Component {
  constructor() {
    super()

    this.state = {
      currentUser: [],
      users: [],
      myScore: [], 
      myRound: [],
      redirect: false
    }
  }

  getUsers = () => {
    axios
      .get('/api/users')
      .then((response) => {
        console.log(response.data)
        const users = response.data
        this.setState({users})
        console.log('Whatup', this.state.users.myScore)
      })
  }
  getScorecard = () => {
    
    axios.get(`/api/users/userProfile/${this.state.currentUser._id}/scorecard`).then((response) => {
      console.log(response.data)
      const myScore = response.data
      this.setState({myScore})
      console.log('myScore', myScore)

    })
  }

  showScorecard = (user) => {
    axios.get(`/api/users/userProfile/${this.state.currentUser._id}/scorecard/${this.state.currentUser.myScore._id}`).then((response) => {
      const users = response.data
      this.setState({myScore: users})
    })
  }

  showUser = (user) => {
    console.log(user)
    const userId = user._id
    console.log(userId)
    axios.get(`/api/users/userProfile/${userId}`).then((response) => {
      console.log('state', this.state.users)
      console.log("Response from Express:", response.data)
      const user = response.data //TODO: Refactor express api to return a user, NOT an object with a user in it
      console.log('user', user)
      this.setState({ currentUser: user })
      console.log('This is current User show', this.state.currentUser)
      console.log('This is users', this.state.users)

    })
  }


 

  createNewUser = async (createUserInfo) => {
    const response = await axios.post(`/api/users`, createUserInfo)
    const newUser = response.data

    const newUsers = [...this.state.users]

    newUsers.push(newUser)
    this.setState({users: newUsers, currentUser: newUser})
  }
  deleteUser = async (user) => {
    try {
      console.log(user)
      const userId = user._id
      console.log('delete userid:', userId)
        await axios.delete(`/api/users/userList/${user}`)
console.log(user._id)
        const indexToDelete = this.state.users.indexOf(user)
        console.log(indexToDelete)
        const newUsers = [...this.state.users]
        console.log(newUsers)
        newUsers.splice(indexToDelete, 1)
        this.setState({users: newUsers})
        console.log(this.state)
    } catch(error) {
        console.log(error)
    }
}

handleChange = (user, event) => {
  console.log("Handle Change params:", event)
  const updatedUsers = [...this.state.users] 

  console.log("All Users:", updatedUsers)

  const userToUpdate = updatedUsers.find((newUser) => {
    return newUser._id === user._id
  })

  console.log("User To Update:", userToUpdate)

  userToUpdate[event.target.name] = event.target.value

  this.setState({ users: updatedUsers })
  console.log('State in edit:', this.state.user)

}

  updateUser = async (user) => {
    try {

      await axios.patch(`/api/users/${user._id}`, user)

    } catch (error) {
      console.log(error)
    }
  }

  strokesCounter = () => {

  }

  componentWillMount() {
    this.getUsers()
    this.getScorecard()
    
  }

  render() {
    console.log('this is current', this.state.user)
    const HomeComponent = () => (<Home/>)
    const NewUserComponent = () => (<NewUser createNewUser={this.createNewUser}/>)
    const UserListComponent = () => (<UserList currentUser={this.state.currentUser} users={this.state.users} showUser={this.showUser} deleteUser={this.deleteUser} {...this.props}/>)
    const ExistingUserComponent = () => (<ExistingUser user={this.state.users} {...this.props}/>)
    const UserProfileComponent = () => (<UserProfile
      showScorecard={this.showScorecard}
      user={this.state.currentUser}
      {...this.props}/>)
    const EditUserComponent = () => (<EditUser
      
      users={this.state.users}
      user={this.state.currentUser}
      updateUser={this.updateUser}
      handleChange={this.handleChange} 
      photo={this.state.currentUser.photoURL} 
      firstName={this.state.currentUser.firstName}
      lastName={this.state.currentUser.lastName}
      handicap={this.state.currentUser.handicap}
      email={this.state.currentUser.email} 
      {...this.props}/>)
    const HolesComponent = () => (<Holes/>)
    const HoleComponent = () => (<Hole showScorecard={this.state.showScorecard} myScore={this.state.myScore} {...this.props}  />)
    const ScorecardListComponent = () => (<ScorecardList users={this.state.users} myScore={this.state.myScore}/>)

    return (
      <Router>
        <div>

          <Switch>
            <Route exact path='/' render={HomeComponent}/> {/*<Route exact path='/users' render={UsersComponent}/>*/}
            <Route exact path='/newUser' render={NewUserComponent}/>
            <Route exact path='/userList' render={UserListComponent}/>
            <Route exact path='/existingUser' render={ExistingUserComponent}/>
            <Route exact path='/userProfile/:userId' render={UserProfileComponent}/>
            <Route exact path='/editUser/:userId' render={EditUserComponent}/>
            <Route exact path='/hole' render={HoleComponent}/> 
            <Route exact path='userProfile/:userId/scorecard/:scorecardId' render={ScorecardListComponent}/>
          </Switch>

        </div>
      </Router>
    );
  }
}

export default App

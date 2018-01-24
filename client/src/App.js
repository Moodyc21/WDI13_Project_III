import React, {Component} from 'react';
import {BrowserRouter as Router, Switch, Route, Link} from 'react-router-dom'
import axios from 'axios'
import Home from './components/Home'
import NewUser from './components/NewUser'
import UserPage from './components/UserPage'
import UserProfile from './components/UserProfile'
import EditUser from './components/EditUser'
import Holes from './components/Holes'
import styled from 'styled-components'

class App extends Component {
  constructor() {
    super()

  this.state = {
    currentUser: {
      firstName: 'Bastien',
      lastName: 'Salabanzi',
      email: 'SalaB21@gmail.com',
      handicap: 5,
      photoURL: 'https://i.imgur.com/WSOJyR1s.jpg'
    }
  }
}

 getUsers = () => {
       axios.get('/api/users').then((response) => {
      console.log(response.data)
      const users = response.data
      this.setState({users})
     })
    }

  // createUser = async () => {
  //   const response = await axios.post(`/api/users`)
  //   const newUser = response.data
  //   const newUsers = [...this.state.users]
  //   newUsers.unshift(newUser)
  //   this.setState({users: newUsers})
  // }

  createNewUser = (createUserInfo) => {
    const newUser = {...this.state.currentUser}
    newUser.firstName = createUserInfo.firstName
    newUser.lastName = createUserInfo.lastName
    newUser.email = createUserInfo.email
    newUser.handicap = createUserInfo.handicap
    newUser.photoURL = createUserInfo.photoURL
    this.setState({currentUser: newUser})
  }

  componentWillMount () {
    this.getUsers()
    
  }

  


  render() {
    console.log(this.state.users)
    const HomeComponent = () => (<Home/>)
    const NewUserComponent = () => (<NewUser user={this.state.currentUser} createNewUser={this.createNewUser}/>)
    const UserProfileComponent = () => (<UserProfile firstName={this.state.currentUser.firstName} lastName={this.state.currentUser.lastName} handicap={this.state.currentUser.handicap} email={this.state.currentUser.email} photo={this.state.currentUser.photoURL} {...this.props}/>)
    const EditUserComponent = () => (<EditUser/>)
    const HolesComponent = () => (<Holes/>)

    
    return (
      <Router>
        <div>
          
          <Switch>
            <Route exact path='/' render={HomeComponent}/>
            {/*<Route exact path='/users' render={UsersComponent}/>*/}
            <Route exact path='/newUser' render={NewUserComponent}/>
            <Route exact path='/userProfile' render={UserProfileComponent}/>
            <Route exact path='/editUser' render={EditUserComponent}/>
            <Route exact path='/holes' render={HolesComponent}/>
            {/*<Route exact path='/scorecard' render={ScorecardComponent}/> */}
          </Switch>

        </div>
      </Router>
    );
  }
}

export default App

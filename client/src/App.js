import React, {Component} from 'react';
import {BrowserRouter as Router, Switch, Route, Link} from 'react-router-dom'
import axios from 'axios'
import Home from './components/Home'
import NewUser from './components/NewUser'
import UserPage from './components/UserPage'
import UserProfile from './components/UserProfile'
import EditUser from './components/EditUser'
import Holes from './components/Holes'

class App extends Component {
  constructor() {
    super()

  this.state = {
    users: []
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

  componentWillMount () {
    this.getUsers()
    
  }

  


  render() {
    console.log(this.state.users)
    const HomeComponent = () => (<Home/>)
    const NewUserComponent = () => (<NewUser/>)
    const UserProfileComponent = () => (<UserProfile user={this.state.users[0]} {...this.props}/>)
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

import React, {Component} from 'react';
import {BrowserRouter as Router, Switch, Route, Link} from 'react-router-dom'
import Home from './components/Home'
import NewUser from './components/NewUser'
import UserPage from './components/UserPage'
import UserProfile from './components/UserProfile'
import EditUser from './components/EditUser'
import Holes from './components/Holes'

class App extends Component {


  render() {
    const HomeComponent = () => (<Home/>)
    const NewUserComponent = () => (<NewUser/>)
    const UserProfileComponent = () => (<UserProfile/>)
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

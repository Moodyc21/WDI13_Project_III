import React from 'react' 

const User = (props) => {
    return (
        <div>

<img src={props.user.photoURL} alt="Golfer Profile Pic"/> 
<br/>

 <input type="text"
        name="firstName"
        value={props.user.firstName}
        onChange={(event) => props.handleChange(props.user, event)}
        onBlur={() => {props.updateUser(props.user)}}/>
<br/>

<input type="text"
        name="lastName"
        value={props.user.lastName}
        onChange={(event) => props.handleChange(props.user, event)}
        onBlur={() => {props.updateUser(props.user)}}/>
<br/>

<input type="text"
        name="email"
        value={props.user.email}
        onChange={(event) => props.handleChange(props.user, event)}
        onBlur={() => {props.updateUser(props.user)}}/>
<br/>

<input type="Number"
        name="handicap"
        value={props.user.handicap}
        onChange={(event) => props.handleChange(props.user, event)}
        onBlur={() => {props.updateUser(props.user)}}/>

 
        
      <br/> 



<button onClick={() => {props.deleteUser(props.user)}}>
        Delete Golfer
      </button>

        </div>
    )
}

export default User
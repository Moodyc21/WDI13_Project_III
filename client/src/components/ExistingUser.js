import React, {Component} from 'react'


    const ExistingUser = (props) => {
console.log("This are my props", props)

        return (
            <div>
    
    <img src={props.user.photoURL} alt="Golfer Profile Pic"/> 
    <br/>
    
     <input type="text"
            name="firstName"
            value={props.user.firstName}/>
            
    <br/>
    
    <input type="text"
            name="lastName"
            value={props.user.lastName}/>
    <br/>
    
    <input type="text"
            name="email"
            value={props.user.email}/>
    <br/>
    
    <input type="Number"
            name="handicap"
            value={props.user.handicap}/>
    
     
            
          <br/> 
    
          <button>
            Play!
          </button>
    
    <button onClick={() => {props.deleteUser(props.users)}}>
            Delete Golfer
          </button>
    
            </div>
        )
    }

export default ExistingUser
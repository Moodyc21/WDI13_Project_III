import React from 'react'
import ExistingUser from './ExistingUser'

const UserList = (props) => {
    console.log('currentUser from userlist', props.currentUser)
    return (
        <div>
            {
                props.users.map((user) => {
                    return(
                        <ExistingUser showUser={props.showUser} currentUser={props.currentUser} deleteUser={props.deleteUser} user={user} {...props} key={user._id} userId={user._id}/>
                    )
                })
            }
        </div>
    )
}

export default UserList
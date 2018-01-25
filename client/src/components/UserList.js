import React from 'react'
import ExistingUser from './ExistingUser'

const UserList = (props) => {

    return (
        <div>
            {
                props.users.map((user) => {
                    return(
                        <ExistingUser deleteUser={props.deleteUser} user={user} {...props} key={user._id}/>
                    )
                })
            }
        </div>
    )
}

export default UserList
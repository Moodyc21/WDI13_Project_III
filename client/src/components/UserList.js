import React from 'react'
import User from './User'

const UserList = (props) => {

    return (
        <div>
            {
                props.users.map((user) => {
                    return(
                        <User user={user} {...props} key={user._id}/>
                    )
                })
            }
        </div>
    )
}

export default UserList
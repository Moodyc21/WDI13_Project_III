import React, { Component } from 'react'
import Holes from './Holes'

const Hole = (props) => {
    console.log('currentUser from Hole', props.myScore)
    return (
        <div>
            {
                props.myScore.map((user) => {
                    return(
                        <Holes showScorecard={props.showUser} myScore={props.myScore} user={user} {...props} key={user._id}/>
                    )
                })
            }
        </div>
    )
}

export default Hole
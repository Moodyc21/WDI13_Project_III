import React, { Component } from 'react'
import Scorecard from './Scorecard'

const ScorecardList = (props) => {
    console.log('currentUser from Hole', props.myScore)
    return (
        <div>
            {
                props.myScore.map((user) => {
                    return(
                        <Scorecard showScorecard={props.showUser} myScore={props.myScore} user={user} {...props} key={user._id}/>
                    )
                })
            }
        </div>
    )
}

export default ScorecardList
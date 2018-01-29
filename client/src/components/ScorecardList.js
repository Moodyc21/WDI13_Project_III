import React, { Component } from 'react'


class ScorecardList extends Component {
    render () {
        return (
            <div>
            
            <div>{this.props.users.myScore}</div>
            </div>
        )
    }
}

export default ScorecardList
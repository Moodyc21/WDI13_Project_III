import React, { Component } from 'react'


class Scorecard extends Component {
    render () {
        return (
            <div>
                <h1>{this.props.myScore}</h1>
            </div>
        )
    }
}

export default Scorecard
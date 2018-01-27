import React, { Component } from 'react'
import styled from 'styled-components'

const CardWrapper = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    border: 2px solid black;
    div {
        border: 2px solid black;
    }
`

class Scorecard extends Component {
    render () {
        return (
        <CardWrapper>
            <div>Name</div>
            <div>1</div>
            <div>2</div>
            <div>3</div>
            <div>4</div>
            <div>5</div>
            <div>6</div>
            <div>7</div>
            <div>8</div>
            <div>9</div>
        </CardWrapper>

        )
    }
}

export default Scorecard
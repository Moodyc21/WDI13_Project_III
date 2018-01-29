import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'

const HolesWrapper = styled.div `
        background-color: #0E3F8A;
        color: white;
`

const ImgWrapper = styled.div` 
        img {
            height: 150px;
            width: 150px;
            border-radius: 100px;
        }
        button {
            border-radius: 100px;
        }
        button:hover {
            border: 2px solid goldenrod;
        }
`
const ButtonWrapper = styled.div`
        padding: 10px;
        button {
            color: white;
            background-color: rgb(200, 0, 0);
            border: 1px solid white;
            border-radius: 5px;
            padding: 3px 20px;
            }
            button:hover {
                background-color: darkred;
            }
`


class Holes extends Component {
    constructor(props) {
        super(props);
        this.state = {clicks: 0}
    }
    handleClick() {
        this.setState((prevState) => ({
             clicks: prevState.clicks + 1
        }));
    }

    render() {

        return (
            <HolesWrapper>
            <h1>Hole #</h1>
            
            <h3>Length:</h3>
            
            <h3>Par:</h3>
            
            <ImgWrapper>
            <button onClick={this.handleClick.bind(this)}> <img src="https://i.imgur.com/WudJ2rR.jpg" alt="Golfball"/></button>
            </ImgWrapper>

            <h3>Strokes: {this.state.clicks}</h3>
            <ButtonWrapper>
            <button>Finished Hole</button>
            </ButtonWrapper>
            </HolesWrapper>
        )
    }
}

export default Holes

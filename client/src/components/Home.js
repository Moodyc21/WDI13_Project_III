import React, {Component} from 'react'
import {Link} from 'react-router-dom'
import styled from 'styled-components'

const HomeWrapper = styled.div `
        h1 {
            margin: 0 0 53.6px;
            font-size: 80px;
            text-align: center;
            color: White;
        }
        background-color: #0E3F8A;
        `
const LinkWrapper = styled.div `
        display: flex;
        justify-content: center;
        a {
            font-size: x-large;
            padding: 5px;
            color: white;
            text-decoration: none;
        }
        a:hover {
            color: #C40808;
        }
        `

const ImgWrapper = styled.div `
            display: flex;
        img {
            max-height: 20em;
            max-width: 20em;
            margin: 0 auto;
            padding: 0 0 20px;
        }
        `

class Home extends Component {

    render() {
        return (
            <HomeWrapper>

                <h1>Scratch</h1>
                <ImgWrapper>
                    <img src="https://i.imgur.com/jWSacX4.png" alt="Scratch Home Picture"/>
                </ImgWrapper>
                <LinkWrapper>
                    <Link to='/newUser'>New User</Link>
                </LinkWrapper>

            </HomeWrapper>
        )
    }
}

export default Home
import React, { Component } from 'react';
import styled from 'styled-components'

import { Link } from 'react-router-dom';

const ProfileWrapper = styled.div`
        background-color: #0E3F8A;
        h1 {
            font-size: 80px;
            margin: 0 auto;
            text-align: center;
            color: white;
        }

`

const ImgWrapper = styled.div`
        img {
            display: flex;
            margin: 0 auto;
            border: 2px solid white;
            border-radius: 3px;
            max-heigth: 200px;
            max-width: 200px;
        }
`

const LinkWrapper = styled.div`
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

const UserInfo = styled.div`
        p {
            color: white;
            text-align: center;
        }
`


class UserProfile extends Component {
    render() {
        console.log(this.props.currentUser)
        return (
            <ProfileWrapper>
                <h1>Profile</h1>
                
                <ImgWrapper>
                <img src={this.props.photo} alt="profile photo"/>
                </ImgWrapper>

                <UserInfo><p>Full Name: {this.props.firstName} {this.props.lastName} </p>
                <p>Email: {this.props.email} </p>
                <p>Handicap: {this.props.handicap}</p></UserInfo>

            <LinkWrapper>
                <Link to="/">Home</Link>
                </LinkWrapper>
                                <br/>
              <LinkWrapper>                  
                <Link to='/holes'>Play</Link>
                </LinkWrapper>
                <br/>
                
                <LinkWrapper>
                <Link to='/scoreCard'>Scorecard</Link>
                </LinkWrapper>
                <br/>
                <LinkWrapper>
                <Link to='/editUser'>Edit User</Link>
                </LinkWrapper>
            </ProfileWrapper>
        );
    }
}

export default UserProfile
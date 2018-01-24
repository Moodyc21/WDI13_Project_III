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
        span {
            color: goldenrod;
            
        }
`
const NavBar = styled.div`
        display: flex;
        justify-content: space-between;
        width: 100vw;
`



class UserProfile extends Component {
    render() {
        console.log(this.props.currentUser)
        return (
            <ProfileWrapper>
        <NavBar>
            <LinkWrapper>
                <Link to="/">Home</Link>
                </LinkWrapper>
                <LinkWrapper>
                <Link to='/editUser'>Edit User</Link>
                </LinkWrapper>
        </NavBar>
                <h1>Profile</h1>
               
                
                <ImgWrapper>
                <img src={this.props.photo} alt="profile photo"/>
                </ImgWrapper>

                <UserInfo><p><span>Full Name:</span> {this.props.firstName} {this.props.lastName} </p>
                <p><span>Email:</span> {this.props.email} </p>
                <p><span>Handicap:</span> {this.props.handicap}</p></UserInfo>
         
              <LinkWrapper>                  
                <Link to='/holes'>Play</Link>
                </LinkWrapper>
                
                
                <LinkWrapper>
                <Link to='/scoreCard'>Scorecard</Link>
                </LinkWrapper>
              
                
            </ProfileWrapper>
        );
    }
}

export default UserProfile
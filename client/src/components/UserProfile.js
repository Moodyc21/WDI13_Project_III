import React, {Component} from 'react';
import styled from 'styled-components'

import {Link} from 'react-router-dom';

const ProfileWrapper = styled.div `
        background-color: #0E3F8A;
        h1 {
            font-size: 80px;
            margin: 0 auto;
            text-align: center;
            color: white;
            
        }
        width: 100%;
        height: 100%;

`

const ImgWrapper = styled.div `
        img {
            display: flex;
            margin: 0 auto;
            border: 2px solid white;
            border-radius: 3px;
            heigth: 200px;
            width: 200px;
        }
`

const LinkWrapper = styled.div `
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

const UserInfo = styled.div `

        p {
            color: white;
            text-align: center;
        }
        span {
            color: goldenrod;
            
        }
`
const NavBar = styled.div `
        display: flex;
        justify-content: space-between;
        width: 100vw;
        border-bottom: 2px solid white;
       
`

const FooterBar = styled.div `
        border-top: 2px solid white;
        display: flex;
        justify-content: space-between;
        width: 100vw;
        
`
const ImgLink = styled.div `
            display: flex;
            justify-content: space-between;
        img {
            height: 125px;
            width: 125px;
            border: 2px solid white;
            border-radius: 5px;
        }
        img:hover {
            border: 2px solid goldenrod;
        }
`

class UserProfile extends Component {

    render() {
        console.log('Props for show', this.props.user)

        let userProfile = <div></div>
        if (this.props.user) {
            userProfile = (
                <ProfileWrapper>
                    <NavBar>
                        <LinkWrapper>
                            <Link to="/">Home</Link>
                        </LinkWrapper>
                        <LinkWrapper>
                            <Link to={`/editUser/${this.props.user._id}`}>Edit User</Link>
                        </LinkWrapper>
                    </NavBar>
                    <h1>Profile</h1>

                    <ImgWrapper>
                        <img src={this.props.user.photoURL} alt="profile photo"/>
                    </ImgWrapper>

                    <UserInfo>
                        <p>
                            <span>Full Name:</span>
                            {this.props.user.firstName}
                            {this.props.user.lastName}
                        </p>
                        <p>
                            <span>Email:</span>
                            {this.props.user.email}
                        </p>
                        <p>
                            <span>Handicap:</span>
                            {this.props.user.handicap}</p>
                    </UserInfo>
                    <ImgLink>
                        <img src="https://imgur.com/dxEZDxP.png" alt=""/>
                        <img src="https://i.imgur.com/gvCFQFib.png" alt=""/>
                    </ImgLink>
                    <FooterBar>
                        <LinkWrapper>
                            <Link to='/hole'>Play</Link>
                        </LinkWrapper>

                        <LinkWrapper>
                            <Link to={`/api/users/userProfile/${this.props.user._id}/scorecard/`}>
                            <button onClick={() => {this.props.showScorecard(this.props.user)}}> Scorecard
                                </button></Link>
                        </LinkWrapper>

                    </FooterBar>

                </ProfileWrapper>
            )
        }
        return (
            <div>
                {userProfile}
            </div>

        );
    }
}

export default UserProfile
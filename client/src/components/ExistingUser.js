import React, {Component} from 'react'
import { Link } from 'react-router-dom' 
import styled from 'styled-components'

const UserWrapper = styled.div`
        display: flex;
        background-color: #0E3F8A;
        border: 2px solid white;
        padding: 10px;
`
const BoxWrapper = styled.div`
        display: flex;
        flex-direction: column;
        margin: 0 auto;
        
`


const ImgWrapper = styled.div`
        img {
            width: 200px;
            height: 200px;
            border: 2px solid white;
            border-radius: 3px;
        }
`
const InfoWrapper = styled.div`
        [type=text] {
            border-radius: 3px;

        }
        [type=Number] {
            border-radius: 3px;
        }
`

const SubmitButton = styled.div`
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
const LinkWrapper = styled.div`
        a {
            color: white;
            text-decoration: none;
            display: flex;
            justify-content: center;
        }
`



    const ExistingUser = (props) => {
        console.log("These are my props", props)
        function refreshPage (){
            window.location.reload();
        }

      
        return (
            <UserWrapper>
                
                
    <ImgWrapper>
    <img src={props.user.photoURL} alt="Golfer Profile Pic"/> 
    </ImgWrapper>
    <br/>
    <BoxWrapper>
    <InfoWrapper>
     <input type="text"
            name="firstName"
            value={props.user.firstName}/>
            </InfoWrapper>
            
    <br/>
    <InfoWrapper>
    <input type="text"
            name="lastName"
            value={props.user.lastName}/>
            </InfoWrapper>
    <br/>
    <InfoWrapper>
    <input type="text"
            name="email"
            value={props.user.email}/>
            </InfoWrapper>
    <br/>
    <InfoWrapper>
    <input type="Number"
            name="handicap"
            value={props.user.handicap}/>
            </InfoWrapper>
    
     
            
          <br/> 
    <SubmitButton>
          <button onClick= {() => {props.deleteUser(props.userId); refreshPage();}}>Delete</button>
          </SubmitButton>
    <SubmitButton>
   <Link to={`/userProfile/${props.user._id}`}>
    <button onClick = {() => {props.showUser(props.user)}}>View Profile</button>
    </Link>
    </SubmitButton>
    </BoxWrapper>
            </UserWrapper>
        )
    }

export default ExistingUser
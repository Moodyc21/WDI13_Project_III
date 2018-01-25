import React, { Component } from 'react'
import styled from 'styled-components'
import { Redirect } from 'react-router-dom'

const FormWrapper = styled.div`
        background-color: #0E3F8A;
        h1 {
            font-size: 80px;
            margin: 0 auto;
            text-align: center;
            color: white;
}
        label {
            font-size: 25px;
            color: white;
        }
        width: 100%;
        height: 100%;

`

const FormColumn = styled.div`
    
`
const LabelStyle = styled.div`
        display: flex;
        justify-content: center;
        padding: 12px;
        [type=text] {
            border-radius: 3px;
        }
        

`
const SubmitButton = styled.div`
        padding: 10px;
        [type=submit] {
            color: white;
            background-color: rgb(200, 0, 0);
            border: 1px solid white;
            border-radius: 5px;
            padding: 3px 20px;
            }
            [type=submit]:hover {
                background-color: darkred;
            }
`

class NewUser extends Component {
    constructor () {
        super()
        this.state = {
            user: {
                firstName: '',
                lastName: '',
                email: '',
                handicap: '',
                photoURL: ''
            },
            redirect: false
        }
    }

handleChange = (e) => {
    const updatedUser = {...this.state.user}
    const inputField = e.target.name 
    const inputValue = e.target.value
    updatedUser[inputField] = inputValue

    this.setState({user: updatedUser})
}

handleSubmit = (e) => {
    e.preventDefault()
    this.props.createNewUser(this.state.user)
    this.setState({redirect: true})
}

    render () {
        if (this.state.redirect) {
            return (<Redirect to={{pathname: '/userProfile', 
        state: { fromDashboard: true }
    }}/>)
        }
        return (
            <FormWrapper>
                <h1>Create <br/> User</h1>
                <FormColumn>
                    <form onSubmit={this.handleSubmit}>
                        <LabelStyle>
                        <label htmlFor='firstName'>
                            {/* First Name */}
                            
                            <input type="text" name='firstName' onChange={this.handleChange} value={this.state.user.firstName} placeholder='First Name'/>
                        </label>
                        </LabelStyle>
                        <LabelStyle>
                        <label>
                            {/* Last Name */}
                            
                            <input type="text" name='lastName' onChange={this.handleChange} value={this.state.user.lastName} placeholder='Last Name'/>
                        </label>
                        </LabelStyle>
                        <LabelStyle>
                        <label>
                            {/* Email */}
                           
                            <input type="text" name='email' onChange={this.handleChange} value={this.state.user.email} placeholder='Email'/>
                        </label>
                        </LabelStyle>
                        <LabelStyle>
                        <label>
                            {/* Handicap */}
                            
                            <input type="Number" name='handicap' onChange={this.handleChange} value={this.state.user.handicap} placeholder='Handicap'/>
                        </label>
                        </LabelStyle>
                        <LabelStyle>
                        <label>
                            {/* PhotoURL */}
                            
                            <input type="text" name='photoURL' onChange={this.handleChange} value={this.state.user.photoURL} placeholder='PhotoURL'/>
                        </label>
                        </LabelStyle>
                        <LabelStyle>
                            <SubmitButton>
                        <input type='submit' value='Submit' />
                        </SubmitButton>
                        </LabelStyle>
                    </form>
                </FormColumn>
            </FormWrapper>
            
        )
    }
}

export default NewUser
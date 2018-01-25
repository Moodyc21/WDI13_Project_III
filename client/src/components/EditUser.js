import React, {Component} from 'react'
import {Link} from 'react-router-dom'
import styled from 'styled-components'
import {Redirect} from 'react-router-dom'
import axios from 'axios'

const FormWrapper = styled.div `
        background-color: #0E3F8A;
        h1 {
            font-size: 60px;
            margin: 0 auto;
            text-align: center;
            color: white;
            padding: 20px 0 20px;
}
        label {
            font-size: 25px;
            color: white;
        }
        img {
            display: flex;
            margin: 0 auto;
            max-height: 200px;
            max-width: 200px;
            border: 2px solid white;
            border-radius: 3px;

        }
        width: 100vw;
        height: 100vw;

`

const FormColumn = styled.div `
    
`
const LabelStyle = styled.div `
        display: flex;
        justify-content: center;
        padding: 5px;
        [type=text] {
            border-radius: 3px;
        }
        

`
const SubmitButton = styled.div `
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

class EditUser extends Component {
    constructor() {
        super()
        this.state = {
            user: {},
            redirect: false
        }
    }

    componentWillMount() {

        console.log("User in props: ", this.props.user)
        const currentUser = {
            ...this.state.user
        }
        currentUser.firstName = this.props.user.firstName
        currentUser.lastName = this.props.user.lastName
        currentUser.email = this.props.user.email
        currentUser.handicap = this.props.user.handicap
        currentUser.photoURL = this.props.user.photoURL

        this.setState({user: currentUser })
        console.log("User in state after set: ", this.state.user)
    }

    handleSubmit = (e) => {
        e.preventDefault()
        this.props.updateUser(this.props.user)
        this.setState({redirect: true})
    }

    render() {
        console.log("Rendering Edit User")

        if (this.state.redirect) {
            return (<Redirect
                to={{pathname: '/userProfile', state: {fromDashboard: true}}}/>)
        }
        return (
            <FormWrapper>
                <h1>Edit User</h1>
                <img src={this.props.photo} alt="User Pic"/>
                <FormColumn>
                    <form onSubmit={this.handleSubmit}>
                        <LabelStyle>
                            <label>
                                {/* First Name */}

                                <input
                                    type="text"
                                    name='firstName'
                                    onChange={(event) => {
                                    this.props.handleChange(this.props.user, event)}}
                                    value={this.props.user.firstName}
                                    placeholder={this.props.firstName}/>
                            </label>
                        </LabelStyle>
                        <LabelStyle>
                            <label>
                                {/* Last Name */}

                                <input
                                    type="text"
                                    name='lastName'
                                    onChange={(event) => this.props.handleChange(this.props.user, event)}
                                    value={this.props.user.lastName}
                                    placeholder={this.props.lastName}/>
                            </label>
                        </LabelStyle>
                        <LabelStyle>
                            <label>
                                {/* Email */}

                                <input
                                    type="text"
                                    name='email'
                                    onChange={(event) => this.props.handleChange(this.props.user, event)}
                                    value={this.props.user.email}
                                    placeholder={this.props.email}/>
                            </label>
                        </LabelStyle>
                        <LabelStyle>
                            <label>
                                {/* Handicap */}

                                <input
                                    type="Number"
                                    name='handicap'
                                    onChange={(event) => this.props.handleChange(this.props.user, event)}
                                    value={this.props.user.handicap}
                                    placeholder={this.props.handicap}/>
                            </label>
                        </LabelStyle>
                        <LabelStyle>
                            <label>
                                {/* PhotoURL */}

                                <input
                                    type="text"
                                    name='photoURL'
                                    onChange={(event) => this.props.handleChange(this.props.user, event)}
                                    value={this.props.user.photoURL}
                                    placeholder={this.props.photo}/>
                            </label>
                        </LabelStyle>
                        <LabelStyle>
                            <SubmitButton>
                                <input type='submit' value='Edit'/>
                            </SubmitButton>
                        </LabelStyle>
                    </form>
                </FormColumn>
            </FormWrapper>

        )
    }
}

export default EditUser
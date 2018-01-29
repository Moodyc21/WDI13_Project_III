import React, {Component} from 'react'
import styled from 'styled-components'
import {Redirect} from 'react-router-dom'

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
            height: 200px;
            width: 200px;
            border: 2px solid white;
            border-radius: 3px;

        }
        width: 100%;
        height: 100%;

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
    constructor(props) {
        super(props)
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

    // componentWillMount() {

    //     console.log("User in props: ", this.props.user)
    //     const currentUser = this.props.user
    //     console.log('currentUser', currentUser)
    //     currentUser.firstName = this.props.user.firstName
    //     currentUser.lastName = this.props.user.lastName
    //     currentUser.email = this.props.user.email
    //     currentUser.handicap = this.props.user.handicap
    //     currentUser.photoURL = this.props.user.photoURL

    //     this.setState({ user: currentUser })
    //     console.log("User in state after set: ", this.state)
    // }
  

    handleSubmit = (e) => {
        e.preventDefault()
        this.props.updateUser(this.state.user)
        this.setState({redirect: true})
        console.log("first name:", this.state.user.firstName)
    }

    render() {
        console.log("Rendering Edit User:", this.state.user.firstName)

        if (this.state.redirect) {
            return (<Redirect
                to={{pathname: `/userProfile/${this.props.user._id}`, state: {fromDashboard: true}}}/>)
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
                                    this.props.handleChange(this.state.user, event)}}
                                    value={this.state.user.firstName}
                                    placeholder={this.props.user.firstName}/>
                            </label>
                        </LabelStyle>
                        <LabelStyle>
                            <label>
                                {/* Last Name */}

                                <input
                                    type="text"
                                    name='lastName'
                                    onChange={(event) => { this.props.handleChange(this.state.user, event)}}
                                    value={this.state.user.lastName}
                                    placeholder={this.props.user.lastName}/>
                            </label>
                        </LabelStyle>
                        <LabelStyle>
                            <label>
                                {/* Email */}

                                <input
                                    type="text"
                                    name='email'
                                    onChange={(event) => { this.props.handleChange(this.state.user, event)}}
                                    value={this.state.user.email}
                                    placeholder={this.props.user.email}/>
                            </label>
                        </LabelStyle>
                        <LabelStyle>
                            <label>
                                {/* Handicap */}

                                <input
                                    type="Number"
                                    name='handicap'
                                    onChange={(event) => { this.props.handleChange(this.state.user, event)}}
                                    value={this.state.user.handicap}
                                    placeholder={this.props.user.handicap}/>
                            </label>
                        </LabelStyle>
                        <LabelStyle>
                            <label>
                                {/* PhotoURL */}

                                <input
                                    type="text"
                                    name='photoURL'
                                    onChange={(event) => { this.props.handleChange(this.state.user, event)}}
                                    value={this.state.user.photoURL}
                                    placeholder={this.props.user.photoURL}/>
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
import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'

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
    render () {
        return (
            <FormWrapper>
                <h1>Create <br/> User</h1>
                <FormColumn>
                    <form >
                        <LabelStyle>
                        <label>
                            {/* First Name */}
                            
                            <input type="text" placeholder='First Name'/>
                        </label>
                        </LabelStyle>
                        <LabelStyle>
                        <label>
                            {/* Last Name */}
                            
                            <input type="text" placeholder='Last Name'/>
                        </label>
                        </LabelStyle>
                        <LabelStyle>
                        <label>
                            {/* Email */}
                           
                            <input type="text" placeholder='Email'/>
                        </label>
                        </LabelStyle>
                        <LabelStyle>
                        <label>
                            {/* Handicap */}
                            
                            <input type="text" placeholder='Handicap'/>
                        </label>
                        </LabelStyle>
                        <LabelStyle>
                        <label>
                            {/* PhotoURL */}
                            
                            <input type="text" placeholder='PhotoURL'/>
                        </label>
                        </LabelStyle>
                        <LabelStyle>
                            <SubmitButton>
                        <input type='submit' value='Submit'/>
                        </SubmitButton>
                        </LabelStyle>
                    </form>
                </FormColumn>
            </FormWrapper>
            
        )
    }
}

export default NewUser
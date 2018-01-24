import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'

const FormWrapper = styled.div`
        background-color: #0E3F8A;
        h1 {
            margin: 0 auto;
            text-align: center;
            color: white;
}
        label {
            color: white;
        }

`

const FormColumn = styled.div`
    
`
const LabelStyle = styled.div`
        display: flex;
        justify-content: center;
        padding: 15px;

`

class NewUser extends Component {
    render () {
        return (
            <FormWrapper>
                <h1>Create a New User</h1>
                <FormColumn>
                    <form>
                        <LabelStyle>
                        <label>
                            First Name
                            <input type="text"/>
                        </label>
                        </LabelStyle>
                        <LabelStyle>
                        <label>
                            Last Name
                            <input type="text"/>
                        </label>
                        </LabelStyle>
                        <LabelStyle>
                        <label>
                            Email
                            <input type="text"/>
                        </label>
                        </LabelStyle>
                        <LabelStyle>
                        <label>
                            Handicap
                            <input type="text"/>
                        </label>
                        </LabelStyle>
                        <LabelStyle>
                        <label>
                            PhotoURL
                            <input type="text"/>
                        </label>
                        </LabelStyle>
                        <LabelStyle>
                        <input type='submit' value='Submit'/>
                        </LabelStyle>
                    </form>
                </FormColumn>
            </FormWrapper>
            
        )
    }
}

export default NewUser
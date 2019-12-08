import React, { Component } from 'react';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import axios from 'axios';
import Headercomp from '../HeaderComponent/headercomp'
import '../signUpComponent/signup.css'

export class LoginComponent extends Component {
    state={
        email:'',
        password:'',

    }

    

    handleChange=input=>event=>{
        this.setState({[input]:event.target.value});
        
    }

    submit(){
        //send state to backend
        console.log(this.state);
        axios.post('http://localhost:4321/student/login',this.state)
            .then(response=>{
                console.log(response);
                //alert(response.data.msg)
                if(response.data.msg=='Logged in'){
                    this.props.history.push("/home")
                }
            })
            .catch(err=>{
                alert('Some error Occured')
            })
    }

    render(){
        return(
            <div>
                <Headercomp/>
                <TextField
                 placeholder="Enter Email(College)"
                 label="Email"
                 className="inputField"
                 onChange={this.handleChange('email')}
                />
                <br/>
                <TextField
                 placeholder="Enter Password"
                 label="Password"
                 className="inputField"
                 type="password"
                 onChange={this.handleChange('password')}
                />
                <br/>
                <Button color="primary" variant="contained" onClick={this.submit.bind(this)}
                   style={{margin:'20px'}}>
                  Submit
                </Button>
            </div>
        )
    }
}

export default LoginComponent

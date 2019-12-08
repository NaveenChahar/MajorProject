import React,{Component } from 'react';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import axios from 'axios';
import Headercomp from '../HeaderComponent/headercomp'
import './signup.css'

export class SignUpComponent extends Component{

    constructor (props) {
        super(props);
        this.state = {
            name:'',
            rollno:'',
            email:'',
            password:'',
        }
      }

    

    handleChange=input=>event=>{
        this.setState({[input]:event.target.value});
        
    }

    submit(){
        //send state to backend
        console.log(this.state);
        axios.post('http://localhost:4321/student/signUp',this.state)
            .then(response=>{
                console.log(response);
                alert(response.data.msg);
            })
            .catch(err=>{
                console.log(err)
                alert('Some error Occured');
            })
    }

    render(){
        return(
            <div>
                <Headercomp/>
                <TextField
                 label="Enter Username"
                 placeholder="Username"
                 className="inputField"
                 onChange={this.handleChange('name')}
                />
                <br/>
                <TextField
                 placeholder="Format-2K16/EE/076"
                 label="Roll No"
                 className="inputField"
                 onChange={this.handleChange('rollno')}
                />
                <br/>
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
                 type="password"
                 className="inputField"
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


export default SignUpComponent;
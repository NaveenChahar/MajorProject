import React, { Component } from 'react'
import EditorComponent from './Editor/editor';
import TextField from '@material-ui/core/TextField';
import InputLabel from '@material-ui/core/InputLabel';
import FormControl from '@material-ui/core/FormControl';
import MenuItem from '@material-ui/core/MenuItem';
import Select from '@material-ui/core/Select';
import Button from '@material-ui/core/Button';
import axios from 'axios';
import './blog.css'


export class BlogComponent extends Component {

    constructor (props) {
        super(props);
        this.state = {
            //use this to display form
            catId:null,
            topic:null,
            userId:localStorage.getItem('userId'), //or get from the jwt
            content:[]

        }
      }

    

    handleChange=input=>event=>{
        this.setState({[input]:event.target.value});
        
    }

    //define a changeHandler for the change in editor to be passed as props
    handleEditor(obj){
        //console.log('in blog',obj)
        //fill the details to be shown to the user
        obj.priority=this.state.content.length;  //assigning priority
        let content1=this.state.content;
        content1.push(obj);             //pushing into local array and then replacing the state array
        this.setState({content:content1});
        //console.log('in blog',this.state)

    }

    submit(){
        //send state to backend
        console.log(this.state);
        axios.post('http://localhost:4321/student/',this.state)
            .then(response=>{
                console.log(response);
                alert(response.data.msg);
            })
            .catch(err=>{
                console.log(err)
                alert('Some error Occured');
            })
    }

    render() {
        return (
            <div className="blog_div">
                <div>
                    <TextField
                        label="Topic"
                        className="topic"
                        multiline
                        rowsMax="5"
                        onChange={this.handleChange}
                        margin="normal"
                    />
                    <FormControl className="dropdown">
                        <InputLabel>Category</InputLabel>
                        <Select
                            labelId="demo-simple-select-label"
                            onChange={this.handleChange}
                        >
                            <MenuItem value={10}>Electrical</MenuItem>
                            <MenuItem value={20}>Electronics</MenuItem>
                            <MenuItem value={30}>Civil</MenuItem>
                            <MenuItem value={40}>Mechanical</MenuItem>
                            <MenuItem value={50}>Computer</MenuItem>
                        </Select>
                    </FormControl>
                </div>
                <EditorComponent handleEditor={this.handleEditor.bind(this)}/>
                
            </div>
        )
    }
}

export default BlogComponent

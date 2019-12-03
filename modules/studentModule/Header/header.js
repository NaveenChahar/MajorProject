import React, { Component } from 'react'
//import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
//import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import './header.css'
import {Link} from 'react-router-dom'

export default class Header extends Component {
    render() {
        return (
            <div className='root'>
           <AppBar position="static">
           <Toolbar className='wrapper'>
          <IconButton edge="start" className='menuButton' color="inherit" aria-label="menu">
            <MenuIcon />
          </IconButton>
          <Button color="inherit">
            <Link className="link" to='/login'>LogOut</Link>
          </Button>
        </Toolbar>
           </AppBar>
          </div>
        )
    }
}

import React, { Component } from 'react'
import Header from '../Header/header'
import { BlogComponent } from '../../sharedModule/Blog/blog';

export class Home extends Component {
    render() {
        return (
            <div>
                <Header/>
                Write an article
                <BlogComponent/>
            </div>
        )
    }
}

export default Home

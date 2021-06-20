import React, {Component} from 'react';
import {Grid, Cell } from 'react-mdl';
import { FaGithub, FaLinkedinIn } from "react-icons/fa"

class Landing extends Component{
    render() {
        return (
            <div style={{width: '100%' , margin: 'auto'}}>
            <Grid classname="landing-grid">
            <Cell col={12}>
                <img 
                src="./images/jamesavatar.jpeg" 
                alt="James"
                className="avatar-img"
                />

                <div className="banner-text">
                    <h1> Software Engineer</h1>

                <hr/>

                <p>HTML/CSS | React | Javascript | NodeJS | Github
        <div className="social-links">
             <a href="http://www.google.com" target="_blank">
                 <FaGithub />
             </a>
             <a href="http://www.google.com" target="_blank">
                 <FaLinkedinIn />
             </a>
             <a href="http://www.google.com" target="_blank">
                 <FaGithub />
             </a>
             <a href="http://www.google.com" target="_blank">
                 <FaGithub />
             </a>
            </div>
                </p>
                </div>
            </Cell>
            </Grid>
            </div>

        )
    }
}
export default Landing;
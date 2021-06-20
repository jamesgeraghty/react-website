import React, {Component} from 'react';
import {Grid, Cell } from 'react-mdl';

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
                    <h1> Computer Science Student</h1>


                </div>
            </Cell>
            </Grid>
            </div>

        )
    }
}
export default Landing;
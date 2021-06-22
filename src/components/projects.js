import React, {Component} from 'react';
import { Tabs, Tab, Grid, Cell, Card, CardTitle, CardText, CardActions, Button, CardMenu, IconButton } from 'react-mdl';

class Projects extends Component{
    constructor(props){

    super(props);
    this.state = {activeTab: 0 };
}

toggleCategories(){
    if (this.state.activeTab === 0){
        return(
            <div><h3>This is the react Project</h3></div>
        )
    }
}



    render(){
        return (
            <div className="category-tabs">
                <Tabs activeTab={this.state.activeTab} onChange={(tabId) => this.setState({ activeTab: tabId })} ripple>
                    <Tab>React</Tab>
                    <Tab>NodeJS</Tab>
                    <Tab>MongoDB</Tab>
                    <Tab>React</Tab>
                </Tabs>

                <section className="project-grid">
                    {this.toggleCategories()}
                </section>
            </div>
        )
    }
}
export default Projects;
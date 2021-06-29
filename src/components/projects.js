import React, {Component} from 'react';
import { Tabs, Tab, Grid, Cell, Card, CardTitle, CardText, CardActions, Button, CardMenu, IconButton } from 'react-mdl';
//import background from "./logo-og.png";

class Projects extends Component{
    constructor(props){

    super(props);
    this.state = {activeTab: 0 };
}

toggleCategories(){
    if (this.state.activeTab === 0){
        return(
            <div className="projects-grid">

            {/* // REACT #1 */}
            <Card shadow={5} style={{minWidth: '700', margin: 'auto'}}>
                <CardTitle style= {{color: '#fff', height:'279px', backgroundImage: "url( ./images/react.jpg)"  }}> React Project #1</CardTitle>
             <CardText>
                 This is a test 
             </CardText>
             <CardActions>
                 <Button colored> Github Repo </Button>
                 {/* <Button colored> Github </Button>
                 <Button colored> Github </Button> */}
             </CardActions>
             <CardMenu style={{color: '#ffff'}}>
                 <IconButton name="share" />
                 </CardMenu>
            </Card>

            {/* // Project #1 */}
            <Card shadow={5} style={{minWidth: '700', margin: 'auto'}}>
                <CardTitle style= {{color: '#fff', height:'279px', backgroundImage: "url( ./images/react.jpg)"  }}> React Project #1</CardTitle>
             <CardText>
                 This is a test 
             </CardText>
             <CardActions>
                 <Button colored> Github Repo </Button>
                 {/* <Button colored> Github </Button>
                 <Button colored> Github </Button> */}
             </CardActions>
             <CardMenu style={{color: '#ffff'}}>
                 <IconButton name="share" />
                 </CardMenu>
            </Card>
            {/* // Project #1 */}
            <Card shadow={5} style={{minWidth: '700', margin: 'auto'}}>
                <CardTitle style= {{color: '#fff', height:'279px', backgroundImage: "url( ./images/react.jpg)"  }}> React Project #1</CardTitle>
             <CardText>
                 This is a test 
             </CardText>
             <CardActions>
                 <Button colored> Github Repo </Button>
                 {/* <Button colored> Github </Button>
                 <Button colored> Github </Button> */}
             </CardActions>
             <CardMenu style={{color: '#ffff'}}>
                 <IconButton name="share" />
                 </CardMenu>
            </Card>
            </div>
        



        )

           {/* // Node JS #1 */}
    } else if (this.state.activeTab === 1){
        return(
            <div className="projects-grid">

            {/* // Project #1 */}
            <Card shadow={5} style={{minWidth: '700', margin: 'auto'}}>
                <CardTitle style= {{color: '#fff', height:'279px', backgroundImage: "url( ./images/react.jpg)"  }}> Node JS Project #1</CardTitle>
             <CardText>
                 This is a test 
             </CardText>
             <CardActions>
                 <Button colored> Github Repo </Button>
                 {/* <Button colored> Github </Button>
                 <Button colored> Github </Button> */}
             </CardActions>
             <CardMenu style={{color: '#ffff'}}>
                 <IconButton name="share" />
                 </CardMenu>
            </Card>

            {/* // Project #1 */}
            <Card shadow={5} style={{minWidth: '700', margin: 'auto'}}>
                <CardTitle style= {{color: '#fff', height:'279px', backgroundImage: "url( ./images/react.jpg)"  }}> React Project #1</CardTitle>
             <CardText>
                 This is a test 
             </CardText>
             <CardActions>
                 <Button colored> Github Repo </Button>
                 {/* <Button colored> Github </Button>
                 <Button colored> Github </Button> */}
             </CardActions>
             <CardMenu style={{color: '#ffff'}}>
                 <IconButton name="share" />
                 </CardMenu>
            </Card>
            {/* // Project #1 */}
            <Card shadow={5} style={{minWidth: '700', margin: 'auto'}}>
                <CardTitle style= {{color: '#fff', height:'279px', backgroundImage: "url( ./images/react.jpg)"  }}> React Project #1</CardTitle>
             <CardText>
                 This is a test 
             </CardText>
             <CardActions>
                 <Button colored> Github Repo </Button>
                 {/* <Button colored> Github </Button>
                 <Button colored> Github </Button> */}
             </CardActions>
             <CardMenu style={{color: '#ffff'}}>
                 <IconButton name="share" />
                 </CardMenu>
            </Card>
            </div>
        
        )

           {/* // MongoDB #1 */}
    }else if (this.state.activeTab === 2){
        return(
            <div className="projects-grid">

            {/* // Project #1 */}
            <Card shadow={5} style={{minWidth: '700', margin: 'auto'}}>
                <CardTitle style= {{color: '#fff', height:'279px', backgroundImage: "url( ./images/react.jpg)"  }}> Mongo DB Project #1</CardTitle>
             <CardText>
                 This is a test 
             </CardText>
             <CardActions>
                 <Button colored> Github Repo </Button>
                 {/* <Button colored> Github </Button>
                 <Button colored> Github </Button> */}
             </CardActions>
             <CardMenu style={{color: '#ffff'}}>
                 <IconButton name="share" />
                 </CardMenu>
            </Card>

            {/* // Project #1 */}
            <Card shadow={5} style={{minWidth: '700', margin: 'auto'}}>
                <CardTitle style= {{color: '#fff', height:'279px', backgroundImage: "url( ./images/react.jpg)"  }}> React Project #1</CardTitle>
             <CardText>
                 This is a test 
             </CardText>
             <CardActions>
                 <Button colored> Github Repo </Button>
                 {/* <Button colored> Github </Button>
                 <Button colored> Github </Button> */}
             </CardActions>
             <CardMenu style={{color: '#ffff'}}>
                 <IconButton name="share" />
                 </CardMenu>
            </Card>
            {/* // Project #1 */}
            <Card shadow={5} style={{minWidth: '700', margin: 'auto'}}>
                <CardTitle style= {{color: '#fff', height:'279px', backgroundImage: "url( ./images/react.jpg)"  }}> React Project #1</CardTitle>
             <CardText>
                 This is a test 
             </CardText>
             <CardActions>
                 <Button colored> Github Repo </Button>
                 {/* <Button colored> Github </Button>
                 <Button colored> Github </Button> */}
             </CardActions>
             <CardMenu style={{color: '#ffff'}}>
                 <IconButton name="share" />
                 </CardMenu>
            </Card>
            </div>
        
        )

           {/* // DEVOPS #1 */}
    }else if (this.state.activeTab === 3){
        return(
            <div className="projects-grid">

            {/* // Project #1 */}
            <Card shadow={5} style={{minWidth: '700', margin: 'auto'}}>
                <CardTitle style= {{color: '#fff', height:'279px', backgroundImage: "url( ./images/react.jpg)"  }}> Devops Project #1</CardTitle>
             <CardText>
                 This is a test 
             </CardText>
             <CardActions>
                 <Button colored> Github Repo </Button>
                 {/* <Button colored> Github </Button>
                 <Button colored> Github </Button> */}
             </CardActions>
             <CardMenu style={{color: '#ffff'}}>
                 <IconButton name="share" />
                 </CardMenu>
            </Card>

            {/* // Project #1 */}
            <Card shadow={5} style={{minWidth: '700', margin: 'auto'}}>
                <CardTitle style= {{color: '#fff', height:'279px', backgroundImage: "url( ./images/react.jpg)"  }}> React Project #1</CardTitle>
             <CardText>
                 This is a test 
             </CardText>
             <CardActions>
                 <Button colored> Github Repo </Button>
                 {/* <Button colored> Github </Button>
                 <Button colored> Github </Button> */}
             </CardActions>
             <CardMenu style={{color: '#ffff'}}>
                 <IconButton name="share" />
                 </CardMenu>
            </Card>
            {/* // Project #1 */}
            <Card shadow={5} style={{minWidth: '700', margin: 'auto'}}>
                <CardTitle style= {{color: '#fff', height:'279px', backgroundImage: "url( ./images/react.jpg)"  }}> React Project #1</CardTitle>
             <CardText>
                 This is a test 
             </CardText>
             <CardActions>
                 <Button colored> Github Repo </Button>
                 {/* <Button colored> Github </Button>
                 <Button colored> Github </Button> */}
             </CardActions>
             <CardMenu style={{color: '#ffff'}}>
                 <IconButton name="share" />
                 </CardMenu>
            </Card>
            </div>
        
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
                    <Tab>Devops</Tab>
                </Tabs>

                
                    <Grid >
                        <Cell col={12}>
                             <div className="content">{this.toggleCategories()}</div>
                        </Cell>

                    </Grid>
                    
                
            </div>
        )
    }
}
export default Projects;
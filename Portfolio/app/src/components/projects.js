import React, { Component } from 'react';
import { Tabs, Tab, Grid, Cell, Card, CardActions, CardText, CardTitle, Button, CardMenu, IconButton } from 'react-mdl';

class Project extends Component {

    constructor(props){
        super(props);
        this.state = { activeTab: 0 };
    }

    toggleCategories(){

        if(this.state.activeTab === 0 ){
            return (
                <div className = "projects-grid">
                    <Card sahdow = {5} style = {{ minWidth: '450', margin: 'auto'}}>

                        <CardTitle style = {{ color: '#fff', height: '176px', background:'url(https://reactjs.org/logo-og.png) center / cover'}}>
                            React project #1
                        </CardTitle>

                        <CardText> LoremIpsumLoremIpsumLoremIpsumLoremIpsumLoremIpsumLoremIpsumLoremIpsumLoremIpsumLoremIpsumLoremIpsumLoremIpsumLoremIpsumLoremIpsumLoremIpsumLoremIpsumLoremIpsumLoremIpsumLoremIpsum</CardText>

                        <CardActions border>
                            <Button colored>GitHub</Button>
                            <Button colored>CodePen</Button>
                            <Button colored>LiveDemo</Button>
                        </CardActions>

                        <CardMenu style = {{ color: '#fff' }}> 
                            <IconButton name = "share" />
                        </CardMenu>

                    </Card>

                    <Card sahdow = {5} style = {{ minWidth: '450', margin: 'auto'}}>

                        <CardTitle style = {{ color: '#fff', height: '176px', background:'url(https://reactjs.org/logo-og.png) center / cover'}}>
                            React project #2
                        </CardTitle>

                        <CardText> LoremIpsumLoremIpsumLoremIpsumLoremIpsumLoremIpsumLoremIpsumLoremIpsumLoremIpsumLoremIpsumLoremIpsumLoremIpsumLoremIpsumLoremIpsumLoremIpsumLoremIpsumLoremIpsumLoremIpsumLoremIpsum</CardText>

                        <CardActions border>
                            <Button colored>GitHub</Button>
                            <Button colored>CodePen</Button>
                            <Button colored>LiveDemo</Button>
                        </CardActions>

                        <CardMenu style = {{ color: '#fff' }}> 
                            <IconButton name = "share" />
                        </CardMenu>

                    </Card>
                    <Card sahdow = {5} style = {{ minWidth: '450', margin: 'auto'}}>

                        <CardTitle style = {{ color: '#fff', height: '176px', background:'url(https://reactjs.org/logo-og.png) center / cover'}}>
                            React project #3
                        </CardTitle>

                        <CardText> LoremIpsumLoremIpsumLoremIpsumLoremIpsumLoremIpsumLoremIpsumLoremIpsumLoremIpsumLoremIpsumLoremIpsumLoremIpsumLoremIpsumLoremIpsumLoremIpsumLoremIpsumLoremIpsumLoremIpsumLoremIpsum</CardText>

                        <CardActions border>
                            <Button colored>GitHub</Button>
                            <Button colored>CodePen</Button>
                            <Button colored>LiveDemo</Button>
                        </CardActions>

                        <CardMenu style = {{ color: '#fff' }}> 
                            <IconButton name = "share" />
                        </CardMenu>

                    </Card>
                </div>
            )
        }else if(this.state.activeTab === 1 ){
            return (
                <div>
                    <h1> This is Angular </h1>
                </div>
            )
        }else if(this.state.activeTab === 2 ){
            return (
                <div>
                    <h1> This is VueJS </h1>
                </div>
            )
        }else if(this.state.activeTab === 3 ){
            return (
                <div>
                    <h1> This is MongoDB </h1>
                </div>
            )
        }

    }

    render() {
        return (
            <div className = "category-tabs">

                <Tabs activeTab = {this.state.activeTab} onChange = { (tabId) => this.setState({ activeTab: tabId})} ripple>
                    <Tab>React</Tab>
                    <Tab>Angular</Tab>
                    <Tab>VueJs</Tab>
                    <Tab>MongoDB</Tab>
                </Tabs>

                
                    <Grid className = "projects-grid">
                        <Cell col = {12}>
                            <div className = "content">{this.toggleCategories()}</div>
                        </Cell>
                    </Grid>

            </div>
        )
    }
}

export default Project;
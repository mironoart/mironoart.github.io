import React, { Component } from 'react';
import './App.css';
import { Layout, Header, Navigation, Drawer, Content} from 'react-mdl';
import Main from './components/main';
import { Link } from 'react-router-dom';

class App extends Component {
  render() {
    return (
      <div className="demo-big-content">
    <Layout>
        <Header className = "header-color" title="Title" scroll>
            <Navigation>
                <Link to="/resume"> Resume </Link>
                <Link to="/aboutme"> About me </Link>
                <Link to="/projects"> My Projects </Link>
                <Link to="/contacts"> My contacts </Link>
            </Navigation>
        </Header>
        <Drawer title="Title">
            <Navigation>
                <Link to="/resume"> Resume </Link>
                <Link to="/aboutme"> About me </Link>
                <Link to="/projects"> My Projects </Link>
                <Link to="/contacts"> My contacts </Link>
            </Navigation>
        </Drawer>
        <Content>
            <div className="page-content" />
            <Main></Main>
        </Content>
    </Layout>
        </div>
    );
  }
}

export default App;

import React, {Component} from 'react';
//import logo from './logo.svg';
import './App.css';
import { Layout, Header, Navigation, Drawer, Content } from 'react-mdl';
import Main from './components/main';
import { Link } from 'react-router-dom';

function App() {
  return (
    <div style={{height: '300px', position: 'relative'}}>
    <Layout fixedHeader>
        <Header title={<span><span style={{ color: '#ddd' }}>Area / </span><strong>James Geraghty</strong></span>}>
            <Navigation>
                <Link to ="/resume">Resume</Link>
                <Link to ="/about">Contact</Link>
                <Link to ="/contact">About Me</Link>
                <Link to ="/">Home</Link>
            </Navigation>
        </Header>
        <Drawer title="Menu">
            <Navigation>
            <Link to ="/resume">Resume</Link>
                <Link to ="/about">Contact</Link>
                <Link to ="/contact">About Me</Link>
                <Link to ="/">Home</Link>
            </Navigation>
        </Drawer>
        <Content>
          <div className="page-content" />
          <Main/>
        </Content> 
    </Layout>
</div>
  );
}

export default App;

import React, { Component } from 'react';
import SidebarExampleVisible from './Sidebar.js'
import './App.css';
import { Container } from 'semantic-ui-react'

class App extends Component {
  render() {
    return (
      <Container fluid>
        <SidebarExampleVisible/>
        <ul>
          <li>contact 1</li>
          <li>contact 2</li>
          <li>contact 3</li>
          <li>contact 4</li>
          <li>contact 5</li>
        </ul>
      </Container>
    );
  }
}

export default App;

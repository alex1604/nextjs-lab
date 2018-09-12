import React from 'react'
import {Header, Icon, Image, Segment, Sidebar, Menu } from 'semantic-ui-react'
import './Sidebar.css';
// import phoneLogo from './phoneLogo.png';

const SidebarExampleVisible = () => (
  <Sidebar.Pushable as={Segment} className="sidebar">
    <Sidebar as={Menu} animation='overlay' icon='labeled' inverted vertical visible width='thin'>
      <Menu.Item>
        <Image src='./phoneLogo.png' />
      </Menu.Item>
      <Menu.Item as='a'>
        <Icon name='home' />
        Home
      </Menu.Item>
      <Menu.Item as='a'>
        <Icon name='users' />
        Family
      </Menu.Item>
      <Menu.Item as='a' onClick={()=>console.log("camera")}>
        <Icon name='users' />
        Friends
      </Menu.Item>
    </Sidebar>
    <Sidebar.Pusher >
      <Segment>
        <Header as='h3'>Application Content</Header>
        <p>hello</p>
      </Segment>
    </Sidebar.Pusher>
    </Sidebar.Pushable>
)

export default SidebarExampleVisible;

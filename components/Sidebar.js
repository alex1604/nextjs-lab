import React from 'react'
import {Header, Icon, Image, Segment, Sidebar, Menu } from 'semantic-ui-react'
// import phoneLogo from '../static/phoneLogo.png';

const SidebarExampleVisible = () => (
  <Sidebar.Pushable as={Segment} className="sidebar">
    <Sidebar as={Menu} icon='labeled' inverted vertical visible width='thin'>
      <Menu.Item>
        <Image src='../static/phoneLogo.png' />
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
    <style jsx> {`
      .sidebar{
        height: 100vh;
        position: fixed;
        }
        p{
          width:1vw;
          font-size: 100px;
          padding-right: 300px;
        }
      `}</style>
    </Sidebar.Pushable>

)

export default SidebarExampleVisible;

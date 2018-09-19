import React, { Component } from 'react'
import { Menu, Segment, Image, Input, Button } from 'semantic-ui-react'
import Link from 'next/link'


export default class MenuHorisontal extends Component {
  constructor(props) {
    super(props)
}

  render() {
    let activeItem  = this.props.activeFilter;

    return (
      <Segment inverted style={{borderRadius: "0"}}>
        <Menu inverted secondary >
          <Link href="index">
            <Menu.Item style={{padding: "0", opacity: "0.7"}}>
              <Image src='../static/phoneLogo.png' style={{height: "38px"}}></Image>
            </Menu.Item>
          </Link>

          <Menu.Item style={{marginLeft: "3rem"}}>
            <Input
              className='icon' icon='search'
              placeholder='Search...'
              value={this.props.searchValue}
              onChange={ (e) => this.props.searchData(this.props.data, e.target.value, this.props.activeFilter)}/>
          </Menu.Item>

          <Menu.Item style={{marginLeft: "3rem"}}>
            <p>Show: </p>
          </Menu.Item>

          <Menu.Item
            name='all'
            active={activeItem === 'all'}
            onClick={this.props.handleItemClick}
          />


            <Menu.Item
              name='family'
              active={activeItem === 'family'}
              onClick={this.props.handleItemClick}
            />

          <Menu.Item
            name='friends'
            active={activeItem === 'friends'}
            onClick={this.props.handleItemClick}
          />
          <Link href="/create">
            <Menu.Item position='right'>
                <Button positive icon='plus' labelPosition='right' content='Add Contact' />
            </Menu.Item>
          </Link>
        </Menu>
      </Segment>
    )
  }
}

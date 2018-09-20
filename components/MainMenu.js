import React, { Component, Fragment } from 'react'
import { Menu, Segment, Image, Input, Button } from 'semantic-ui-react'
import Link from 'next/link'


let MenuHorisontal = (props) => {
    let activeItem  = props.activeFilter;
    return (
      <Segment inverted style={{borderRadius: "0"}}>
        <Menu inverted secondary >
          <Link href="index">
            <Menu.Item style={{padding: "0", opacity: "0.7"}}>
              <Image src='../static/phoneLogo.png' style={{height: "38px"}}></Image>
            </Menu.Item>
          </Link>

          {props.menuTools ? (<Fragment>
            <Menu.Item style={{marginLeft: "3rem"}}>
            <Input
              className='icon' icon='search'
              placeholder='Search...'
              value={props.searchValue}
              onChange={ (e) => props.searchData(props.data, e.target.value, props.activeFilter)}/>
          </Menu.Item>
          <Menu.Item style={{marginLeft: "3rem"}}>
            <p>Show: </p>
          </Menu.Item>
          <Menu.Item
            name='all'
            active={activeItem === 'all'}
            onClick={props.handleItemClick}
          />
            <Menu.Item
              name='family'
              active={activeItem === 'family'}
              onClick={props.handleItemClick}
            />
          <Menu.Item
            name='friends'
            active={activeItem === 'friends'}
            onClick={props.handleItemClick}
          />
          <Link href="/create">
            <Menu.Item position='right'>
                <Button positive icon='plus' labelPosition='right' content='Add Contact' />
            </Menu.Item>
          </Link>
        </Fragment>) : (
          <Link href="index">
          <Menu.Item style={{marginLeft: "3rem"}}>
            <p>Home</p>
          </Menu.Item>
          </Link>)
        }

        </Menu>
      </Segment>
    )
}

export default MenuHorisontal;

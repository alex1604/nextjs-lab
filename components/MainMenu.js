import React, { Component } from 'react'
import { Menu, Segment, Image, Input, Button } from 'semantic-ui-react'
import Link from 'next/link'


export default class MenuHorisontal extends Component {
  constructor(props) {
    super(props)
}
  state = {
    activeItem: "all",
    initialData: this.props.data,
    searchValue: ""
 }

  handleItemClick = (e, { name }) => {

    this.filterData(name);
    this.setState({ activeItem: name })
  }

  filterData = (name) => {
    if (name === "all") {
        this.props.update(this.state.initialData);
        return;
    }
    let dataObject = this.state.initialData.filter( x => ( x.group === name) );
    this.props.update(dataObject);
  }

  searchData = (dataList, searchTerm) => {
    let newList = [];
    dataList.forEach(x =>
        Object.values(x).find( prop => prop.includes(searchTerm)) ?
        newList.push(x) : null
    );
    this.props.update(newList);
    this.setState({searchValue: searchTerm});
  }

  render() {
    const { activeItem } = this.state

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
              value={this.state.searchValue}
              onChange={ (e) => this.searchData(this.state.initialData, e.target.value)}/>
          </Menu.Item>

          <Menu.Item style={{marginLeft: "3rem"}}>
            <p>Show: </p>
          </Menu.Item>

          <Menu.Item
            name='all'
            active={activeItem === 'all'}
            onClick={this.handleItemClick}
          />


            <Menu.Item
              name='family'
              active={activeItem === 'family'}
              onClick={this.handleItemClick}
            />

          <Menu.Item
            name='friends'
            active={activeItem === 'friends'}
            onClick={this.handleItemClick}
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
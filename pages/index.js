import React from 'react'
import Link from 'next/link'
import Head from '../components/head'
import Nav from '../components/nav'
import MainMenu from '../components/MainMenu'
import CreateContactForm from '../components/createContactForm'
import ContactList from '../components/list'

const firstFetchUrl = 'http://localhost:3000';

class Home extends React.Component{

  static async getInitialProps () {
        const res = await fetch(firstFetchUrl + '/api/simpleFilter/all')
        const data = await res.json()
        console.log(`Show data fetched. Count: ${data.length}`);
        console.log(data);

        return {
          contact: data
        }
    }

  constructor(props){
    super(props);
      this.state={
        initialRender: this.props.contact,
        displayRender: this.props.contact,
        url: firstFetchUrl,
        activeItem: "all",
        searchValue: ""
      }
  }

  update = (newData, active) => {
    this.filterData(newData,active);
    this.setState({initialRender: newData, searchValue: ""});
  }

    handleItemClick = (e, { name }) => {

      this.filterData(this.state.initialRender,name);
      this.setState({ activeItem: name, searchValue: "" })
    }

    filterData = (dataList,name) => {
      if (name === "all") {
          this.setState({displayRender: dataList});
          return;
      }
      let data = dataList.filter( x => ( x.group === name) );
      // console.log('in filter ', data);
      this.setState({displayRender: data});
    }

    searchData = (dataList, searchTerm, group) => {
      // console.log(searchTerm);
      // console.log(dataList);
      let newList = [];
      let byGroup;
      if (group === "all") {
        byGroup = dataList;
      }else {
        byGroup = dataList.filter( x => ( x.group === group) );
      }
      byGroup.forEach(x =>
          Object.values(x).find( prop => {
            if (prop.includes("static")) {

            }else {
              return prop.includes(searchTerm);
            }
          }) ?
          newList.push(x) : null
      );
      this.setState({displayRender: newList, searchValue: searchTerm});
    }

  render(){
    // console.log(this.state.initialRender);
    return (
      <div>
        <Head title="Home" />
        <MainMenu
            activeFilter={this.state.activeItem}
            searchValue={this.searchValue}
            searchData={this.searchData}
            handleItemClick={this.handleItemClick}
            data={this.state.initialRender}/>
        <ContactList
            url={firstFetchUrl}
            update={this.update}
            activeFilter={this.state.activeItem}
            data={this.state.displayRender}/>
      </div>)
  }
}

export default Home

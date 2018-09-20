import React from 'react'
import Link from 'next/link'
import Head from '../components/head'
import Nav from '../components/nav'
import MainMenu from '../components/MainMenu'
import CreateContactForm from '../components/createContactForm'
import ContactList from '../components/list'
import { Message, Icon } from 'semantic-ui-react'

const firstFetchUrl = 'http://localhost:3000';

const messageStyle = {
  position: 'fixed',
  zIndex: '2',
  width: "50%",
  right: '2rem',
  top: '5rem',
}

class Home extends React.Component{

  static async getInitialProps () {
        const res = await fetch(firstFetchUrl + '/api/simpleFilter/all')
        const data = await res.json()
        // console.log(`Show data fetched. Count: ${data.length}`);
        // console.log(data);

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
        searchValue: "",
        trueMessage: false,
        displayMessage: false
      }
  }

    update = (newData, active, timer, failOrSuccess) => {
      this.filterData(newData,active);
      this.setState({initialRender: newData, searchValue: "", displayMessage: timer, trueMessage: failOrSuccess});
    }

    failedUpdate = (timer, failOrSuccess) => {
      this.filterData(newData,active);
      this.setState({searchValue: "", displayMessage: timer, trueMessage: failOrSuccess});
    }

    handleItemClick = (e, { name }) => {
      this.filterData(this.state.initialRender,name);
    }

    filterData = (dataList,name) => {
      if (name === "all") {
          this.setState({displayRender: dataList, searchValue: "", activeItem: name });
          return;
      }
      let data = dataList.filter( x => ( x.group === name) );
      // console.log('in filter ', data);
      this.setState({displayRender: data, searchValue: "" , activeItem: name});
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
    return (
      <div>
        <Head title="Home" />
        <MainMenu
            menuTools={true}
            activeFilter={this.state.activeItem}
            searchValue={this.state.searchValue}
            searchData={this.searchData}
            handleItemClick={this.handleItemClick}
            data={this.state.initialRender}/>

        {this.state.displayMessage ? (<div style={messageStyle}>
        {this.state.trueMessage ? (
          <Message style={{boxShadow: "0 0 10px rgba(0, 0, 0, 0.2)"}} success size='small'>The contact was successfuly DELETED.  <Icon link name='close' onClick={()=> this.setState({displayMessage: false})}/></Message>)
          : (<Message style={{boxShadow: "0 0 10px rgba(0, 0, 0, 0.2)"}} negative size='small'>The event failed, try again. <Icon link name='close' onClick={()=> this.setState({displayMessage: false})}/></Message>)
        }
        </div>): null}

        <ContactList
            failedUpdate={this.failedUpdate}
            url={firstFetchUrl}
            update={this.update}
            activeFilter={this.state.activeItem}
            data={this.state.displayRender}/>
      </div>)
  }
}

export default Home

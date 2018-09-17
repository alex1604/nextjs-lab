import React from 'react'
import Link from 'next/link'
import Head from '../components/head'
import Nav from '../components/nav'
import MainMenu from '../components/MainMenu'
import CreateContactForm from '../components/createContactForm'
import ContactList from '../components/list'

class Home extends React.Component{
  constructor(props){
    super(props);
    this.state={
      initialValue: "initial"
    }
  }
  login = (email) => {
    console.log(email);
  }

  render(){


    return (
      <div>
        <Head title="Home" />
        <MainMenu/>
        <ContactList login={this.login} deleteAction="delete" data={this.props}/>
      </div>)
  }
}
// const Home = (props) => (
//
// )
Home.getInitialProps = async function() {
  const res = await fetch('http://localhost:3000/api/simpleFilter/all')
  const data = await res.json()

  console.log(`Show data fetched. Count: ${data.length}`);
  console.log(data);

  return {
    contact: data
  }
}

// Home.getInitialProps = async function() {
//   const res = await fetch('http://localhost:3000/api/simpleFilter/' + {this.state.filter}).then(function(response){
//     res.json(function(data){
//       const data = data;
//     })
//   }, this.setState({group: {this.state.filter}}))
//   //const data = await res.json()
//
//   console.log(`Show data fetched. Count: ${data.length}`);
//   console.log(data);
//
//   return {
//     contact: data
//   }
// }

export default Home

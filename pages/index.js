import React from 'react'
import Link from 'next/link'
import Head from '../components/head'
import Nav from '../components/nav'
import MainMenu from '../components/MainMenu'
import CreateContactForm from '../components/createContactForm'
// import ContactList from '../components/list'

// const bodyWrapper ={
//   width: "100%",
//   margin: "auto"
// }

const Home = () => (
  <div>
    <Head title="Home" />
    <MainMenu/>
  </div>
)

export default Home

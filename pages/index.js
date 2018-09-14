import React from 'react'
import Link from 'next/link'
import Head from '../components/head'
import Nav from '../components/nav'
import Sidebar from '../components/Sidebar'
import CreateContactForm from '../components/createContactForm'

const sidebar = {
  width: "30%",
  marginRight:"1rem"
}

const bodyWrapper = {
    width: "100%",
    position:"absolute",
    display: "flex",
    justifyContent: "space-between"
}

const mainContent = {
  width:"70%",
  marginLeft:"1rem"
}
const Home = () => (
  <div>
    <Head title="Home" />
    <Sidebar/>
    <CreateContactForm/>
  </div>
)

export default Home

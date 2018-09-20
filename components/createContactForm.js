import React from 'react'
import Head from '../components/head'
import { Form, Button, Header, Icon, Label } from 'semantic-ui-react'
import Link from 'next/link'

const path = require('path');
const defaultimg = path.join(__dirname, "./static/user_images/defaultUser.jpg");
console.log(defaultimg);

const formStyle = {
  backgroundColor: "#f4f4f4",
  borderRadius: "10px",
  width: "80%",
  height: "90%",
  padding: "2rem",
  boxShadow: "0 0 30px rgba(0, 0, 0, 0.2)",
  margin: "auto"
}

class CreateContactForm extends React.Component{
  constructor(props){
    super(props);
    this.state ={
        firstName:'',
        lastName:'',
        phone: '',
        email: '',
        picture: defaultimg,
      }
  }

  saveContact = () => {
      console.log(this.state);
    //TODO callback to save data in json
  }
  render(){

  return(
  <div>
  <Form encType='multipart/form-data' method='post' style={formStyle} action='http://localhost:3000/api/registerNewContact' >
    <Head title="CreateContactForm" />

    <Header as='h2' dividing>
      <Icon name='phone' />
      <Header.Content>
        Add Contact
        <Header.Subheader>Add and save your new contact here</Header.Subheader>
      </Header.Content>
    </Header>

    <Form.Field>
      <label>First name</label>
      <input
        placeholder='Enter name'
        name="firstName"
        value={this.state.firstName}
        onChange={(e) => this.setState({firstName:e.target.value})}/>
    </Form.Field>

    <Form.Field>
      <label>Lastname</label>
      <input
        placeholder='Enter lastname'
        name="lastName"
        value={this.state.lastName}
        onChange={(e) => this.setState({lastName:e.target.value})}/>
    </Form.Field>

    <div style={{margin:"2rem 0 0 0"}}>
      <label
        htmlFor="triggerPhotoInput"
        className="ui icon button">
        <Icon name='upload'/>Upload image
      </label>
      <input
        type="file"
        id="triggerPhotoInput"
        name="userPhoto"
        onChange={(e) => this.setState({picture:e.target.value})}
        style={{display: "none"}}/>
    </div>
    <p style={{margin:"2rem 0 0 0"}}> {this.state.picture}</p>

    <br/>
    <Header as='h3' dividing>
      Contact information
    </Header>
    <br/>

    <Form.Field>
      <label>Phone number</label>
      <input
        placeholder='070 xxxxxx'
        name="phone"
        value={this.state.phone}
        onChange={(e) => this.setState({phone:e.target.value})}/>
    </Form.Field>

    <Form.Field>
      <label>Email</label>
      <input
        placeholder='jon.doe@email.com'
        name="email"
        value={this.state.email}
        onChange={(e) => this.setState({email:e.target.value})}/>
    </Form.Field>

    <Button type='submit' color='green'>Submit</Button>
    <Link href="index">
    <Button basic color='red' onClick={()=> console.log("cancel")}>Cancel</Button>
    </Link>
   </Form>
   </div>
)
}
};
export default CreateContactForm;
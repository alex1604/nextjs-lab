import React from 'react'
import Head from '../components/head'
import { Form, Button, Header, Icon } from 'semantic-ui-react'

const contactWrapperStyle = {
  width: "100%",
  height: "100vh",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  alignContent: "center"

}
const formStyle = {
  backgroundColor: "#f4f4f4",
  borderRadius: "10px",
  width: "80%",
  height: "90%",
  padding: "2rem",
  boxShadow: "0 0 30px rgba(0, 0, 0, 0.2)"
}

class CreateContactForm extends React.Component{
  constructor(props){
    super(props);
    this.state ={
        firstName:'',
        lastName:'',
        phone: '',
        email: '',
        picture:'',
      }
  }


  saveContact = () => {
      console.log(this.state);
    //TODO callback to save data in json
  }
  render(){

  return(
  <div style={contactWrapperStyle}>
  <Form style={formStyle} >
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

    <Button type='submit' color='green' onClick={this.saveContact}>Submit</Button>
    <Button basic color='red' onClick={()=> console.log("cancel")}>Cancel</Button>
   </Form>
   </div>
 )
}
};
export default CreateContactForm;

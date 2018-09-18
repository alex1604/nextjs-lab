import React from 'react'
import Head from '../components/head'
import { Button, Icon, Image, Item, Form, Label, Modal } from 'semantic-ui-react'
import Link from 'next/link'

const listWrapper = {
  backgroundColor: "#f4f4f4",
  borderRadius: "10px",
  width: "80%",
  height: "90%",
  padding: "2rem",
  boxShadow: "0 0 30px rgba(0, 0, 0, 0.2)",
  margin: "auto"
}

class EditContact extends React.Component {
  constructor(props){
    super(props)
    this.state={
      editFirstName:'',
      editLastName:'',
      editPhone:'',
      editEmail:'',
    }
  }
  sendEditContact = event =>{
    console.log(this.state);
  }

  render(){
    return (
      <Item key={this.props.contact.id}>
      <Item.Image src={this.props.contact.picture} />
      <Form>
      <Item.Content>
        <Item.Header >
        <Form.Field>
          <input type="text"
            placeholder={this.props.contact.firstName}
            onChange={event => this.setState({editFirstName: event.target.value}) } />
        </Form.Field>
        <Form.Field>
          <input type="text"
            placeholder={this.props.contact.lastName}
            onChange={event => this.setState({editLastName: event.target.value}) }/>
        </Form.Field>
        <Form.Field>
          <input type="text"
            placeholder={this.props.contact.phone}
            onChange={event => this.setState({editPhone: event.target.value}) }/>
        </Form.Field>
        <input type="text"
          placeholder={this.props.contact.email}
          onChange={event => this.setState({editEmail: event.target.value}) }/>
        </Item.Header>
        <Item.Meta>
        <span className='cinema'>{this.props.contact.group}</span>
      </Item.Meta>
      <Item.Extra>
      <Button onClick={this.sendEditContact} color="green" floated='right' icon labelPosition='left'>
        Save
        <Icon name='save' />
      </Button>
      <Button className="ui negative basic button" floated='right' icon labelPosition='left'>
        Cancel
      <Icon name='cancel' />
      </Button>
      </Item.Extra>
      </Item.Content>
      </Form>
      </Item>


	   )
  }
}

export default EditContact;

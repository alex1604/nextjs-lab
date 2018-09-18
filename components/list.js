import React, {Component} from 'react'
import Head from '../components/head'
import MainMenu from '../components/MainMenu'
import { Button, Icon, Image, Item, Label, Modal } from 'semantic-ui-react'
import 'isomorphic-unfetch'
import EditContact from './EditContact.js'

const paragraph = <Image src='https://react.semantic-ui.com/images/wireframe/short-paragraph.png' />
const listWrapper = {
  width: "80%",
  backgroundColor: "#f4f4f4",
  borderRadius: "10px",
  padding: '2rem',
  margin: "auto"
}

class ContactList extends Component{
  constructor(props) {
    super(props)
}
  state = { open: false, selectedContact: "", }
    open = () => this.setState({open: true })
    close = () => this.setState({ open: false })

    selectContact = contactId => {
		this.setState({ selectedContact: contactId });
    console.log(contactId);
  }
    cancelEdit = () => {
      this.setState({selectedContact: ""});
    }
  // deleteItem = (id) => {
  //
  //   let res = await fetch( this.props.url +"/api?mode=deleteItem&id="+id)
  //   if(res.??) ta bort element från state    state.items.filter
  // }

    // changeContact = (contact, newContactInfo)=> {
    //   console.log(newContactInfo);
    // }
  render(){
    const {open} = this.state;
    const list = this.props.data.map(contact => {
      if(this.state.selectedContact === contact){
        return (
            <EditContact cancel={this.cancelEdit} contact={contact} handleChange={this.changeContact} key={contact.id}/>
        )
      }else{

        return(
          <Item key={contact.id}>
          <Item.Image src={contact.picture ? contact.picture: "/static/user_images/defaultUser.jpg"} />
          <Item.Content>
            <Item.Header>{contact.firstName} {contact.lastName}</Item.Header>
            <Item.Meta>
            <span className='cinema'>{contact.group}</span>
          </Item.Meta>
          <Item.Description>
            {contact.phone}
            <br/>
            {contact.email}
          </Item.Description>
          <Item.Extra>
          <Button color="green" onClick={event=>this.selectContact(contact)} floated='right' icon labelPosition='left'>
            Edit
            <Icon name='edit' />
          </Button>
          <Button onClick={this.open} color="red" floated='right' icon labelPosition='left'>
          Delete
          <Icon name='trash alternate outline' />
          </Button>
          </Item.Extra>
          </Item.Content>
          </Item>

        )
      }
    })
    // console.log("props ", this.props.deleteAction);
    return (
      <div>
        <Head title="ContactList" />
        <div style={listWrapper}>
          <Item.Group divided >
            {list}
          </Item.Group>
        </div>

      <Modal size="tiny" open={open} onClose={this.close}>
              <Modal.Header>Delete Contact</Modal.Header>
              <Modal.Content>
                <p>Are you sure you want to delete this contact</p>
              </Modal.Content>
              <Modal.Actions>
                <Button onClick={this.close}  negative>No</Button>
                <Button positive icon='checkmark' labelPosition='right' content='Yes' />
              </Modal.Actions>
            </Modal>
      </div>)
    }
}
// ContactList.getInitialProps = async function() {
//   const res = await fetch('http://localhost:3000/api/simpleFilter/all')
//   const data = await res.json()
//
//   console.log(`Show data fetched. Count: ${data.length}`);
//   console.log(data);
//
//   return {
//     contact: data
//   }
// }

export default ContactList

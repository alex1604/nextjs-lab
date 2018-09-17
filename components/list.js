import React, {Component} from 'react'
import Head from '../components/head'
import MainMenu from '../components/MainMenu'
import { Button, Icon, Image, Item, Label, Modal } from 'semantic-ui-react'
import 'isomorphic-unfetch'

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

  state = { open: false }
    open = () => this.setState({open: true })
    close = () => this.setState({ open: false })

  render(){
    const {open} = this.state
    // console.log("props ", this.props.deleteAction);
    return (<div>
      <Head title="ContactList" />
      <div style={listWrapper}>
      <Item.Group divided >
      {this.props.data.contact.map(contact => (
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
            <Button color="green" floated='right' icon labelPosition='left'>
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

        ))}
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

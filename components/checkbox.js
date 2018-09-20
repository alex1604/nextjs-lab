import React, { Component } from 'react'
import { Form, Checkbox } from 'semantic-ui-react'

export default class CheckboxRadioGroup extends Component {
  state = {value: 'friends'}
  handleChange = (e, value ) => {
    this.setState(value);
    this.props.chooseGroup( value );
  }
  render() {
    return (
      <div>
        <Form.Field>
          Selected group: <b>{this.state.value}</b>
        </Form.Field>
        <Form.Field>
          <Checkbox
            radio
            label='family'
            name='group'
            value='family'
            checked={this.state.value === 'family'}
            onChange={this.handleChange}
          />
        </Form.Field>
        <Form.Field>
          <Checkbox
            radio
            checked={this.state.value === 'friends'}
            label='friends'
            name='group'
            value='friends'
            onChange={this.handleChange}
          />
        </Form.Field>
      </div>
    )
  }
}

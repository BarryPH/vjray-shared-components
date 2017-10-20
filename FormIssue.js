import React from 'react';
import PropTypes from 'prop-types';
import FormContainer from './FormContainer';
import {
  Form,
  Input,
  Select,
  Textarea,
  FormGroup,
  FormGroupHeadline,
} from './Form';


class FormIssue extends React.Component {
  constructor(props) {
    super(props);
  }

  async submit(model) {
    const response = await fetch('https://formspree.io/xgaewyjx', {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(model),
    });
  }

  render() {
    return (
      <FormContainer submit={this.submit} brand={this.props.brand}>
        <FormGroup>
          <FormGroupHeadline>Your details (Required)</FormGroupHeadline>
          <Input
            placeholder='Your name*'
            name='name'
            required
          />
          <Input
            placeholder='Your email*'
            name='email'
            validations={{
              isEmail: true
            }}
            validationErrors={{
              isEmail: 'Not a valid email'
            }}
            required
          />
          <Input
            placeholder='Your phone number*'
            name='phoneNumber'
            validations='isExisty'
            required
          />
          <Textarea
            placeholder='Please describe your issue…'
            name='comments'
            rows='7'
          />

          {/* Formspree filters */}
          <input type="text" name="_gotcha" style={{ display: 'none' }} />
          <input type="hidden" name="_subject" value="Strata website issue submission" />
        </FormGroup>
      </FormContainer>
    );
  }
}

FormIssue.propTypes = {
  brand: PropTypes.bool,
};

FormIssue.defaultProps = {
  brand: false,
};

export default FormIssue;

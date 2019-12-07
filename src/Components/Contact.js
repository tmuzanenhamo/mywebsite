import React, { Component } from 'react';
import * as emailjs from 'emailjs-com';
import { Button, FormFeedback, Form, FormGroup, Label, Input } from 'reactstrap';
import myFace from '../Images/image22.jpg'

class Contact extends Component {

    state = {

        name: '',
        subject: '',
        email: '',
        message: ''


    }

    onChange = (e) => this.setState( {

        [e.target.name]: e.target.value
    });

    onSubmit = (e) => {

        e.preventDefault();

        const { name, email, subject, message } = this.state
        let templateParams = {
            from_name: email,
            to_name: 'tawasdev@gmail.com',
            subject: subject,
            message_html: message,
           }

           emailjs.send(
            'gmail',
            'template_pryDoQAO',
             templateParams,
            'user_Oj5ZGLSxIsYM8WagnxPBt'
           )

           this.resetForm()
        
    };

    resetForm() {
        this.setState({
          name: '',
          email: '',
          subject: '',
          message: '',
        })
      }
  render() {

    const {name, subject, email, message} = this.state;
    return (

    <div class="wine-row">
        <div class="wine-text-container">
        <h1 className="p-heading1">Get in Touch</h1>
          <Form onSubmit={this.onSubmit}>
            <FormGroup controlId="formBasicEmail">
              <Label className="text-muted">Email address</Label>
              <Input
                type="email"
                name="email"
                value={email}
                className="text-primary"
                onChange={this.onChange}
                placeholder="Enter email"
              />
            </FormGroup>
<FormGroup controlId="formBasicName">
              <Label className="text-muted">Name</Label>
              <Input
                type="text"
                name="name"
                value={name}
                className="text-primary"
                onChange={this.onChange}
                placeholder="Name"
              />
            </FormGroup>
<FormGroup controlId="formBasicSubject">
              <Label className="text-muted">Subject</Label>
              <Input
                type="text"
                name="subject"
                className="text-primary"
                value={subject}
                onChange={this.onChange}
                placeholder="Subject"
              />
            </FormGroup>
<FormGroup controlId="formBasicMessage">
              <Label className="text-muted">Message</Label>
              <Input
                type="textarea"
                name="message"
                className="text-primary"
                value={message}
                onChange={this.onChange}
              />
            </FormGroup>
<Button variant="primary" type="submit">
              Submit
            </Button>
          </Form>
      </div>
      </div>
    );
  }
}
export default Contact;

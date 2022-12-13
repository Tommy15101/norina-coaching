import React from "react";
import {
  ContactContainer,
  ContactDisplay,
  ContactTitle,
  ContactLinks,
  FormContainer,
  Form,
  FormGroup,
} from "./ContactStyles";

const Contact = () => {
  return (
    <ContactContainer id="contact">
      <ContactDisplay>
        <ContactTitle>
          <h3>I would love to connect with you.</h3>
        </ContactTitle>
        <FormContainer>
          <Form>
            <FormGroup>
              <label htmlFor="name">Name</label>
              <input type="text" id="name" placeholder=". . ." />
            </FormGroup>
            <FormGroup>
              <label htmlFor="email">Email</label>
              <input type="email" id="email" placeholder=". . ." />
            </FormGroup>

            <FormGroup>
              <label htmlFor="message">Message</label>
              <textarea
                id="message"
                rows="5"
                placeholder="Leave a message. . ."
              />
            </FormGroup>
          </Form>
        </FormContainer>
        <ContactLinks></ContactLinks>
      </ContactDisplay>
    </ContactContainer>
  );
};

export default Contact;

import React, { useState } from "react";
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
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    setName("");
    setEmail("");
    setMessage("");

    window.alert("Email Sent");
  };

  return (
    <ContactContainer id="contact">
      <ContactDisplay>
        <ContactTitle>
          <h3>I would love to connect with you.</h3>
        </ContactTitle>
        <FormContainer>
          <Form
            onSubmit={handleSubmit}
            action="mailto:norina.bramke@gmail.com"
            method="get"
          >
            <FormGroup>
              <label htmlFor="name">Name</label>
              <input
                type="text"
                id="name"
                name="name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="Name"
              />
            </FormGroup>
            <FormGroup>
              <label htmlFor="email">Email</label>
              <input
                type="email"
                id="email"
                name="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Email"
              />
            </FormGroup>

            <FormGroup>
              <label htmlFor="message">Message</label>
              <textarea
                type="text"
                id="message"
                name="message"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                rows="5"
                placeholder="Message"
              />
            </FormGroup>
            <button type="submit">Send</button>
          </Form>
        </FormContainer>
        <ContactLinks></ContactLinks>
      </ContactDisplay>
    </ContactContainer>
  );
};

export default Contact;

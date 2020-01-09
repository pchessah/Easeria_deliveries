import React from "react";
import { Button, Form, FormGroup, Label, Input, FormText } from "reactstrap";

function Contact() {
  return (
    <div>
      <Form>
        <FormGroup>
          <Label for="exampleEmail">Email</Label>
          <Input
            type="email"
            name="email"
            id="exampleEmail"
            placeholder="with a placeholder"
          />
        </FormGroup>  
       
        <FormGroup>
          <Label for="exampleText">Message</Label>
          <Input type="textarea" name="text" id="exampleText" />
        </FormGroup>
        
        <Button>Submit Message </Button>
      </Form>
    </div>
  );
}

export default Contact;

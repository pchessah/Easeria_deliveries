import React from "react";
import { Button, Form, FormGroup, Label, Input, FormText } from "reactstrap";

const Example = props => {
  return (
    <div className="product-form-container">
<Form className="productForm">
      <FormGroup>
        <Label for="productName">Name</Label>
        <Input
          type="text"
          name="productName"
          id="productName"
          placeholder="Enter Product Name"
        />
      </FormGroup>

      <FormGroup>
        <Label for="productPrice">Price</Label>
        <Input
          type="number"
          name="productPrice"
          id="productPrice"
          placeholder="Enter Product Price"
        />
      </FormGroup>

      <FormGroup>
        <Label for="category">Select Category</Label>
        <Input type="select" name="category" id="category">
          <option>Food</option>
          <option>Clothes</option>
          <option>Others</option>
        </Input>
      </FormGroup>

      <FormGroup>
        <Label for="description">Enter Description </Label>
        <Input type="textarea" name="description" id="description" />
      </FormGroup>

      <FormGroup>
        <Label for="image">Upload product image</Label>
        <Input type="file" name="image" id="image" />
        <FormText color="muted">Upload product image with size</FormText>
      </FormGroup>

      <Button type="submit">Submit</Button>
    </Form>
    </div>
    
  );
};

export default Example;

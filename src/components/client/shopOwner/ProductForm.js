import React, { useState } from "react";
import { Button, Form, FormGroup, Label, Input, FormText } from "reactstrap";
import axios from "axios";

const Example = props => {
  const [inputs, setInputs] = useState();
  const [files, setFiles] = useState();
  const [response, setResponse] = useState();

  const handleChange = e => {
    const { name, value, files } = e.target;
    setInputs({ ...inputs, [name]: value, image:files[0] });
  };
  const handleSubmit = async () => {
    const addProduct = await axios.post("/addproduct", { ...inputs, ...files });
    setResponse(addProduct.data);
  };
  console.log(inputs);
  return (
    <div className="product-form-container">
      <Form className="productForm" onSubmit={handleSubmit} encType="multipart/form-data">
        <FormGroup>
          <Label for="productName">Name</Label>
          <Input
            type="text"
            name="productName"
            id="productName"
            placeholder="Enter Product Name"
            onChange={handleChange}
          />
        </FormGroup>

        <FormGroup>
          <Label for="productPrice">Price</Label>
          <Input
            type="number"
            name="productPrice"
            id="productPrice"
            placeholder="Enter Product Price"
            onChange={handleChange}
          />
        </FormGroup>

        <FormGroup>
          <Label for="category">Select Category</Label>
          <Input
            type="select"
            name="category"
            id="category"
            onChange={handleChange}
          >
            <option>Choose Option</option>
            <option>Food</option>
            <option>Clothes</option>
            <option>Others</option>
          </Input>
        </FormGroup>

        <FormGroup>
          <Label for="description">Enter Description </Label>
          <Input
            type="textarea"
            name="description"
            id="description"
            onChange={handleChange}
          />
        </FormGroup>

        <FormGroup>
          <Label for="image">Upload product image</Label>
          <Input
            type="file"
            name="image"
            id="image"
            onChange={handleChange}
          />
          <FormText color="muted">Upload product image with size</FormText>
        </FormGroup>

        <Button type="submit">
          Submit
        </Button>
      </Form>
    </div>
  );
};

export default Example;

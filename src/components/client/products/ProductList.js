import React from "react";
import { Table } from "reactstrap";

function ProductList(props) {
  return (
    <div>
      <Table hover>
        <thead>
          <tr>
            <th> </th>
            <th>Product Name</th>
            <th>Description</th>
            <th>Category</th>
            <th>Price</th>
            <th>image</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <th scope="row">1</th>
            <td>Rice</td>
            <td>2kg</td>
            <td>Food</td>
            <td>Ksh 210</td>
            <td>rice.jepg</td>
          </tr>
          <tr>
            <th scope="row">2</th>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
          </tr>
          <tr>
            <th scope="row">3</th>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
          </tr>
        </tbody>
      </Table>
    </div>
  );
}

export default ProductList;

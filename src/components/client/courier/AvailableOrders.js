import React from "react";
import { Table } from "reactstrap";

function AvailableOrders(props) {
  return (
    <div>
      <Table striped>
        <thead>
          <tr>
            <th>#</th>
            <th>First Name</th>
            <th>Last Name</th>
            <th>Delivery Location</th>
            <th>Nearest Building</th>
            <th>Order Number</th>
            <th>Take Order</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <th scope="row">1</th>
            <td>Customer</td>
            <td>Mail</td>
            <td>Lolwe Estate</td>
            <td>Mama Lynn</td>
            <td>#2001539</td>
            <td><a href="#"><button>Accept Order</button></a></td>
          </tr>
          <tr>
            <th scope="row">2</th>
            <td>Paul</td>
            <td>Chesa</td>
            <td>Milimani</td>
            <td>Lakehub</td>
            <td>#210578</td>           
            <td><a href="#"><button>Accept Order</button></a></td>
          </tr>
          
        </tbody>
      </Table>
    </div>
  );
}

export default AvailableOrders;

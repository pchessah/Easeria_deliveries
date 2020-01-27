import React from "react";
import { Table } from "reactstrap";

function CourierList() {
  return (
    <div>
        <h2> Available Couriers </h2>
      <Table hover>
        <thead>
          <tr>
            <th>#</th>
            <th>Name</th>
            <th>Location</th>
            <th>Availability</th>
            <th>Destination</th>
            <th>Contact Courier</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <th scope="row">1</th>
            <td>Mark</td>
            <td>Milimani</td>
            <td>Yes</td>
            <td><input type="text"/></td>            
            <td><a href="/app/contactCourier"><button>Contact Me</button></a></td>
          </tr>
          <tr>
          <th scope="row">2</th>
            <td>Chris</td>
            <td>Town</td>
            <td>Yes</td>
            <td><input type="text"/></td> 
            <td><a href="/app/contactCourier"><button>Contact Me</button></a></td>
          </tr>
          <tr>
          <th scope="row">3</th>
            <td>Paul</td>
            <td>Lolwe</td>
            <td>Yes</td>
            <td><input type="text"/></td> 
            <td><a href="/app/contactCourier"><button>Contact Me</button></a></td>
          </tr>
          <tr>
          <th scope="row">3</th>
            <td>Ashley</td>
            <td>Nyalenda</td>
            <td>No</td>
            <td><input type="text"/></td> 
            <td><a href="/app/contactCourier"><button>Contact Me</button></a></td>
          </tr>
        </tbody>
      </Table>
    </div>
  );
}

export default CourierList;

// import React from 'react'

// function Aboutus() {
//     return (
//         <div>
//             This is the about us page
//         </div>
//     )
// }

// export default Aboutus

import React from 'react';
import { Jumbotron, Button, CardImg } from 'reactstrap';

const Example = (props) => {
  return (
    <div>
      <Jumbotron>
        <h3 className="display-3" align="centre">Easeria Deliveries </h3>
        <CardImg
          style={{ width: "25%"}}
          top
          width="50%"
          src="https://images.pexels.com/photos/264771/pexels-photo-264771.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
          alt="Card image cap"
        />
        <p className="lead"> A great platform to order food, drinks and other products</p>
        <hr className="my-2" />
        <p>Get access to the best food, drinks and other products from your favorite local establishments at your place of convenience and affordable prices.</p>
        <p>Easeria Deliveries allows shop owners to reach out to new and a wide range of customers while getting increased profits in a larger market.</p>
        <p>The platform also allows for couriers to get extra income delivering goods from shops and be your own boss in a flexible schedule of earning money!</p>
        <p> For more information contact below: </p>
        <p className="lead">
          <Button color="primary">contact us</Button>
        </p>        
      </Jumbotron>
    </div>
  );
};

export default Example;





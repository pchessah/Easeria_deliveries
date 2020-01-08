import React from 'react';
import { UncontrolledCarousel } from 'reactstrap';

const items = [
  {
    src:
      'https://images.pexels.com/photos/616404/pexels-photo-616404.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
    altText: 'Slide 1',
    caption: 'Get your goods fast!',
    header: 'Easeria Deliveries',
    key: '1',
  },
  {
    src:
      'https://images.pexels.com/photos/2159065/pexels-photo-2159065.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
    altText: 'Slide 2',
    caption: '',
    header: 'Affordable prices',
    key: '2',
  },
  {
    src:
      'https://images.pexels.com/photos/264636/pexels-photo-264636.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
    altText: 'Slide 3',
    caption: 'Great customer experience',
    header: 'Trusted Vendors',
    key: '3',
  },
];
const Example = (props) => (
  <div>
    <UncontrolledCarousel
      className="homeCarousel"
      style={{ height: '40vh' }}
      items={items}
    />
    <div className="row">
      <a
        href="/food"
        className="col-md-3 categories category_left tint"
        style={{
          background:
              'url(https://images.pexels.com/photos/262959/pexels-photo-262959.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500)',
        }}
      >
        <div align="center">
          <h3>Food</h3>
        </div>
      </a>
      <a
        href="/drink"
        className="col-md-3 categories tint"
        style={{
          background:
              'url(https://images.pexels.com/photos/605408/pexels-photo-605408.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500)',
        }}
      >
        <div align="center">
          <h3>Drinks</h3>
        </div>
      </a>
      <a
        href="/others"
        className="col-md-3 categories tint"
        style={{
          background:
              'url(https://images.pexels.com/photos/322207/pexels-photo-322207.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500)',
        }}
      >
        <div align="center">
          <h3>Others</h3>
        </div>
      </a>
    </div>
  </div>
);

export default Example;

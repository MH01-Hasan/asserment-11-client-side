import React from 'react';
import { Carousel } from 'react-bootstrap';
import './Banner.css'
import image1 from '../../image/image-3.jpg'
import image2 from '../../image/image4.jpg'
import image3 from '../../image/image5.jpg'

const Banner = () => {
    return (
        <div className=''>
    <Carousel variant="dark">
  <Carousel.Item>
    <img
      className="d-block w-100 img-fluid  image-fild"
      src={image1}
      alt=""
    />
    <Carousel.Caption>
      <h5>First slide label</h5>
      <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100 img-fluid image-fild"
      src={image2}
      alt=""
    />
    <Carousel.Caption>
      <h5>Second slide label</h5>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100 img-fluid image-fild"
      src={image3}
      alt=""
    />
    <Carousel.Caption>
      <h5>Third slide label</h5>
      <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
    </Carousel.Caption>
  </Carousel.Item>
</Carousel>
            
        </div>
    );
};

export default Banner;
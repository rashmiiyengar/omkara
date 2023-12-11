import React from 'react';
import { Carousel } from 'react-bootstrap';


const Vedio =()=> {
  return (
    <Carousel>
      <Carousel.Item interval={1000}>
       <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQK7r-mWEJvx0Uf7_cqMDkNeJ5Keos7YhNNG-txAzcpZdkQMRUHZeyjrM7krwkqzD8FSLE&usqp=CAU' alt='img'/>
        <Carousel.Caption>
          <h3>First slide label</h3>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item interval={500}>
      <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQK7r-mWEJvx0Uf7_cqMDkNeJ5Keos7YhNNG-txAzcpZdkQMRUHZeyjrM7krwkqzD8FSLE&usqp=CAU' alt='img'/>
        <Carousel.Caption>
          <h3>Second slide label</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
      <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQK7r-mWEJvx0Uf7_cqMDkNeJ5Keos7YhNNG-txAzcpZdkQMRUHZeyjrM7krwkqzD8FSLE&usqp=CAU' alt='img'/>
        <Carousel.Caption>
          <h3>Third slide label</h3>
          <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}

export default Vedio;
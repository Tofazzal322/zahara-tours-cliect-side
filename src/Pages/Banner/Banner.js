import React from 'react';
import { Carousel } from 'react-bootstrap';
import bannerImg1 from "../../Images/banner1.jpg"
import bannerImg2 from "../../Images/banner2.jpg"
import bannerImg3 from "../../Images/banner3.jpg"

const Banner = () => {
    return (
      <Carousel id="banner" variant="dark" fade>
        <Carousel.Item>
          <img className="d-block w-100" src={bannerImg1} alt="First slide"  />
          <Carousel.Caption className="mb-5 pb-5 carousel-caption text-light  fw-bold">
            <h3 className="fw-bold fs-1">EXPERIENCE OMAN WITH ZAHARA TOURS</h3>
            <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img className="d-block w-100" src={bannerImg2} alt="Second slide" />
          <Carousel.Caption className="mb-5 pb-5 carousel-caption text-light fw-bold">
            <h3 className="fw-bold  fs-1">EXPERIENCE OMAN WITH ZAHARA TOURS</h3>
            <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img className="d-block  w-100" src={bannerImg3} alt="Third slide" />
          <Carousel.Caption className="mb-5 pb-5 carousel-caption text-light fw-bold">
            <h3 className="fw-bold fs-1">EXPERIENCE OMAN WITH ZAHARA TOURS</h3>
            <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    );
};

export default Banner;
import React from 'react';
import { Carousel } from 'react-bootstrap';
import bannerImg1 from "../../Images/banner1.jpg"
import bannerImg2 from "../../Images/banner2.jpg"
import bannerImg3 from "../../Images/banner3.jpg"

const Banner = () => {
    return (
      <Carousel id="banner" variant="dark" fade>
        <Carousel.Item>
          {/* <h2> text</h2> */}
          <img className="d-block w-100"  src={bannerImg1} alt="First slide" />
        </Carousel.Item>
        <Carousel.Item>
          <img className="d-block w-100" src={bannerImg2} alt="Second slide" />
        </Carousel.Item>
        <Carousel.Item>
          <img className="d-block w-100" src={bannerImg3} alt="Third slide" />
        </Carousel.Item>
      </Carousel>
    );
};

export default Banner;
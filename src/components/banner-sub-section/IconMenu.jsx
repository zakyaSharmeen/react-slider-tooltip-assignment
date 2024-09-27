import React from 'react'
import { FaUser } from "react-icons/fa";

import Slider from 'react-slick';

function IconMenu() {
  const settings = {
    dots: false,
    arrows: false,
    infinite: true,
    speed: 3000,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000,
  };

  return (
    <>
     

      {/* <Slider {...settings}>
        <div>
          <div class="icon">
            <div className="sub-content">

              <div className='user-icon'>
                <FaUser />
              </div>
              <p>Global Marketing</p>
            </div>
          </div>
        </div>
        <div>
          <div class="icon">
            <div className="sub-content">

              <div className='user-icon'>
                <FaUser />
              </div>
              <p>Global Marketing</p>
            </div>
          </div>
        </div>
        <div>
          <div class="icon">
            <div className="sub-content">

              <div className='user-icon'>
                <FaUser />
              </div>
              <p>Global Marketing</p>
            </div>
          </div>
        </div>
        <div>
          <div class="icon">
            <div className="sub-content">

              <div className='user-icon'>
                <FaUser />
              </div>
              <p>Global Marketing</p>
            </div>
          </div>
        </div>
        <div>
          <div class="icon">
            <div className="sub-content">

              <div className='user-icon'>
                <FaUser />
              </div>
              <p>Global Marketing</p>
            </div>
          </div>
        </div>
      </Slider> */}



      <div className="icon-menu-content"  data-aos-duration="1500" data-aos-delay="300">
      <Slider {...settings}>
        <div>
          <div class="icon" data-aos="fade-in">
            <div className="sub-content">

              <div className='user-icon'>
                <FaUser />
              </div>
              <p>Global Marketing</p>
            </div>
          </div>
        </div>
        <div>
          <div class="icon"  data-aos="fade-in">
            <div className="sub-content">

              <div className='user-icon'>
                <FaUser />
              </div>
              <p>Global Marketing</p>
            </div>
          </div>
        </div>
        <div>
          <div class="icon"  data-aos="fade-in">
            <div className="sub-content">

              <div className='user-icon'>
                <FaUser />
              </div>
              <p>Global Marketing</p>
            </div>
          </div>
        </div>
        <div>
          <div class="icon"  data-aos="fade-in">
            <div className="sub-content">

              <div className='user-icon'>
                <FaUser />
              </div>
              <p>Global Marketing</p>
            </div>
          </div>
        </div>
        <div>
          <div class="icon"   data-aos="fade-in">
            <div className="sub-content">

              <div className='user-icon'>
                <FaUser />
              </div>
              <p>Global Marketing</p>
            </div>
          </div>
        </div>
      </Slider>
      </div>







    </>
  )
}

export default IconMenu
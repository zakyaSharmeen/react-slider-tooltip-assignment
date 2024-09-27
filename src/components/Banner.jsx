import React from 'react'
import  { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

import IconMenu from './banner-sub-section/IconMenu'
import Slider from './banner-sub-section/Slider';

function Banner() {
  useEffect(() => {
    AOS.init({
        duration: 1500,  
        once: true      
    });
}, []);
  return (
    <>
      <div className="main-banner-container">
        <div class="container">
          <div className='banner-flex-1'>
            <div className='banner-header'>
              <div class="header">
                <div className='lorem'>
                <p data-aos="fade-in-up"  data-aos-duration="1500" data-aos-delay="300">lorem ipsum</p>
                </div>
                <h1 data-aos="fade-in-up" data-aos-duration="500">Full-time, Part-time,<br /> Every-time Looking for Top Talent?</h1>
                
                <p data-aos="fade-up" data-aos-duration="500">Hire exceptional foreign professionals <br /> with ease within a week! Lorem ipsum dolor sit amet</p>
                <p data-aos="fade-left">Lorem ipsum dolor sit amet</p>
              </div>

              <div class="stats">
                <div className='box-1 margin' data-aos="fade-in" data-aos-duration="1500">
                <h3>Up to 3 Interviews</h3>
                <p>Make a decision without pressure. Be prepared for it</p>
                </div>
                <div className='box-1' data-aos="fade-in" data-aos-duration="1500">
                <h3>Up to 3 Interviews</h3>
                <p>Make a decision without pressure. Be prepared for it</p>
                </div>
                <div className='box-1' data-aos="fade-in" data-aos-duration="1500">
                <h3>Up to 3 Interviews</h3>
                <p>Make a decision without pressure. Be prepared for it</p>
                </div>
              </div>
            </div>

            <div class="cards-container">
             
              {/* <Practice/> */}
              <Slider/>
            </div>
          </div>



          {/* ///////////////// */}
          <div class="icon-menu">
          

            <IconMenu/>
          </div>
        </div>
      </div>


    </>
  )
}

export default Banner
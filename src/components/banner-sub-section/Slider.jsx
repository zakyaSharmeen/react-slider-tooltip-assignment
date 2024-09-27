import React from 'react';
import { Tooltip } from 'react-tooltip';
import 'react-tooltip/dist/react-tooltip.css';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';


// Import Swiper styles
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/navigation';


// import required modules
import { EffectCoverflow, Pagination, Navigation } from 'swiper/modules';

export default function App() {
    return (
        <>


            <Swiper
                effect={'coverflow'}
                grabCursor={true}
                centeredSlides={true}
                slidesPerView={'2'}
                coverflowEffect={{
                    rotate: 0,
                    stretch: 3,
                    depth: 100,
                    modifier: 8.5,
                    slideShadows: true,
                 
                }}
                pagination={false}
                navigation={true}

                modules={[EffectCoverflow, Pagination, Navigation]}
                className="mySwiper"
            >
                <SwiperSlide >
                    <div data-tooltip-id="my-tooltip" data-tooltip-content="This is a tooltip!">
                        <Tooltip id="my-tooltip" 
                            style={{ backgroundColor: 'white', color: '#000' }} />
                        <div classNameName='card-inside-content'>
                            <img src="auth.jpg" alt="Abhishek Gupta" />
                            <h2 >Abhishek Gupta</h2>



                            <span classNameName='marketing'>Marketing | 2+ years</span>
                            <p className='margin-top'>Content Creation</p>
                            <p>Social Media, Blog Writing</p>
                            <div classNameName='card-lorem-flex'>
                                <p>loremipsum</p>
                                <p>loremipsum</p>
                            </div>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide >
                    <div data-tooltip-id="my-tooltip" data-tooltip-content="This is a tooltip!">
                        <Tooltip id="my-tooltip" style={{ backgroundColor: 'white', color: '#000', marginBottom: "40px" }} />
                        <div classNameName='card-inside-content'>
                            <img src="auth.jpg" alt="Abhishek Gupta" />
                            <h2 >Abhishek Gupta</h2>



                            <span classNameName='marketing'>Marketing | 2+ years</span>
                            <p className='margin-top'>Content Creation</p>
                            <p>Social Media, Blog Writing</p>
                            <div classNameName='card-lorem-flex'>
                                <p>loremipsum</p>
                                <p>loremipsum</p>
                            </div>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide >
                    <div data-tooltip-id="my-tooltip" data-tooltip-content="This is a tooltip!">
                        <Tooltip id="my-tooltip" style={{ backgroundColor: 'white', color: '#000', marginBottom: "40px" }} />
                        <div classNameName='card-inside-content'>
                            <img src="auth.jpg" alt="Abhishek Gupta" />
                            <h2 >Abhishek Gupta</h2>



                            <span classNameName='marketing'>Marketing | 2+ years</span>
                            <p className='margin-top'>Content Creation</p>
                            <p>Social Media, Blog Writing</p>
                            <div classNameName='card-lorem-flex'>
                                <p>loremipsum</p>
                                <p>loremipsum</p>
                            </div>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide >
                    <div data-tooltip-id="my-tooltip" data-tooltip-content="This is a tooltip!">
                        <Tooltip id="my-tooltip" style={{ backgroundColor: 'white', color: '#000', marginBottom: "40px" }} />
                        <div classNameName='card-inside-content'>
                            <img src="auth.jpg" alt="Abhishek Gupta" />
                            <h2 >Abhishek Gupta</h2>



                            <span classNameName='marketing'>Marketing | 2+ years</span>
                            <p className='margin-top'>Content Creation</p>
                            <p>Social Media, Blog Writing</p>
                            <div classNameName='card-lorem-flex'>
                                <p>loremipsum</p>
                                <p>loremipsum</p>
                            </div>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide >
                    <div data-tooltip-id="my-tooltip" data-tooltip-content="This is a tooltip!">
                        <Tooltip id="my-tooltip" style={{ backgroundColor: 'white', color: '#000', marginBottom: "40px" }} />
                        <div classNameName='card-inside-content'>
                            <img src="auth.jpg" alt="Abhishek Gupta" />
                            <h2 >Abhishek Gupta</h2>



                            <span classNameName='marketing'>Marketing | 2+ years</span>
                            <p className='margin-top'>Content Creation</p>
                            <p>Social Media, Blog Writing</p>
                            <div classNameName='card-lorem-flex'>
                                <p>loremipsum</p>
                                <p>loremipsum</p>
                            </div>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide >
                    <div data-tooltip-id="my-tooltip" data-tooltip-content="This is a tooltip!">
                        <Tooltip id="my-tooltip" style={{ backgroundColor: 'white', color: '#000', marginBottom: "40px" }} />
                        <div classNameName='card-inside-content'>
                            <img src="auth.jpg" alt="Abhishek Gupta" />
                            <h2 >Abhishek Gupta</h2>



                            <span classNameName='marketing'>Marketing | 2+ years</span>
                            <p className='margin-top'>Content Creation</p>
                            <p>Social Media, Blog Writing</p>
                            <div classNameName='card-lorem-flex'>
                                <p>loremipsum</p>
                                <p>loremipsum</p>
                            </div>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide >
                    <div data-tooltip-id="my-tooltip" data-tooltip-content="This is a tooltip!">
                        <Tooltip id="my-tooltip" style={{ backgroundColor: 'white', color: '#000', marginBottom: "40px" }} />
                        <div classNameName='card-inside-content'>
                            <img src="auth.jpg" alt="Abhishek Gupta" />
                            <h2 >Abhishek Gupta</h2>



                            <span classNameName='marketing'>Marketing | 2+ years</span>
                            <p className='margin-top'>Content Creation</p>
                            <p>Social Media, Blog Writing</p>
                            <div classNameName='card-lorem-flex'>
                                <p>loremipsum</p>
                                <p>loremipsum</p>
                            </div>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide >
                    <div data-tooltip-id="my-tooltip" data-tooltip-content="This is a tooltip!">
                        <Tooltip id="my-tooltip" style={{ backgroundColor: 'white', color: '#000', marginBottom: "40px" }} />
                        <div classNameName='card-inside-content'>
                            <img src="auth.jpg" alt="Abhishek Gupta" />
                            <h2 >Abhishek Gupta</h2>



                            <span classNameName='marketing'>Marketing | 2+ years</span>
                            <p className='margin-top'>Content Creation</p>
                            <p>Social Media, Blog Writing</p>
                            <div classNameName='card-lorem-flex'>
                                <p>loremipsum</p>
                                <p>loremipsum</p>
                            </div>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide >
                    <div data-tooltip-id="my-tooltip" data-tooltip-content="This is a tooltip!">
                        <Tooltip id="my-tooltip" style={{ backgroundColor: 'white', color: '#000', marginBottom: "40px" }} />
                        <div classNameName='card-inside-content'>
                            <img src="auth.jpg" alt="Abhishek Gupta" />
                            <h2 >Abhishek Gupta</h2>



                            <span classNameName='marketing'>Marketing | 2+ years</span>
                            <p className='margin-top'>Content Creation</p>
                            <p>Social Media, Blog Writing</p>
                            <div classNameName='card-lorem-flex'>
                                <p>loremipsum</p>
                                <p>loremipsum</p>
                            </div>
                        </div>
                    </div>
                </SwiperSlide>
            </Swiper>


        </>
    );
}

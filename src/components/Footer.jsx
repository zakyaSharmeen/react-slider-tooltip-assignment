import React from 'react'
import { FaUser } from "react-icons/fa";
import { FaRegArrowAltCircleRight } from "react-icons/fa";
<FaRegArrowAltCircleRight />



function Footer() {
    return (
        <>



            <div className="main-footer-container">
                <div className="container">

                    <div className='flex-container-1'>
                        <div className="header">
                            <div className="logo padding-bottom">
                                <h1>hyperhire</h1>
                            </div>
                            <p className='padding-bottom'>We match the best talent beyond national borders.</p>
                            <div >
                                <p className='padding-bottom'><b>010-0000-0000</b></p>
                                <p className="padding-bottom"><b>aaaaa@naver.com</b></p>
                            </div>
                        </div>

                        <div className="content">

                            <div className="content-right">
                                <div className="card">

                                    <div className='card-inside-content'>
                                        <div className='icon'>
                                            <FaUser />
                                        </div>
                                        <h3 className='padding-bottom2'>Remote Hiring </h3>
                                        <a href="#">Go to Link <FaRegArrowAltCircleRight /></a>
                                    </div>
                                </div>
                                <div className="card">

                                    <div className='card-inside-content'>
                                        <div className='icon'>
                                            <FaUser />
                                        </div>
                                        <h3 className='padding-bottom2'>Remote Hiring </h3>
                                        <a href="#">Go to Link <FaRegArrowAltCircleRight /></a>
                                    </div>
                                </div>
                                <div className="card">

                                    <div className='card-inside-content'>
                                        <div className='icon'>
                                            <FaUser />
                                        </div>
                                        <h3 className='padding-bottom2'>Remote Hiring </h3>
                                        <a href="#">Go to Link <FaRegArrowAltCircleRight /></a>
                                    </div>
                                </div>
                                <div className="card">

                                    <div className='card-inside-content'>
                                        <div className='icon'>
                                            <FaUser />
                                        </div>
                                        <h3 className='padding-bottom2'>Remote Hiring </h3>
                                        <a href="#">Go to Link <FaRegArrowAltCircleRight /></a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="footer">
                        <div className="info">
                            <div className='info-sub-content'>
                                <p className='padding-bottom2'>lorem</p>
                                <p className='padding-bottom2'>loremipusnmmm</p>
                                <p><b>Hyperhire India Private
                                </b></p>
                            </div>
                            <div className='info-sub-content'>
                                <p className='padding-bottom2'>lorem</p>
                                <p className='padding-bottom2'>loremipusnmmm</p>
                                <p><b>Hyperhire India Private
                                </b></p>
                            </div>
                            <div className='info-sub-content'>
                                <p className='padding-bottom2'>lorem</p>
                                <p className='padding-bottom2'>loremipusnmmm</p>
                                <p><b>Hyperhire India Private
                                </b></p>
                            </div>
                            <div className='info-sub-content'>
                                <p className='padding-bottom2'>lorem</p>
                                <p className='padding-bottom2'>loremipusnmmm</p>
                                <p><b>Hyperhire India Private
                                </b></p>
                            </div>
                        </div>
                        <p><b>&copy; 2023 Hyperhire</b></p>
                    </div>
                </div>

            </div>

        </>
    )
}

export default Footer
import React, { useContext } from 'react'
import VideoModal from '../modal/VideoModal'
import { FarzaaContext } from '../../context/FarzaaContext'
import { Link } from 'react-router-dom'

const BannerSection2 = () => {
    const {handleVideoShow} = useContext(FarzaaContext)
  return (
    <section className="fz-2-banner-section">
        <div className="container position-relative">
            <div className="fz-banner-left-actions">
            </div>
            <div className="row align-items-center">
                <div className="col-lg-7">
                    <div className="fz-banner-txt">
                        <h1 className="fz-2-heading">From Our Culture To Your Doorstep</h1>

                        <div className="fz-def_btn_wrapper">
                            <Link to="/shop" className="fz-def-btn">
                                <span></span>
                                Shop Now
                                <i className="fa-light fa-arrow-up-right"></i>
                            </Link>
                        </div>
                    </div>
                </div>

                <div className="col-lg-5">
                    <div className="fz-banner-vid">
                        <img src="assets/images/banner-img.jpg" alt="background image" className="fz-banner-vid-img"/>
                    </div>
                </div>
            </div>
        </div>
        <VideoModal/>
    </section>
  )
}

export default BannerSection2
import React from 'react'
import { Link } from 'react-router-dom'

const StoreSection = () => {
  return (
    <div className="fz-about-store-area">
        <div className="container">
            <div className="fz-about-single-store">
                <div className="row gy-3 gy-sm-4 align-items-center">
                    <div className="col-xl-6 col-lg-6">
                        <div className="fz-about-store-img">
                            <img src="assets/images/store.jpg" alt="House Door Image"/>
                        </div>
                    </div>

                    <div className="col-xl-6 col-lg-6">
                        <div className="fz-about-store-content">
                            <h4 className="fz-about-store-title">Traditional Handicrafts</h4>
                            <p>Showcase the craftsmanship of Filipino artisans by featuring traditional handicrafts such as handwoven textiles (like the famous "t'nalak" and "piña"), wood carvings, pottery, and indigenous jewelry. Highlight how these products carry stories of heritage and craftsmanship passed down through generations.</p>
                            <div className="fz-about-right-list">
                                <ul>
                                <li>Orders go right to your doorstep</li>
                                <li>Effortless Ordering for Your Pasalubong Essentials &amp; delivery</li>
                                <li>Your Gateway to Authentic Filipino Culture</li>
                                <li>Your Trusted Connection to the Heart and Soul of the Philippines</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="fz-about-single-store">
                <div className="row gy-3 gy-sm-4 align-items-center">
                    <div className="col-xl-6 col-lg-6 order-1 order-lg-0">
                        <div className="fz-about-store-content">
                            <h4 className="fz-about-store-title">Culinary Delights</h4>
                            <p>Explore the vibrant flavors of Filipino cuisine, renowned for its combination of sweet, sour, and savory tastes. Talk about how PasalubongPH offers an array of culinary delights, including iconic delicacies like dried mangoes, pastillas, tablea chocolate, and gourmet condiments such as bagoong and sukang maasim.</p>

                            <div className="fz-about-right-list">
                                <ul>
                                <li>Orders go right to your doorstep</li>
                      <li>Effortless Ordering for Your Pasalubong Essentials &amp; delivery</li>
                      <li>Your Gateway to Authentic Filipino Culture</li>
                      <li>Your Trusted Connection to the Heart and Soul of the Philippines</li>
                                </ul>
                            </div>

                            <Link to="/shop" className="fz-1-banner-btn fz-about-store-btn">Shop Now</Link>
                        </div>
                    </div>

                    <div className="col-xl-6 col-lg-6 order-0 order-lg-1">
                        <div className="fz-about-store-img">
                            <img src="assets/images/9-scaled.jpg" alt="House Door Image"/>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default StoreSection
import React from "react";

const StorySection = () => {
  return (
    <div className="fz-about-area">
      <div className="container">
        <div className="row gy-5">
          <div className="col-xl-6">
            <div className="fz-about-images">
              <div className="row g-0">
                <div className="col-sm-8 col-6">
                  <div className="fz-about-images-left">
                    <div className="fz-about-images-left-img">
                      <img src="assets/images/about-2.jpg" alt="about1-1.png" />
                    </div>

                    <div className="fz-about__infos mt-30">
                    </div>
                  </div>
                </div>

                <div className="col-sm-4 col-6 align-self-end align-self-xxs-start">
                  <div className="fz-about-images-right">
                    <div className="fz-about-images-right-img">
                      <img src="assets/images/about-img-1.jpg" alt="about2-1.png" />
                    </div>

                    <div className="fz-about-images-right__card">
                      <div className="fz-about-images-right__card-wrapp">
                        <div className="fz-about-images-right__card-inner">
                          <span className="fz-about-images-right__card-text">
                            Since
                          </span>
                          <span className="fz-about-images-right__card-year">
                            2023
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="col-xl-6">
            <div className="fz-about-right-content">
              <h4 className="fz-about-right-title">About Our Story</h4>
              <p className="fz-about-right-descr">
              Our journey began with a simple idea – to make it easier for travelers to find authentic Filipino souvenirs and delicacies to bring back home. Founded by a team of passionate individuals who share a deep love for our country's heritage, PasalubongPH quickly grew from a humble concept to a thriving online marketplace.
              </p>
              <div className="row">
                <div className="col-xl-5 col-md-4 col-sm-5 col-7 col-xxs-12">
                  <div className="fz-about-right-img">
                    <img src="assets/images/fz-cat-bg-1.jpg" alt="" />
                  </div>
                </div>
                <div className="col-sm-7 col-md-8 col-xl-7">
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
        </div>
      </div>
    </div>
  );
};

export default StorySection;

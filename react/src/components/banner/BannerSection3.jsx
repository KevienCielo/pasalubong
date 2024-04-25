import React from 'react';
import { Link } from 'react-router-dom';
import { Autoplay } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import { thirdBannerData } from '../../data/Data';

const BannerSection3 = () => {
  return (
    <section
      className="fz-3-banner-section"
      style={{
        position: 'relative',
        color: '#ffffff',
        isolation: 'isolate',
        background: 'url(assets/images/hero-img2.png) no-repeat center center',
      }}
    >
      <div className="container position-relative text-dark">
        <Swiper
          slidesPerView={1}
          autoplay={{ delay: 3000 }}
          modules={[Autoplay]}
          className="fz-3-banner-slider owl-carousel"
        >
          {thirdBannerData.map((item) => (
            <SwiperSlide className="fz-3-banner-single-slide" key={item.id}>
              <div className="row align-items-center justify-content-center text-dark">
                <div className="col-xl-7 col-lg-10">
                  <div className="fz-3-banner-txt">
                    <h1>{item.title}</h1>
                    <p>{item.desc}</p>

                    <div className="fz-def_btn_wrapper text-dark">
                      <Link to="/shop" className="fz-def-btn text-dark fw-bold bg-warning">
                        <span></span>
                        Shop Now
                        <i className="fa-light fa-arrow-up-right"></i>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};

export default BannerSection3;

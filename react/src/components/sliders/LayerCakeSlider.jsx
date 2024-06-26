import React, { useContext, useRef } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation, Autoplay } from 'swiper/modules';
import { FarzaaContext } from '../../context/FarzaaContext';
import { Link } from 'react-router-dom';

const LayerCakeSlider = () => {
    const { 
        addToCakeCart, 
        addToCakeWishlist, 
        handleProductViewOpen, 
        cakeListArray,
        slides
     } = useContext(FarzaaContext)
    const swiperRef = useRef(null);

    const goNext = () => {
        if (swiperRef.current && swiperRef.current.swiper) {
            swiperRef.current.swiper.slideNext();
        }
    };

    const goPrev = () => {
        if (swiperRef.current && swiperRef.current.swiper) {
            swiperRef.current.swiper.slidePrev();
        }
    }
    return (
        <section className="fz-3-layer-cake-section">
            <div className="container">
                <div className="fz-3-section-heading">
                    <div className="section-heading__txt">
                        <h2 className="fz-section-title">Best Seller</h2>
                        <p className="fz-section-sub-title">Your Gateway to Authentic Filipino Culture</p>
                    </div>

                    <div className="section-heading__actions">
                        <div className="fz-3-layer-cake-slider-nav fz-3-slider-nav" ref={swiperRef}>
                            <button type="button" role="presentation" className="owl-prev" onClick={goPrev}>
                                <i className="fa-solid fa-angle-left"></i>
                            </button>
                            <button type="button" role="presentation" className="owl-next" onClick={goNext}>
                                <i className="fa-solid fa-angle-right"></i>
                            </button>
                        </div>
                    </div>
                </div>

                <Swiper
                    slidesPerView={slides}
                    spaceBetween={30}
                    loop={true}
                    autoplay={{ delay: 3000 }}
                    navigation={{
                        prevEl: '.owl-prev',
                        nextEl: '.owl-next',
                    }}
                    modules={[Navigation, Autoplay]}
                    className="fz-3-layer-cake-slider owl-carousel"
                >
                    {cakeListArray.slice(0, 6).map((item) => (
                        <SwiperSlide className="fz-3-single-product" key={item.id}>
                            <div className="fz-3-single-product__img">
                                <img src={item.imgSrc} alt="Product Image" />
                                <div className="fz-3-single-product__actions">
                                    <div className="top-actions">
                                        <button
                                            className="fz-3-add-to-wishlist"
                                            onClick={() => addToCakeWishlist(item.id)}
                                        >{
                                            item.isInWishlist? (<i className='fa-solid fa-heart'></i>):(<i className='fa-light fa-heart'></i>)
                                        }</button>
                                    </div>
                                </div>
                            </div>

                            <div className="fz-3-single-product__txt">
                                <Link to="/shopDetails" className="fz-3-single-product__title">{item.name}</Link>
                                <p className="fz-3-single-product__price">
                                    <span className="current-price">${item.price}</span>
                                    <span className="prev-price text-decoration-line-through">${item.oldPrice}</span>
                                </p>
                            </div>
                        </SwiperSlide>
                    ))}

                </Swiper>
            </div>
        </section>
    )
}

export default LayerCakeSlider
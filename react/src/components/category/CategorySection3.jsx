import React from 'react'
import { Link } from 'react-router-dom'

const CategorySection3 = () => {
  return (
    <section className="fz-3-category-section">
            <div className="container">
                <div className="fz-3-section-heading">
                    <h2 className="fz-section-title">Browse By Provinces</h2>
                    <p className="fz-section-sub-title">Visitors and locals alike frequent pasalubong stores to discover and purchase these delectable treats as souvenirs or gifts for loved ones. </p>
                </div>

                <div className="row gy-3 gy-sm-4 gx-3 justify-content-center ">
                    <div className="col-lg-2 col-md-3 col-4 col-xxs-6">
                        <div className="fz-3-single-category ">
                            <Link to="/shop" className="fz-3-single-category__img">
                                <img src="assets/images/Batangas - Calabarzon2.jpg" alt="Product Icon"/>
                            </Link>

                            <div className="fz-3-single-category__txt">
                                <Link to="/shop">Luzon</Link>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-2 col-md-3 col-4 col-xxs-6">
                        <div className="fz-3-single-category">
                            <Link to="/shop" className="fz-3-single-category__img">
                                <img src="assets/images/baguio ube jam.jpg" alt="Product Icon"/>
                            </Link>

                            <div className="fz-3-single-category__txt">
                                <Link to="/shop">Central Luzon</Link>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-2 col-md-3 col-4 col-xxs-6">
                        <div className="fz-3-single-category">
                            <Link to="/shop" className="fz-3-single-category__img">
                                <img src="assets/images/Cebu Dried Mangoes.jpg" alt="Product Icon"/>
                            </Link>

                            <div className="fz-3-single-category__txt">
                                <Link to="/shop">Visayas</Link>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-2 col-md-3 col-4 col-xxs-6">
                        <div className="fz-3-single-category">
                            <Link to="/shop" className="fz-3-single-category__img">
                                <img src="assets/images/Piaya - Bacolod Negros Occ2.jpg" alt="Product Icon"/>
                            </Link>

                            <div className="fz-3-single-category__txt">
                                <Link to="/shop">Central Visayas</Link>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-2 col-md-3 col-4 col-xxs-6">
                        <div className="fz-3-single-category">
                            <Link to="/shop" className="fz-3-single-category__img">
                                <img src="assets/images/Bottled Sardines2.jpg" alt="Product Icon"/>
                            </Link>

                            <div className="fz-3-single-category__txt">
                                <Link to="/shop">Mindanao</Link>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-2 col-md-3 col-4 col-xxs-6">
                        <div className="fz-3-single-category">
                            <Link to="/shop" className="fz-3-single-category__img">
                                <img src="assets/images/Durian-Davao.jpg" alt="Product Icon"/>
                            </Link>

                            <div className="fz-3-single-category__txt">
                                <Link to="/shop">Central Mindanao</Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
  )
}

export default CategorySection3
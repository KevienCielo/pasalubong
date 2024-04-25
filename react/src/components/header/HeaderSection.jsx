import React, { useContext } from 'react'
import { FarzaaContext } from '../../context/FarzaaContext'
import { Link } from 'react-router-dom'
import HeaderNav from '../navigation/HeaderNav'
import WishlistModal from '../modal/WishlistModal'
import CartModal from '../modal/CartModal'

const HeaderSection = () => {
    const {
        isHeaderFixed,
        handleWishlistShow,
        handleCartShow,
        cartItemAmount,
        wishlist,
        cartItems,
        handleQuantityChange,
        handleRemoveItem,
        handleRemoveItemWishlist,
        handleSidebarOpen,
        wishlistItemAmount
    } = useContext(FarzaaContext)
  return (
    <header className="fz-header-section fz-1-header-section">
        <div className="top-header">
            <div className="container">
                <div className="row gy-3 align-items-center">
                    <div className="col-lg-4 d-lg-block d-none">
                        <span className="mail-address">
                            <a to="mailto:PasalubongPH@gmail.com">
                                <i className="fa-regular fa-envelope-open"></i>
                                PasalubongPH@gmail.com
                            </a>
                        </span>
                    </div>

                    <div className="col-lg-4 col-md-6">
                        <h6>SALE: 400+ products up to 70% off. Shop Now</h6>
                    </div>

                    <div className="col-lg-4 col-md-6">
                        <div className="top-header-right-actions">
                            <div className="top-header-socials">
                                <a to="#"><i className="fa-brands fa-facebook-f"></i></a>
                                <a to="#"><i className="fa-brands fa-twitter"></i></a>
                                <a to="#"><i className="fa-brands fa-instagram"></i></a>
                                <a to="#"><i className="fa-brands fa-youtube"></i></a>
                            </div>

                            <select name="currency" id="top-header-currency-dropdown">
                                <option value="USD">USD</option>
                                <option value="Taka">Taka</option>
                                <option value="Euro">Euro</option>
                                <option value="Rupee">Rupee</option>
                            </select>

                            <select name="language" id="top-header-language-dropdown">
                                <option value="English">English</option>
                                <option value="Bangla">Bangla</option>
                                <option value="French">French</option>
                                <option value="Hindi">Hindi</option>
                            </select>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <div className={`bottom-header to-be-fixed ${isHeaderFixed ? 'fixed' : ''}`}>
    <div className="container">
        <div className="row g-0 align-items-center">
           
            <div className="col-lg-5 col-md-4 d-lg-block ms-auto"> {/* Added ms-auto for margin-left: auto on larger screens */}
                <HeaderNav position={''}/>
            </div>
            <div className="col-md-2 col-lg-2 col-6">
                <div className="fz-logo-container text-md-center text-start">
                    <Link to="">
                        <h4 className="text-primary display-7">
                            <span className="firsttext">PASA</span>
                            <span className="secondtext text-danger">LUBONG</span>
                            <span className="fw-bold text-warning">PH</span>
                        </h4>
                    </Link>
                </div>
            </div>

            <div className="col-lg-5 col-md-6 col-6">
                <div className="fz-header-right-content">
                    <form action="#" className="bottom-header-search-form d-none d-sm-flex">
                        <input type="text" name="search" id="bottom-header-search-input" placeholder="Search keyword"/>
                        <button type="submit"><i className="fa-regular fa-magnifying-glass"></i></button>
                    </form>

                    <ul className="fz-header-right-actions d-flex align-items-center justify-content-end">
                        <li>
                            <button className="fz-header-wishlist-btn d-none d-lg-block" onClick={handleWishlistShow}>
                                <i className="fa-light fa-heart"></i>
                                <span className="count">{wishlistItemAmount}</span>
                            </button>
                        </li>
                        <li>
                            <button className="fz-header-cart-btn d-none d-lg-block" onClick={handleCartShow}>
                                <i className="fa-light fa-shopping-bag"></i>
                                <span className="count">{cartItemAmount}</span>
                            </button>
                        </li>
                        <li className="d-block d-lg-none"><a role="button" className="fz-hamburger" onClick={handleSidebarOpen}><i className="fa-light fa-bars-sort"></i></a></li>
                    </ul>
                </div>
            </div>
        </div>
    </div>
</div>


        <WishlistModal wishlistArray={wishlist} removeItem={handleRemoveItemWishlist}/>
        <CartModal cartArray={cartItems} remove={handleRemoveItem} quantity={handleQuantityChange}/>
    </header>
  )
}

export default HeaderSection
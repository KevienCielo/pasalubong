import React, { useContext, useEffect } from "react";
import HeaderNav from "../navigation/HeaderNav";
import WishlistModal from "../modal/WishlistModal";
import CartModal from "../modal/CartModal";
import HeaderCategoryArea from "./HeaderCategoryArea";
import { FarzaaContext, useStateContext } from "../../context/FarzaaContext";
import { Link } from "react-router-dom";
import axios from "axios";
const HeaderSection4 = () => {
    const {
        handleWishlistShow,
        handleCartShow,
        isHeaderFixed,
        cartCakeAmount,
        handleRemoveCake,
        handleCakeQuantityChange,
        cartCakes,
        wishlistCakes,
        handleRemoveCakeWishlist,
        handleSidebarOpen,
        wishlistCakeAmount,
    } = useContext(FarzaaContext);

    const { user } = useStateContext();
    useEffect(() => {
        console.log(user);
    }, [user]);
    const token = localStorage.getItem("ACCESS_TOKEN");

    const handleLogout = (e) => {
        e.preventDefault();
        localStorage.clear();
        e.target.submit();
    };

    return (
        <header
            className={`fz-3-header-section bg-light to-be-fixed ${
                isHeaderFixed ? "fixed" : ""
            }`}
        >
            <div className="row m-0 align-items-center">
                <div className="col-lg-3 col-md-6 col-9">
                    <div className="fz-3-header-left-content d-flex align-items-center">
                        <div className="fz-3-logo-container">
                            <Link to="">
                                <h1 className="text-primary display-7">
                                    <span className="firsttext">PASA</span>
                                    <span className="secondtext text-danger">
                                        LUBONG
                                    </span>
                                    <span className="fw-bold text-warning">
                                        PH
                                    </span>
                                </h1>
                            </Link>
                        </div>
                    </div>
                </div>

                <div className="col-6 header-nav-container order-3 order-lg-2">
                    <HeaderNav position={"justify-content-center"} />
                </div>

                <div className="col-lg-3 col-md-6 col-3 order-2 order-lg-3">
                    <div className="fz-header-right-content">
                        <ul className="fz-header-right-actions d-flex align-items-center justify-content-end">
                            <li>
                                <a
                                    role="button"
                                    className="fz-header-wishlist-btn d-none d-lg-block text-dark"
                                    onClick={handleWishlistShow}
                                >
                                    <i className="fa-regular fa-heart"></i>
                                    <span className="count">
                                        {wishlistCakeAmount}
                                    </span>
                                </a>
                            </li>
                            <li>
                                <a
                                    role="button"
                                    className="fz-header-cart-btn d-none d-lg-block text-dark"
                                    onClick={handleCartShow}
                                >
                                    <i className="fa-light fa-basket-shopping"></i>
                                    <span className="count">
                                        {cartCakeAmount}
                                    </span>
                                </a>
                            </li>
                            <li>
                                {token ? (
                                    <div>
                                        <span className=" me-2">
                                            Welcome{" "}
                                            <strong>
                                                <em>{user.name}</em>
                                            </strong>
                                            !!
                                        </span>
                                        <span>
                                            <form
                                                // action="http://127.0.0.1:8000/api/logout"
                                                onSubmit={handleLogout}
                                                // method="POST"
                                            >
                                                {/* <input
                                                    type="hidden"
                                                    name="_token"
                                                    value="{{ csrf_token()}}"
                                                /> */}
                                                <button type="submit">
                                                    Logout
                                                </button>
                                            </form>
                                        </span>
                                    </div>
                                ) : (
                                    <Link
                                        to="/account"
                                        className="d-none d-lg-block text-dark"
                                    >
                                        <i className="fa-light fa-user"></i>
                                    </Link>
                                )}
                            </li>
                            <li>
                                <a
                                    role="button"
                                    onClick={handleSidebarOpen}
                                    className="fz-hamburger d-block d-lg-none"
                                >
                                    <i className="fa-light fa-bars-sort"></i>
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
            <WishlistModal
                wishlistArray={wishlistCakes}
                removeItem={handleRemoveCakeWishlist}
            />
            <CartModal
                cartArray={cartCakes}
                remove={handleRemoveCake}
                quantity={handleCakeQuantityChange}
            />
        </header>
    );
};

export default HeaderSection4;

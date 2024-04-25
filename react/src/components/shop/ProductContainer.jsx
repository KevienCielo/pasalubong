import React, { useContext, useState, useEffect } from "react";
import { FarzaaContext } from "../../context/FarzaaContext";
import { Link, Navigate, useNavigate } from "react-router-dom";

const ProductContainer = () => {
    const {
        isListView,
        paginatedProducts,
        addToCart,
        addToWishlist,
        fetchPaginatedProducts,
    } = useContext(FarzaaContext);
    const [loading, setLoading] = useState(true);
    const navigate = useNavigate();
    const token = localStorage.getItem("ACCESS_TOKEN");

    const handleCheckWishlist = (item) => {
        if (!token) {
            navigate("/account");
            return;
        }
        addToWishlist(item);
    };

    const handleCheckCart = (item) => {
        if (!token) {
            navigate("/account");
            return;
        }
        addToCart(item);
    };
    useEffect(() => {
        const fetchData = async () => {
            try {
                await fetchPaginatedProducts();
                setLoading(false);
            } catch (error) {
                console.error("Error fetching paginated products:", error);
                // Handle error if needed
            }
        };

        fetchData();

        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    return (
        <div
            className={`fz-inner-products-container ${
                isListView ? "list-view-on" : ""
            }`}
        >
            {loading ? (
                <div>Loading...</div>
            ) : (
                <div className="row justify-content-center">
                    {paginatedProducts.length === 0 ? (
                        <div className="no-product-area">
                            <h3 className="no-product-text">
                                No Products Available
                            </h3>
                            <p className="no-product-desc">
                                We're sorry. We cannot find any matches for your
                                search term.
                            </p>
                        </div>
                    ) : (
                        paginatedProducts.map((item) => (
                            <div
                                className="col-xl-4 col-md-4 col-6 col-xxs-12"
                                key={item.id}
                            >
                                <div className="fz-1-single-product">
                                    <div className="fz-single-product__img">
                                        <img
                                            src={item.imgSrc}
                                            alt={item.name}
                                        />
                                        <div className="fz-single-product__actions">
                                            <button
                                                className="fz-add-to-wishlist-btn"
                                                onClick={() => {
                                                    handleCheckWishlist(
                                                        item.id
                                                    );
                                                }}
                                            >
                                                <span className="btn-txt">
                                                    add To wishlist
                                                </span>
                                                <span className="btn-icon">
                                                    {item.isInWishlist ? (
                                                        <i className="fa-solid fa-heart"></i>
                                                    ) : (
                                                        <i className="fa-light fa-heart"></i>
                                                    )}
                                                </span>
                                            </button>

                                            <button
                                                className="fz-add-to-cart-btn"
                                                onClick={() =>
                                                    handleCheckCart(item.id)
                                                }
                                            >
                                                <span className="btn-txt">
                                                    add To cart
                                                </span>
                                                <span className="btn-icon">
                                                    <i className="fa-light fa-cart-shopping"></i>
                                                </span>
                                            </button>
                                        </div>
                                    </div>

                                    <div className="fz-single-product__txt">
                                        <span className="fz-single-product__category list-view-text">
                                            {item.category}
                                        </span>
                                        <Link
                                            to="/shopDetails"
                                            className="fz-single-product__title"
                                        >
                                            {item.name}
                                        </Link>
                                        <div className="fz-single-product__price-rating">
                                            <p className="fz-single-product__price">
                                                <span className="current-price">
                                                    ₱{item.price}
                                                </span>
                                            </p>

                                            <div className="rating list-view-text">
                                                <i className="fa-solid fa-star"></i>
                                                <i className="fa-solid fa-star"></i>
                                                <i className="fa-solid fa-star"></i>
                                                <i className="fa-solid fa-star"></i>
                                                <i className="fa-light fa-star"></i>
                                            </div>
                                        </div>

                                        <p className="fz-single-product__desc list-view-text">
                                            Each region in the Philippines has
                                            its own unique delicacies that make
                                            excellent pasalubong gifts.
                                        </p>

                                        <div className="fz-single-product__actions list-view-text">
                                            <button
                                                className="fz-add-to-wishlist-btn"
                                                onClick={() =>
                                                    addToWishlist(
                                                        item.id,
                                                        token
                                                    )
                                                }
                                            >
                                                <span className="btn-txt">
                                                    add To wishlist
                                                </span>
                                                <span className="btn-icon">
                                                    {item.isInWishlist ? (
                                                        <i className="fa-solid fa-heart"></i>
                                                    ) : (
                                                        <i className="fa-light fa-heart"></i>
                                                    )}
                                                </span>
                                            </button>

                                            <button
                                                className="fz-add-to-cart-btn"
                                                onClick={() =>
                                                    addToCart(item.id)
                                                }
                                            >
                                                <span className="btn-txt">
                                                    add To cart
                                                </span>
                                                <span className="btn-icon">
                                                    <i className="fa-light fa-cart-shopping"></i>
                                                </span>
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))
                    )}
                </div>
            )}
        </div>
    );
};

export default ProductContainer;

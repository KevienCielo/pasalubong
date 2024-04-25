import React, { useContext } from "react";
import { Form } from "react-bootstrap";
import { FarzaaContext, useStateContext } from "../../context/FarzaaContext";
import { Link, Navigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const CheckoutSection = () => {
    const { subTotal, shipping, coupon, finalPrice } =
        useContext(FarzaaContext);

    const token = localStorage.getItem("ACCESS_TOKEN");
    if (!token) {
        return <Navigate to="/account" />;
    }

    const handleSubmit = (e) => {
        e.preventDefault();

        // Retrieve all input fields for billing details
        const firstNameInput = document.getElementById("checkout-first-name");
        const lastNameInput = document.getElementById("checkout-last-name");
        const companyNameInput = document.getElementById(
            "checkout-company-name"
        );
        const countryInput = document.getElementById("checkout-country");
        const houseStreetNumberInput = document.getElementById(
            "checkout-house-street-number"
        );
        const apartmentNameInput = document.getElementById(
            "checkout-apartment-name"
        );
        const cityNameInput = document.getElementById("checkout-city-name");
        const stateInput = document.getElementById("checkout-states");
        const zipCodeInput = document.getElementById("checkout-zip-code");
        const phoneNumberInput = document.getElementById(
            "checkout-phone-number"
        );
        const emailAddressInput = document.getElementById(
            "checkout-email-address"
        );

        // Check if any field is empty
        if (
            !firstNameInput.value.trim() ||
            !lastNameInput.value.trim() ||
            !companyNameInput.value.trim() ||
            !countryInput.value.trim() ||
            !houseStreetNumberInput.value.trim() ||
            !cityNameInput.value.trim() ||
            !stateInput.value.trim() ||
            !zipCodeInput.value.trim() ||
            !phoneNumberInput.value.trim() ||
            !emailAddressInput.value.trim()
        ) {
            toast.error("Please fill in all billing details.");
            return;
        }

        // If all billing details are filled, proceed with form submission
        e.target.submit();
    };

    return (
        <div className="container">
            <div className="fz-checkout">
                <form
                    action="http://127.0.0.1:8000/api/checkout"
                    className="checkout-form"
                    method="POST"
                    onSubmit={handleSubmit} // Call handleSubmit function on form submission
                >
                    <input
                        type="hidden"
                        name="_token"
                        value="{{ csrf_token()}}"
                    />
                    <div className="fz-billing-details">
                        <div className="row gy-0 gx-3 gx-md-4">
                            <h3 className="fz-checkout-title">
                                Billing Details
                            </h3>
                            <div className="col-6 col-xxs-12">
                                <input
                                    type="text"
                                    name="first-name"
                                    id="checkout-first-name"
                                    placeholder="First Name"
                                />
                            </div>
                            <div className="col-6 col-xxs-12">
                                <input
                                    type="text"
                                    name="last-name"
                                    id="checkout-last-name"
                                    placeholder="Last Name"
                                />
                            </div>
                            <div className="col-12">
                                <input
                                    type="text"
                                    name="company-name"
                                    id="checkout-company-name"
                                    placeholder="Company Name"
                                />
                            </div>

                            <div className="col-12">
                                <Form.Select
                                    className="country-select"
                                    name="country"
                                    id="checkout-country"
                                >
                                    <option value="Philippines">
                                        Philippines (PH)
                                    </option>
                                    <option value="United Kingdom">
                                        United Kingdom (UK)
                                    </option>
                                    <option value="France">France</option>
                                    <option value="Russia">Russia</option>
                                    <option value="Iran">Iran</option>
                                    <option value="Bangladesh">
                                        Bangladesh
                                    </option>
                                    <option value="Bhutan">Bhutan</option>
                                    <option value="Nepal">Nepal</option>
                                </Form.Select>
                            </div>

                            <div className="col-12">
                                <input
                                    type="text"
                                    name="house-street-number"
                                    id="checkout-house-street-number"
                                    placeholder="House Number & Street Name"
                                />
                            </div>

                            <div className="col-12">
                                <input
                                    type="text"
                                    name="apartment-name"
                                    id="checkout-apartment-name"
                                    placeholder="Apartment, Suite, Unit, etc. (optional)"
                                />
                            </div>

                            <div className="col-12">
                                <input
                                    type="text"
                                    name="city-name"
                                    id="checkout-city-name"
                                    placeholder="Town / City"
                                />
                            </div>

                            <div className="col-6 col-xxs-12">
                                <Form.Select
                                    className="state-select"
                                    name="states"
                                    id="checkout-states"
                                >
                                    <option value="Alabama">Alabama</option>
                                    <option value="Alaska">Alaska</option>
                                    <option value="California">
                                        California
                                    </option>
                                    <option value="Delaware">Delaware</option>
                                    <option value="Florida">Florida</option>
                                    <option value="Georgia">Georgia</option>
                                    <option value="Hawaii">Hawaii</option>
                                    <option value="Idaho">Idaho</option>
                                </Form.Select>
                            </div>

                            <div className="col-6 col-xxs-12">
                                <input
                                    type="text"
                                    name="zip-code"
                                    id="checkout-zip-code"
                                    placeholder="Zip Code"
                                />
                            </div>

                            <div className="col-6 col-xxs-12">
                                <input
                                    type="number"
                                    name="phone-number"
                                    id="checkout-phone-number"
                                    placeholder="Phone Number"
                                />
                            </div>

                            <div className="col-6 col-xxs-12">
                                <input
                                    type="email"
                                    name="email-address"
                                    id="checkout-email-address"
                                    placeholder="Email Address"
                                />
                            </div>

                            <div className="col">
                                <input
                                    type="checkbox"
                                    name="create-account"
                                    id="checkout-create-account"
                                />
                                <label
                                    className="create-acc-lebel"
                                    htmlFor="checkout-create-account"
                                >
                                    Create an Account
                                </label>
                            </div>

                            <div className="col-12 additional-info">
                                <label
                                    htmlFor="checkout-additional-info"
                                    className="fz-checkout-title"
                                >
                                    Additional Information
                                </label>
                                <textarea
                                    name="additional-info"
                                    id="checkout-additional-info"
                                    placeholder="Notes about your order, e.g. special notes for delivery"
                                ></textarea>
                            </div>
                        </div>
                    </div>

                    <div className="fz-checkout-sidebar">
                        <div className="billing-summery">
                            <h4 className="fz-checkout-title">
                                Billing Summary
                            </h4>
                            <div className="cart-checkout-area">
                                <ul className="checkout-summary">
                                    <li>
                                        <span className="checkout-summary__key">
                                            Subtotal
                                        </span>
                                        <span className="checkout-summary__value">
                                            <span>₱</span>
                                            {subTotal}
                                        </span>
                                    </li>

                                    <li>
                                        <span className="checkout-summary__key">
                                            Shipping
                                        </span>
                                        <span className="checkout-summary__value">
                                            <span>₱</span>
                                            {shipping}
                                        </span>
                                    </li>

                                    <li>
                                        <span className="checkout-summary__key">
                                            Coupon discount
                                        </span>
                                        <span className="checkout-summary__value">
                                            -<span>₱</span>
                                            {coupon}
                                        </span>
                                    </li>

                                    <li className="cart-checkout-total">
                                        <span className="checkout-summary__key">
                                            Total
                                        </span>
                                        <span className="checkout-summary__value">
                                            <span>₱</span>
                                            {finalPrice}
                                        </span>
                                    </li>
                                </ul>

                                <Link
                                    to="/cart"
                                    className="fz-1-banner-btn cart-checkout-btn"
                                >
                                    Edit Order
                                </Link>
                            </div>
                        </div>

                        <div className="payment-info">
                            <h4 className="fz-checkout-title">
                                Payment Information
                            </h4>
                            <p className="checkout-payment-descr">
                                Your personal data will be used to process your
                                order, support your experience throughout this
                                website, and for other purposes described in our{" "}
                                <a href="#">privacy policy</a>
                            </p>
                            <button
                                type="submit"
                                className="fz-1-banner-btn cart-checkout-btn checkout-form-btn"
                            >
                                Place Order
                            </button>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default CheckoutSection;

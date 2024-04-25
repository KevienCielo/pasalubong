import React, { useState } from "react";
import { Link } from "react-router-dom"; // Ensure correct import of useHistory
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { useStateContext } from "../../context/FarzaaContext";

const SignInFormSection = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const navigate = useNavigate(); // Access to the history object

    const { setUser, setToken } = useStateContext();

    const handleFormSubmit = async (e) => {
        e.preventDefault();

        try {
            const response = await axios.post(
                `${import.meta.env.VITE_API_BASE_URL}/api/login`,
                {
                    email: email,
                    password: password,
                }
            );

            // Assuming the API returns a token upon successful login
            console.log(response.data.user.name);
            console.log(response.data.token);
            const token = response.data.token;
            setUser(response.data.user);
            setToken(response.data.token);

            // Save the token to localStorage or sessionStorage
            localStorage.setItem("token", token);

            // If the form is successfully submitted, show a success toast
            toast.success("Signed In successfully!", { position: "top-right" });

            // Redirect to ShopMain.jsx after successful login

            setTimeout(() => {
                navigate("/shop");
            }, 2000);
        } catch (error) {
            // Handle error
            console.error("Error signing in:", error);
            toast.error("Failed to sign in. Please check your credentials.", {
                position: "top-right",
            });
        }
    };

    return (
        <form action="#" onSubmit={handleFormSubmit}>
            <input
                type="text"
                name="login-username"
                id="login-username"
                placeholder="Email Adress"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
            />
            <input
                type="password"
                name="login-password"
                id="login-password"
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
            />
            <div className="sign-in-checkbox-container d-flex justify-content-between">
                <div className="stay-sign-in">
                    <input
                        type="checkbox"
                        name="sign-in-checkbox"
                        id="sign-in-checkbox"
                    />
                    <label htmlFor="sign-in-checkbox">Stay Logged in</label>
                </div>
                <Link to="#" className="password-recovery-btn text-dark">
                    Forgot Your Password?
                </Link>
            </div>

            <button
                type="submit"
                className="fz-1-banner-btn bg-warning text-dark single-form-btn"
            >
                Log in
            </button>
        </form>
    );
};

export default SignInFormSection;

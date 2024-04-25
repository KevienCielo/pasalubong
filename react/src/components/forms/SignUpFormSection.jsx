import React, { useState } from "react";
import { toast } from "react-toastify";
import axios from "axios";
import { useStateContext } from "../../context/FarzaaContext";

const SignUpFormSection = () => {
    const [name, setName] = useState("");
    const [password, setPassword] = useState("");
    const [email, setEmail] = useState("");

    const { setUser, setToken } = useStateContext();

    const isValidEmail = (email) => {
        // Basic email validation
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailRegex.test(email);
    };

    const handleFormSubmit = async (e) => {
        e.preventDefault();

        try {
            if (!name || !password || !isValidEmail(email)) {
                toast.error("Please fill out all fields correctly.", {
                    position: "top-right",
                });
                return;
            }

            // Send a POST request to the registration endpoint
            const response = await axios.post(
                `${import.meta.env.VITE_API_BASE_URL}/api/register`,
                {
                    name: name, // Use email as username
                    email: email,
                    password: password,
                }
            );
            console.log(response.data.user.name);
            console.log(response.data.token);
            setUser(response.data.user.name);
            setToken(response.data.token);

            // If the registration is successful, show a success toast
            toast.success("Registered successfully!", {
                position: "top-right",
            });

            // Clear form fields
            setName("");
            setPassword("");
            setEmail("");
        } catch (error) {
            // Handle error
            console.error("Error registering:", error);
            toast.error("Failed to register. Account Already Exist!", {
                position: "top-right",
            });
        }
    };

    return (
        <form action="#" onSubmit={handleFormSubmit}>
            <input
                type="text"
                name="register-name"
                id="register-name"
                placeholder="Name"
                value={name}
                onChange={(e) => setName(e.target.value)}
            />
            <input
                type="email"
                name="register-email"
                id="register-email"
                placeholder="Email Address"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
            />
            <input
                type="password"
                name="register-password"
                id="register-password"
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
            />

            <button
                type="submit"
                className="fz-1-banner-btn bg-warning text-dark single-form-btn"
            >
                Register
            </button>
        </form>
    );
};

export default SignUpFormSection;

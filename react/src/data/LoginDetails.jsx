import axios from "axios";

async function loginDetailsDataFromAPI(token) {
    try {
        const response = await axios.get(
            `${import.meta.env.VITE_API_BASE_URL}/api/login`,
            {
                headers: {
                    Authorization: `Bearer ${token}`, // Include the bearer token in the Authorization header
                },
            }
        );
        console.log("User Data: ", response.data);
        return response.data; // Assuming your API returns login details in JSON format
    } catch (error) {
        console.error("Error fetching login details:", error);
        throw error; // Throw error to be caught by the caller
    }
}

export default loginDetailsDataFromAPI;

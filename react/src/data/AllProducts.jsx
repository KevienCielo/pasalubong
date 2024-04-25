import axios from "axios";

async function fetchProductDataFromAPI() {
    try {
        const response = await axios.get(
            `${import.meta.env.VITE_API_BASE_URL}/api/products `
        );
        // console.log('Response data: ',response.data);
        return response.data; // Assuming your API returns an array of products in JSON format
    } catch (error) {
        console.error("Error fetching product data:", error);
        throw error; // Throw error to be caught by the caller
    }
}

async function allProductLists() {
    try {
        // Fetch product data from your API
        const productList = await fetchProductDataFromAPI();

        // Ensure productList is always an array
        return Array.isArray(productList) ? productList : [];
    } catch (error) {
        console.error("Error getting all products:", error);
        throw error; // Throw error to be caught by the caller
    }
}

export default allProductLists;

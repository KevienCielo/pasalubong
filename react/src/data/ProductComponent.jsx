import React, { useState, useEffect } from 'react';
import allProductLists from '../data/AllProducts'; // Update the path as per your project structure

function MyComponent() {
    const [filteredProducts, setFilteredProducts] = useState([]);

    useEffect(() => {
        // Fetch data when the component mounts
        fetchProductData();
    }, []);

    async function fetchProductData() {
        try {
            // Call the allProductLists function to fetch data
            const productList = await allProductLists();
            
            // Set the fetched data to the state
            setFilteredProducts(productList);
        } catch (error) {
            console.error('Error fetching product data:', error);
        }
    }

    // Your component JSX using filteredProducts

    return (
        <div>
            {/* Your component JSX using filteredProducts */}
        </div>
    );
}

export default MyComponent;
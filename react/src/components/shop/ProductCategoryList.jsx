import React, { useContext, useState, useEffect } from 'react';
import { FarzaaContext } from '../../context/FarzaaContext';
import allProductLists from '../../data/AllProducts';

const categories = [
    { name: null, label: 'All Products' },
    { name: 'Luzon', label: 'Luzon' },
    { name: 'Mindanao', label: 'Mindanao' },
    { name: 'Visayas', label: 'Visayas' },
];

const ProductCategoryList = () => {
    const { handleCategoryFilter } = useContext(FarzaaContext);
    const [activeCategory, setActiveCategory] = useState(null);
    const [products, setProducts] = useState([]);

    useEffect(() => {
        // Fetch data from allProductLists function when the component mounts
        const fetchProducts = async () => {
            try {
                const productList = await allProductLists();
                setProducts(productList);
            } catch (error) {
                console.error('Error fetching products:', error);
            }
        };

        fetchProducts();
    }, []);

    const handleCategoryClick = (category) => {
        handleCategoryFilter(category);
        setActiveCategory(category);
    };

    return (
        <section className="sidebar-single-area product-categories-area">
            <h3 className="sidebar-single-area__title">Product categories</h3>
            <ul className="product-categories">
                {categories.map(categoryObj => (
                    <li
                        key={categoryObj.name}
                        onClick={() => handleCategoryClick(categoryObj.name)}
                        className={activeCategory === categoryObj.name ? 'active' : ''}
                    >
                        {categoryObj.label} ({categoryObj.name === null ? products.length : products.filter(product => product.category === categoryObj.name).length})
                    </li>
                ))}
            </ul>
        </section>
    );
}

export default ProductCategoryList;
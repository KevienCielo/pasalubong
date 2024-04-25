import React, { useContext } from 'react'
import { Modal } from 'react-bootstrap'
import ProductDetailAction from '../product/ProductDetailAction'
import { FarzaaContext } from '../../context/FarzaaContext'
import { Link } from 'react-router-dom'

const ProductViewModal = () => {
    const {
        isProductViewOpen,
        handleProductViewClose,
    } = useContext(FarzaaContext)
  return (
    <Modal show={isProductViewOpen} onHide={handleProductViewClose} size='xl' centered className="fz-quick-view-modal">
        <Modal.Body className="container p-0">
            <div className="fz-quick-view-modal-content">
                <div className="fz-product-details__img">
                    <img src="assets/images/baguio ube jam.jpg" alt="Product Image"/>
                </div>
                <div className="fz-product-details__txt">
                    <h2 className="fz-product-details__title"><Link to="/shopDetails">Baguio Ube Jam</Link></h2>
                    <div className="fz-product-details__price-rating">
                        <span className="price">$430.00</span>
                        <div className="rating">
                            <i className="fa-solid fa-star"></i>
                            <i className="fa-solid fa-star"></i>
                            <i className="fa-solid fa-star"></i>
                            <i className="fa-solid fa-star"></i>
                            <i className="fa-light fa-star"></i>
                        </div>
                    </div>

                    <div className="fz-product-details__infos">
                        <ul>
                            <li><span className="info-property"> SKU </span> : <span className="info-value">D890f</span></li>
                            <li><span className="info-property"> Category </span> : <span className="info-value">Luzon</span></li>
                            <li><span className="info-property"> Availablity </span> : <span className="info-value">in Stock</span></li>
                        </ul>
                    </div>

                    <p className="fz-product-details__short-descr">
                    Baguio Ube Jam is a versatile condiment that can be enjoyed in various ways. Spread it generously on bread, toast, or crackers for a delightful snack, or use it as a filling for pastries, cakes, and other desserts. Its distinctively sweet and nutty taste adds a Filipino twist to any dish, making it a beloved pasalubong (souvenir) and a favorite treat among locals and visitors alike.
                    </p>

                    <ProductDetailAction/>
                </div>
            </div>
        </Modal.Body>
    </Modal>
  )
}

export default ProductViewModal
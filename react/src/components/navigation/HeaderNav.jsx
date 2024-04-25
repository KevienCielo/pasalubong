import React from 'react'
import { Link } from 'react-router-dom'

const HeaderNav = ({position}) => {
  return (
    <nav className="fz-header-nav">
        <ul className={`align-items-center ${position}`}>
        <li className="fz-nav-item"><Link to="/" className="fz-nav-link text-dark">Home</Link></li>
        <li className="fz-nav-item"><Link to="/shop" className="fz-nav-link text-dark">Products</Link></li>
        <li className="fz-nav-item"><Link to="/about" className="fz-nav-link text-dark">About</Link></li>
            <li className="fz-dropdown fz-nav-item">
                <a role="button" className="fz-nav-link text-dark"><span>pages</span> </a>

                <ul className="fz-submenu">
                    <li><Link to="/faq" className="fz-nav-link fz-submenu-nav-link text-dark">FAQ</Link></li>
                    <li><Link to="/wishlist" className="fz-nav-link fz-submenu-nav-link text-dark">Wishlist</Link></li>
                    <li><Link to="/cart" className="fz-nav-link fz-submenu-nav-link text-dark">Cart</Link></li>
                    <li><Link to="/account" className="fz-nav-link fz-submenu-nav-link text-dark">Account</Link></li>
                    <li><Link to="/checkout" className="fz-nav-link fz-submenu-nav-link text-dark">Checkout</Link></li>
                </ul>
            </li>
            <li className="fz-nav-item"><Link to="/contact" className="fz-nav-link text-dark">Contact</Link></li>
        </ul>
    </nav>
  )
}

export default HeaderNav
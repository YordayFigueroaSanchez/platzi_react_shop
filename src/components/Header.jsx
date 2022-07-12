import React, {useState, useContext} from 'react';

import Menu from '@components/Menu';
import '@styles/Header.scss';

import menu from "@icons/icon_menu.svg";
import logo from "@logos/logo_yard_sale.svg";
import shopping_cart from "@icons/icon_shopping_cart.svg";
import AppContext from '@context/AppContext';

const Header = () => {

    const [toggle, setToggle] = useState(false);

    const handleToogle = () => {
        setToggle(!toggle);
    }

    const {state} = useContext(AppContext);

    return (
        <nav>
            <img src={menu} alt="menu" className="menu" />
            <div className="navbar-left">
                <img src={logo} alt="logo" className="nav-logo" />
                <ul>
                <li>
                    <a href="/">All</a>
                </li>
                <li>
                    <a href="/">Clothes</a>
                </li>
                <li>
                    <a href="/">Electronics</a>
                </li>
                <li>
                    <a href="/">Furnitures</a>
                </li>
                <li>
                    <a href="/">Toys</a>
                </li>
                <li>
                    <a href="/">Others</a>
                </li>
                </ul>
            </div>
            <div className="navbar-right">
                <ul>
                <li className="navbar-email" onClick={handleToogle}>
                    platzi@example.com
                </li>
                <li className="navbar-shopping-cart">
                    <img src={shopping_cart} alt="shopping cart" />
                    <div>{ state.cart.length > 0 ? state.cart.length : null}</div>
                </li>
                </ul>
            </div>
            {toggle && <Menu />}
        </nav>

    );
}

export default Header;
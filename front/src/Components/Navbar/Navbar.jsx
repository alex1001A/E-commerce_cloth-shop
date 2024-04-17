//React Hooks/Components
import React, { useRef, useState } from "react";

//Components

//Styles
import "./Navbar.css";

//Icons
import logo from "../assets/logo.png";
import cart_icon from "../assets/cart_icon.png";

function capitalizeFirstLetter(string) {
  return string.charAt(0).toUpperCase() + string.slice(1);
}

export const Navbar = () => {
  const categories = ["shop", "men", "women", "kids"];

  const [menu, setMenu] = useState(null); // Стейт для текущего выбранного меню
  const listRef = useRef(null); // Реф для элемента списка

  const handleMenuClick = (menuType) => {
    setMenu(menuType);
  };

  return (
    <div className="navbar">
      <div className="nav-logo">
        <img src={logo} alt="" />
        <p>Shopper</p>
      </div>
      <ul className="nav-menu" ref={listRef}>
        {categories.map((item) => (
          <li key={item} onClick={() => handleMenuClick(item)}>
            {capitalizeFirstLetter(item)}
            {menu === item ? <hr /> : null}
          </li>
        ))}
      </ul>
      <div className="nav-login-cart">
        <button>Login</button>
        <img src={cart_icon} alt="" />
        <div className="nav-cart-count">0</div>
      </div>
    </div>
  );
};

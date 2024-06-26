//React Hooks/Components
import React, { useRef, useState } from "react";
import { Link } from "react-router-dom";

//Components

//Styles
import "./Navbar.css";

//Icons
import logo from "../assets/logo.png";
import cart_icon from "../assets/cart_icon.png";


export const Navbar = () => {
  const [menu, setMenu] = useState('shop')

  return (
    <div className="navbar">
      <div className="nav-logo">
        <img src={logo} alt="" />
        <p>SHOPPER</p>
      </div>
      <ul className="nav-menu">
        <li onClick={() => {setMenu('shop')}}><Link style={{textDecoration:'none', color:'inherit'} } to='/'>Shop</Link> {menu==='shop'? <hr />:null} </li>
        <li onClick={() => {setMenu('men')}}><Link style={{textDecoration:'none', color:'inherit'}} to='/men'>Men</Link>{menu==='men'? <hr />:null}</li>
        <li onClick={() => {setMenu('women')}}><Link style={{textDecoration:'none', color:'inherit'}} to='/women'>Women</Link> {menu==='women'? <hr />:null}</li>
        <li onClick={() => {setMenu('kids')}}><Link style={{textDecoration:'none', color:'inherit'}} to='/kids'>Kids</Link> {menu==='kids'? <hr />:null}</li>
      </ul>
      <div className="nav-login-cart">
        <Link to='/login'><button>Login</button></Link> 
        <Link to='/cart'><img src={cart_icon} alt="" /></Link> 
        <div className="nav-cart-count">0</div>
      </div>
    </div>
  );
};

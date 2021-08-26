import React, { useEffect } from "react";
import { Link } from "react-router-dom";

import CartButton from "./CartButton.jsx";

import reactLogo from "../assets/img/react-logo.png";

function Header() {
  const title = "REACT PIZZERIA";

  useEffect(() => {
    document.title = title;
  }, []);

  return (
    <div className="header">
      <div className="container">
        <Link to="/">
          <div className="header__logo">
            <img width="38" src={reactLogo} alt="React logo" />
            <div>
              <h1>{title}</h1>
              <p>веб-пиццерия на react.js</p>
            </div>
          </div>
        </Link>
        <div className="header__cart">
          <CartButton />
        </div>
      </div>
    </div>
  );
}

export default Header;

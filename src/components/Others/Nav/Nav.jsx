import React, { useState } from "react";
import "./index.scss";
import { NavLink } from "react-router-dom";

export default function Nav() {
  const [isOpen, setIsOpen] = useState();
  const toggleMenuState = () => setIsOpen((prevState) => !prevState);

  return (
    <div className="app_container">
      <nav className="app_container__wrapper app_nav _flex a_center j_between">
        <p className="__logo">Chidera.</p>

        <button
          className="_ham_burger_menu"
          data-is-open={isOpen}
          onClick={toggleMenuState}
        >
          <span></span>
          <span></span>
        </button>

        <div className="__links _flex a-center" data-is-open={isOpen}>
          <NavLink exact to="/" className="link">
            home.
          </NavLink>
          <NavLink exact to="/about" className="link">
            about me.
          </NavLink>
          <NavLink exact to="/blog" className="link">
            blog.
          </NavLink>
          <NavLink exact to="/services" className="link">
            services.
          </NavLink>
          <NavLink exact to="/shop" className="link">
            shop.
          </NavLink>
          <NavLink exact to="/contact" className="link">
            contact me.
          </NavLink>
        </div>
      </nav>
    </div>
  );
}

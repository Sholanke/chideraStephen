import React from "react";
import "./index.scss";
import { NavLink } from "react-router-dom";

export default function Nav() {
  return (
    <div className="app_container">
      <nav className="app_container__wrapper app_nav _flex a_center j_between">
        <p className="__logo">Chidera.</p>
        <div className="__links flex a-center">
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

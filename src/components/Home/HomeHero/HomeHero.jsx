import React from "react";
import "./index.scss";
import Button from "../../Others/Button/Button";
import { heroAvatar } from "../../../assets/icons";

export default function HomeHero() {
  return (
    <div className="app_container">
      <div className="app_container__wrapper home_hero _flex a_center j_between">
        <div className="__text_holder">
          <h1 className="bold-64">I write digital contents for clients.</h1>
          <Button semanticType="navLink" to="/">Explore works</Button>
        </div>
        <div className="__image_holder">
          <img src={heroAvatar} alt="" srcSet="" />
        </div>
      </div>
    </div>
  );
}

import React from "react";
import HomeBrand from "./HomeBrand";
import "./index.scss";

export default function HomeBrands() {
  return (
    <div className="app_container">
      <div className="app_container__wrapper home_brands">
        <h1 className="home_brand__heading bold-46">Brands I’ve Worked with</h1>
        <HomeBrand>
          <h1 className="home_brand__heading bold-46">
            Brands I’ve Worked with
          </h1>
        </HomeBrand>
        <HomeBrand />
        <HomeBrand />
      </div>
    </div>
  );
}

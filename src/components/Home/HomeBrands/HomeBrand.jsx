import React from "react";
import { risingBox } from "../../../assets/icons";

export default function HomeBrand({ children }) {
  return (
    <footer className="home_brand _flex a_center">
      <div className="_flex a_center _left">
        <div className="home_brand__image_rapper"></div>
        <div className="home_brand__text_rapper">
          <p className="co_theme bold-21 _title">Astoria Company</p>
          <p className="_title _small">Web Content Editor & Writer</p>
          <p className="_title _small">October 2020 – current</p>
          <p className="_description">
            Proofread copies for main website landing pages and company’s
            subsidiaries. <br /> Create high quality content that converts.
            Supervise web content writers and keep blogs updated.
          </p>
        </div>
      </div>
      <div className="_right">
        {children || <img src={risingBox} srcSet="" alt="" className="_box" />}
      </div>
    </footer>
  );
}

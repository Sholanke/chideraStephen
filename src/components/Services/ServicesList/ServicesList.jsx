import React from "react";
import "./index.scss";

export default function ServicesList() {
  return (
    <div className="app_container">
      <div className="app_container__wrapper services_lists">
        <div className="__heading_container">
          <p className="_title bold-48">Services I offer...</p>
          <p className="_description">
            I am a creative and adaptive individual who is passionate about
            growth. I love the process of problem solving and I’m ready to
            accept challenges that polish skills while adding quality value to
            an organization.
          </p>
        </div>

        <div className="__services_holder">
          <Service drawing="one.svg#one" />
          <Service drawing="two.svg#two" />
          <Service drawing="three.svg#three" />
          <Service drawing="four.svg#four" />
        </div>
      </div>
    </div>
  );
}

function Service({ drawing }) {
  return (
    <div className="__service">
      <div className="__drawing">
        <svg
          width="152"
          height="152"
          viewBox="0 0 152 152"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <use xlinkHref={`/assets/svg/abstract/${drawing}`} />
        </svg>
      </div>
      <p className="_title">Social Media Management</p>
      <p className="_description">
        We’ve designed and built ecommerce experiences that have driven sales
        and increased order sizes for everything from socks, cosmetics, shoes
        and luxury apparel.
      </p>
    </div>
  );
}

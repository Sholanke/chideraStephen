import React from "react";
import {
  heroAvatar,
  twitterColored,
  thumb,
  comment,
} from "../../../assets/icons";

export default function AboutSocialMediaPost() {
  return (
    <div className="__post">
      <div className="post__header _flex a_center j_between">
        <div className="_left _flex a_center">
          <img src={heroAvatar} alt="" srcSet="" />
          <p className="_name">Chidera Stephen</p>
        </div>
        <div className="_right">3d ago</div>
      </div>
      <div className="post_image">
        <img
          src="https://i.pinimg.com/736x/b1/91/a7/b191a7a7c4381b406bcb9139fdf4c411.jpg"
          alt=""
          srcSet=""
        />
      </div>
      <p className="post_description">
        Only 3 releases in 2019 and still blessed with these numbers this year!
        I thank you to everyone who kept listening{" "}
        <a href="/" className="co_theme">
          @spotify
        </a>
      </p>
      <div className="post_footer _flex a_center j_between">
        <div className="_right _flex a_center">
          <a href="/" className="action _flex">
            <img src={thumb} alt="" srcSet="" />
            123
          </a>
          <a href="/" className="action _flex">
            <img src={comment} alt="" srcSet="" />
            12.3k
          </a>
        </div>
        <div className="_left">
          <img src={twitterColored} alt="" srcSet="" />
        </div>
      </div>
    </div>
  );
}

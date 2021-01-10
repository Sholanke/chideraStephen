import React from "react";
import "./index.scss";
import AboutSocialMediaPost from "./AboutSocialMediaPost";
import InvertedButton from "../../Others/Button/InvertedButton";

export default function AboutSocialMedia() {
  return (
    <div className="app_container about_social_media__container">
      <div className="app_container__wrapper about_social_media">
        <h1 className="about_social_media__heading bold-48">
          Follow My Social Media
        </h1>
        <div className="media_filter_buttons _flex a_center">
          <InvertedButton>All</InvertedButton>
          <InvertedButton>Facebook</InvertedButton>
          <InvertedButton>Twitter</InvertedButton>
          <InvertedButton>Youtube</InvertedButton>
          <InvertedButton>Instagram</InvertedButton>
        </div>
        <div className="__posts">
          <AboutSocialMediaPost />
          <AboutSocialMediaPost />
          <AboutSocialMediaPost />
          <AboutSocialMediaPost />
          <AboutSocialMediaPost />
          <AboutSocialMediaPost />
        </div>
      </div>
    </div>
  );
}

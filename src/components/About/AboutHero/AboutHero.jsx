import React from "react";
import "./index.scss";
import { heroAvatar, facebook, twitter, instagram, linkedin, youtube } from "../../../assets/icons";
import { SocialMediaLink } from "../../Others/Footer/Footer";

export default function AboutHero() {
  return (
    <div className="app_container">
      <div className="app_container__wrapper about_hero _flex a_center">
        <div className="__image_rapper">
          <img src={heroAvatar} alt="" srcSet="" />
        </div>
        <div className="__text_holder">
          <p className="bold-48">Chidera Stephen</p>
          <div className="__description">
            <p>
              I am a creative and adaptive individual who is passionate about
              growth. I love the process of problem solving and I’m ready to
              accept challenges that polish skills while adding quality value to
              an organization.
            </p>
          </div>
          <div className="__description">
            <p>Contact</p>
            <a href="/">chiderastephen@gmail.com</a>
          </div>

          <div className="__social_media_links">
            <SocialMediaLink to="#" iconSrc={facebook} />
            <SocialMediaLink to="#" iconSrc={twitter} />
            <SocialMediaLink to="#" iconSrc={instagram} />
            <SocialMediaLink to="#" iconSrc={linkedin} />
            <SocialMediaLink to="#" iconSrc={youtube} />
          </div>
        </div>
      </div>
    </div>
  );
}

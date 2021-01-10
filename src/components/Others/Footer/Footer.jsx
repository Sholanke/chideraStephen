import React from "react";
import "./index.scss";
import Button from "../Button/Button";
import {
  chat,
  facebook,
  twitter,
  instagram,
  linkedin,
  youtube,
} from "../../../assets/icons";

export default function Footer({ hasFooterSpacer }) {
  return (
    <div className="app_container">
      <div
        className="app_container__wrapper _flex a_base j_between app_footer"
        data-has-footer-spacer={`${hasFooterSpacer}`}
      >
        <div className="__left">
          <h1 className="bold-64 __heading">Ready to talk?</h1>
          <Button iconPosition="left" semanticType="navLink" icon={chat}>
            messsage me
          </Button>
        </div>
        <div className="__right __social_media_links">
          <SocialMediaLink to="#" iconSrc={facebook} />
          <SocialMediaLink to="#" iconSrc={twitter} />
          <SocialMediaLink to="#" iconSrc={instagram} />
          <SocialMediaLink to="#" iconSrc={linkedin} />
          <SocialMediaLink to="#" iconSrc={youtube} />
        </div>
      </div>
    </div>
  );
}

function SocialMediaLink({ to, iconSrc }) {
  return (
    <a href={to} className="__link">
      <img src={iconSrc} alt="" srcSet="" />
    </a>
  );
}

export { SocialMediaLink };

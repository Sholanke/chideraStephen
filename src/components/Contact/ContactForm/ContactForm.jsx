import React, { useState } from "react";
import BaseInput from "../../Others/BaseInput/BaseInput";
import "./index.scss";
import { SocialMediaLink } from "../../Others/Footer/Footer";
import {
  facebook,
  twitter,
  instagram,
  linkedin,
  youtube,
} from "../../../assets/icons";
import Button from "../../Others/Button/Button";

export default function ContactForm() {
  return (
    <div className="app_container">
      <div className="app_container__wrapper contact_form">
        <h1 className="bold-64 contact_form__heading">Get in touch</h1>
        <Form />
      </div>
    </div>
  );
}

function Form() {
  const [contactData, setContactData] = useState({
    name: "",
    email: "",
    phone: "",
    description: "Write a description here",
  });
  const handleContactFormChange = ({ currentTarget: { name, value } }) => {
    setContactData((prevData) => ({ ...prevData, [name]: value }));
  };

  return (
    <form className="__main_form">
      <BaseInput
        type="text"
        name="name"
        placeholder="Name"
        value={contactData.name}
        onChange={handleContactFormChange}
      />
      <BaseInput
        type="email"
        name="email"
        placeholder="Email"
        value={contactData.email}
        onChange={handleContactFormChange}
      />
      <BaseInput
        type="number"
        name="phone"
        placeholder="Phone"
        value={contactData.phone}
        onChange={handleContactFormChange}
      />

      <div className="_base_input">
        <div
          className="_input"
          contentEditable={true}
          onInput={(e) => {
            handleContactFormChange({
              currentTarget: {
                name: "description",
                value: e.currentTarget.innerText,
              },
            });
          }}
        >
          Write a description here
        </div>
      </div>

      <footer className="_flex j_between a_center">
        <Button>Submit</Button>
        <div>
          <SocialMediaLink to="#" iconSrc={facebook} />
          <SocialMediaLink to="#" iconSrc={twitter} />
          <SocialMediaLink to="#" iconSrc={instagram} />
          <SocialMediaLink to="#" iconSrc={linkedin} />
          <SocialMediaLink to="#" iconSrc={youtube} />
        </div>
      </footer>
    </form>
  );
}
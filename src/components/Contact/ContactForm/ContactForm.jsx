import React, { useState } from "react";
import BaseInput from "../../Others/BaseInput/BaseInput";
import "./index.scss";

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
        type="text"
        name="email"
        placeholder="Email"
        value={contactData.email}
        onChange={handleContactFormChange}
      />
      <BaseInput
        type="text"
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
      {/* <textarea name="description" value={contactData.description}></textarea> */}
    </form>
  );
}

import React from "react";
import InvertedButton from "../../Others/Button/InvertedButton";
import "./index.scss";

const fakeData = { title: "Why Use External It Support" };

export default function BlogList() {
  return (
    <div className="app_container">
      <div className="app_container__wrapper">
        <div className="_flex">
          <InvertedButton>All</InvertedButton>
          <InvertedButton>Life Syle</InvertedButton>
          <InvertedButton>Travel</InvertedButton>
          <InvertedButton>Hair</InvertedButton>
        </div>

        <div className="blogs_list">
          <Blog />
          <Blog />
          <Blog />
          <Blog data={fakeData} />
          <Blog data={fakeData} />
          <Blog data={fakeData} />
          <Blog />
          <Blog />
          <Blog />
        </div>
      </div>
    </div>
  );
}

function Blog({ data: { title } = {} }) {
  return (
    <div className="blog">
      <div className="__image_banner">
        <img
          src="https://i.pinimg.com/736x/b1/91/a7/b191a7a7c4381b406bcb9139fdf4c411.jpg"
          alt=""
          srcset=""
        />
      </div>
      <div className="__text_holder">
        <p className="_title">{title || "Future of Work"}</p>
        <p className="_description">
          Majority of peole will work in jobs that don’t exist today.
        </p>
      </div>
    </div>
  );
}

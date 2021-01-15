import React from "react";
import "./index.scss";
import Button from "../../Others/Button/Button";

export default function ShopProducts() {
  return (
    <div className="app_container">
      <div className="app_container__wrapper shop_products">
        <ShopProduct />
        <ShopProduct />
        <ShopProduct />
        <ShopProduct />
        <ShopProduct />
        <ShopProduct />
        <ShopProduct />
        <ShopProduct />
        <ShopProduct />
      </div>
    </div>
  );
}

function ShopProduct() {
  return (
    <div className="shop_product">
      <div className="__image_holder">
        <img src="/assets/img/product-sample.svg" alt="" srcset="" />
      </div>
      <div className="__text_holder">
        <p className="_name">Product name goes here</p>
        <p className="_price">75,00 USD</p>
        <Button small>Buy It</Button>
      </div>
    </div>
  );
}

import React from "react";
import "./ProductSec.css";
import { Button } from "@react-email/button";
import Products from "./Products";

const ProductSec = (props) => {
  return (
    <div
      className="prod"
      style={{ color: props.dm[1], backgroundColor: props.dm[0] }}
    >
      <h1>Luxury Towels & Apparel for Every Occasion</h1>
      <h3 style={{ color: props.dm[2] }}>
        Crafted for Comfort • Designed for Elegance • Made to Last
      </h3>
      <Products dm={props.dm} hover={props.hover} setHover={props.setHover} />
      <h2>Contact us for more detail about our products</h2>
      <button>
        <a
          href="mailto:mhrexports@gmail.com"
          onMouseEnter={() => props.setHover(true)}
          onMouseLeave={() => props.setHover(false)}
          style={{
            color: props.hover ? props.dm[0] : props.dm[1],
            backgroundColor: props.hover ? props.dm[1] : "transparent",
            borderColor: props.dm[1],
          }}
        >
          Contact us
        </a>
      </button>
    </div>
  );
};

export default ProductSec;

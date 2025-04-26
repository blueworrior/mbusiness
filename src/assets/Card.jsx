import React, { useState } from "react";
import "./card.css";

const Card = (props) => {
  const [ hover, setHover ] = useState(false)
  return (
    <div className="card" style={{ boxShadow: `0 0 5px ${props.dm[1]}` }}>
      <h2 id="cardtitle" style={{ color: props.dm[1] }}>
        {props.title}
      </h2>
      <img src={props.image} alt="" />
      <button>
        <a
          className="buynow"
          href="mailto:mhrexports@gmail.com"
          onMouseEnter={() => setHover(true)}
          onMouseLeave={() => setHover(false)}
          style={{
            color: hover ? props.dm[0] : props.dm[1],
            backgroundColor: hover ? props.dm[1] : "transparent",
            borderColor: props.dm[1],
          }}
        >
          Buy Now</a>
      </button>
    </div>
  );
};

export default Card;

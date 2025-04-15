import React from 'react'
import './card.css'
import { Button } from "@react-email/button";

const Card = (props) => {
  return (
        <div className="card" style={{boxShadow:`0 0 5px ${props.dm[1]}`}}>
            <h2 id='cardtitle' style={{color:props.dm[1]}} >{props.title}</h2>
            <img src={props.image} alt="" />
            <Button id='buybtn' href="mailto:mhrexports@gmail.com" ><button style={{ color:props.dm[1], borderColor:props.dm[1] } }>Buy now</button></Button>
        </div>

  )
}

export default Card
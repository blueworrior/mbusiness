import React from 'react'
import './ProductSec.css'
import { Button } from '@react-email/button'
import Products from './Products'

const ProductSec = (props) => {
  return (
        <div className="prod" style={{color:props.dm[1], backgroundColor:props.dm[0]}}>
            <h1 >Luxury Towels & Apparel for Every Occasion</h1>
            <h3 style={{color:props.dm[2]}}>Crafted for Comfort • Designed for Elegance • Made to Last</h3>
            <Products dm={props.dm} />
            <h2>Contact us for more detail about our products</h2>
            <Button id='contactbtn' href="mailto:mhrexportsk@gmail.com" style={{ color: "#61dafb" }}><button style={{color:props.dm[1], borderColor:props.dm[1]}} id='ctbtn'>Contact us</button></Button>
        </div>
  )
}

export default ProductSec

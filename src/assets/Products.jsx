import React, { useState } from 'react'
import './Products.css'
import Card from './Card'


const Products = (props) => {
    const products = ([
        //towels
        {
            title:"Terry Kitchen Towel",
            img:"/kitchen-towel.JPG",
        },
        {
            title:"Embellished Towels",
            img:"/emb-towel.jpg",
        },
        {
            title:"Institutional Towel",
            img:"/int-towel.jpg",
        },
        {
            title:"Tea Towel",
            img:"/tea-towel.avif",
        },
        {
            title:"Pin Stripe Towel",
            img:"/pin-stripe-towel.jpg",
        },

        //Sheets
        {
            title:"White Stripe Bedsheet",
            img:"/white-stripe-sheet.webp",
        },
        {
            title:"Dyed Bedsheet",
            img:"/dyed-sheets.jpg",
        },
        {
            title:"Printed Bedsheet",
            img:"/printed-sheet.jpg",
        },
        {
            title:"Yarn Dyed Products",
            img:"/yarn_dyed-sheets.avif",
        },
        {
            title:"Plain White Sheet & Pillow",
            img:"/plain-white-sheetpillow.webp",
        },
        {
            title:"jacquard Bedsheet",
            img:"/jacquard-bedsheet.jpg",
        },
        // Napkin
        {
            title:"Table Napkin",
            img:"/table-napkin.webp",
        },
        {
            title:"Dish Cloth",
            img:"/dish-cloth.jpg",
        },

        //bathrobes
        {
            title:"Bathrobe",
            img:"/bathrobe-sample.jpg",
        },
        {
            title:"Fluffy Bathrobe",
            img:"/fluffy-bathrobe.jpg",
        },
        {
            title:"Terry Bathrobe",
            img:"/terry-bathrobe.jpg",
        },
        {
            title:"Child Bathrobe",
            img:"/child-bathrobe.jpg",
        },
        {
            title:"Waffle Bathrobe",
            img:"/waffle-bathrobe.webp",
        },
        
        //extra
        {
            title:"Waffle Blanket",
            img:"/waffle-blanket.jpg",
        },
        {
            title:"Prayer Mat",
            img:"/prayer-mats.webp",
        },
        {
            title:"Terry Muslim Ihram",
            img:"/terry-muslim-ihram.jpg",
        },
        {
            title:"Terry Bath Mats",
            img:"/terry-bath-mat.jpg",
        },
        {
            title:"janitorial item",
            img:"/janitorial-items.jpg",
        },
    ]
)

  return (
        <div className="products">
            {products.map((products) => {
                    console.log(products);
                    return (
                        <Card 
                        title={products.title}
                        image={products.img}
                        dm={props.dm}
                        hover={props.hover}
                        setHover={props.setHover}
                        />
                    )
                })}
            </div>
  )
}

export default Products
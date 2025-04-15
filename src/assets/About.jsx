import React from 'react'
import './About.css'
import { Button } from "@react-email/button";

const About = (props) => {
  return (
    <div className='aboutdiv'>
        <div className="aboutme" style={{backgroundColor:props.dm[0], color:props.dm[1]}}>
            <div className="aboutmeData">
            <h1>About us</h1>
            <div className="legacy">
                <h3>MHR Exports – A Legacy of Excellence in Towel Manufacturing</h3>
                <p>Welcome to MHR Exports, your trusted partner in premium-quality towels. With over 20 years of expertise, we specialize in crafting luxurious and durable towels tailored for global markets. Our commitment to quality, comfort, and reliability has made us a preferred choice for businesses seeking bulk towel solutions.</p>
            </div>
            <div className="ourstory">
                <h3>Our Story</h3>
                <p>Founded by M.Siddique Rana, MHR Exports began as a small-scale operation with a vision to provide the finest towels in the industry. Over the years, we have grown into a leading manufacturer and exporter, supplying high-quality towels in bulk to businesses worldwide. Our dedication to craftsmanship and customer satisfaction has allowed us to build long-lasting relationships with our clients.</p>
            </div>
            <div className="offer">
                <h3>What We Offer</h3>
                <p>At MHR Exports, we specialize in 10 to 15 varieties of towels, catering to diverse needs, including:
                    <br></br>
                ✅ Luxury Bath Towels - Soft, absorbent, and long-lasting
                    <br></br>
                ✅ Kitchen Towels - Highly functional and stylish
                    <br></br>
                ✅ Hotel & Spa Towels - Designed for comfort and durability
                    <br></br>
                ✅ Embroidered & Embellished Towels - Custom-made for elegance
                    <br></br>
                ✅ Beach & Sports Towels - Vibrant, lightweight, and quick-drying

                We take container-only orders, ensuring bulk production efficiency and competitive pricing for businesses worldwide.</p>
            </div>
            <div className="whyus">
                <h3>Why Choose Us?</h3>
                <p>Unmatched Quality - We use premium materials for superior softness and durability.
                <br></br>
                ✔ Eco-Friendly Practices - Our manufacturing process prioritizes sustainability.
                <br></br>
                ✔ Global Shipping - We ensure safe and timely delivery across international markets.
                <br></br>
                ✔ Customization Options - Tailored designs to match your brand's identity.</p>
            </div>
            <div className="joinhand">
                <h3>Join Hands with Us</h3>
                <p>At MHR Exports, we take pride in delivering excellence, one towel at a time. Whether you are a retailer, wholesaler, or business owner, we are here to fulfill your bulk towel needs with exceptional service and top-tier products.</p>
            </div>
            <div className="touch">
                <h4>Get in Touch - Let's discuss how we can serve your business.</h4>
                <Button id='contactbtn' href="mailto:mhrexports@gmail.com" style={{ color: "#61dafb" }}><button style={{color:props.dm[1], borderColor:props.dm[1]}}>Contact us</button></Button>
                <h5>Tel : 0092-41-2630213</h5>
            </div>
            </div>
        </div> 
    </div>
  )
}

export default About

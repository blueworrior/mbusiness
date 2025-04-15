import React from 'react'
import './Home.css'

import { useNavigate } from 'react-router'
import Products from './Products';

const Home = (props) => {

  const navigate = useNavigate();

  const gotoAbout = async () => {
    window.scrollTo({top:320, behavior:"instant"})
    navigate("/about");

  }
  return (
    <div className='homeBc'>
      <div className="homeData"  style={{backgroundColor:props.dm[0], color:props.dm[1]}}>
        <header className='head'>
          <span className="date">Since 2008</span>
          <div className="description">
            <h2>THIS IS MHR EXPORTS</h2>
            <p style={{color:props.dm[2]}}>We are producing 100% cotton, blended terry towels and textile goods, bed sheets, pillows, duvet covers, mattress protectors, tea towels, health care articles. We specialize in producing high-quality textile products made from 100% cotton and blended terry fabrics. Our range includes soft and absorbent towels, luxurious bed sheets, and comfortable pillows designed for a restful sleep.</p>

            <div className="shopConsult">
              <h4>_____SHOPPING CONSULTATION_____</h4>
              <span style={{color:props.dm[2]}} >We are working commercially huge quantities such as 20 feet containers, 40 feet containers minimum 1000 kg's</span>
            </div>
          </div>
        </header>
        {/* <div className="divider"></div> */}
        <div className="homeProd">
        <h1>Luxury Towels & Apparel for Every Occasion</h1>
        <h3 style={{color:props.dm[2]}}>• Crafted for Comfort • Designed for Elegance • Made to Last</h3>
          <Products dm={props.dm}/>
        </div>

        <div className="homeAbout">
        <div className="imgData">
          <img src="/about.avif" alt="" />
        </div>
        <p>"Hello, I am M.Siddique Rana, the proud owner of MHR Exports. With years of experience in the textile industry, I am passionate about delivering high-quality products and ensuring customer satisfaction. Welcome to our world of excellence!"</p>
        <button style={{color:props.dm[1], borderColor:props.dm[1]}} onClick={gotoAbout}>About us</button>
        
        </div>
      </div>
        
    </div>
  )
}

export default Home

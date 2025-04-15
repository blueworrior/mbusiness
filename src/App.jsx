import { BrowserRouter as Router, Routes,Route} from 'react-router-dom'
import { useState } from 'react'
import './App.css'
import Intro from './assets/Intro'
import Home from './assets/Home'
import ProductSec from './assets/ProductSec'
import About from './assets/About'
import Preloader from './assets/Preloader'
import { BiBrightness } from 'react-icons/bi'

function App() {

  const [ dm, setDm ] = useState(["#f5f0fa","#222","#555", "#f5f0fa", "45%"]);
  
  return (
    <>
    <Router>
      <Preloader>
        <div className="bcimg" style={{ filter:`Brightness(${dm[4]})`}}></div>
        <Intro setDm={setDm} dm={dm} />
        <Routes>
          <Route exact path='/' element={<Home dm={dm} />}/>
        </Routes>
        <Routes>
          <Route exact path='/products' element={<ProductSec dm={dm}/>} />      
        </Routes>
        <Routes>
          <Route exact path='/about' element={<About dm={dm} />} />      
        </Routes>
      </Preloader>
    </Router>

    </>
  )
}

export default App

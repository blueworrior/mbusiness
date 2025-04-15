import React, { useState, useEffect, useRef } from "react";
import { FaInbox, FaEnvelope, FaWhatsapp } from "react-icons/fa";
import { SiGmail } from "react-icons/si";
import { Link, useLocation } from "react-router-dom";
import "./Intro.css";

const Intro = (props) => {
  const [dmc, setDmc] = useState(["5%", "#6E5C81"]);
  const [sideBc, setsideBc] = useState({
    backgroundColor: props.dm[0],
    color: props.dm[1],
  });
  const [btnData, setbtnData] = useState("Explore");
  const [btnstyle, setBthstyle] = useState(["", ""]);
  const [bcshow, setBcshow] = useState("visible");
  const [navBc, setNavBc] = useState([props.dm[0], "", ""]);
  const [navTitles, setNavTitles] = useState(["#2C2C2C", "white", "white"]);
  const [navshow, setnavShow] = useState("100%");
  const location = useLocation();
  const imageContainerRef = useRef(null);

  const route = ["/", "/products", "/about"];
  const navLabels = ["Home", "Products", "About us"];

  const handleDmc = () => {
    if (dmc[0] === "5%") {
      // DARK MODE
      setDmc(["50%", "black"]);
      props.setDm(["#121212", "#f5f0fa", "#f5f0fa", "#f5f0fa", "40%"]);
    } else {
      // LIGHT MODE
      setDmc(["5%", "#f5f0fa", ""]);
      props.setDm(["#f5f0fa", "#222", "#555", "#fff", "45%"]);
    }
  };
  

  const handleNavClick = (index) => {
    const newNavBc = ["", "", ""];
    const newNavTitles = ["white", "white", "white"];

    newNavBc[index] = props.dm[0];
    newNavTitles[index] = props.dm[1];

    setNavBc(newNavBc);
    setNavTitles(newNavTitles);
  };

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("animate");
          } else {
            entry.target.classList.remove("animate");
          }
        });
      },
      { threshold: 0.2 }
    ); // Trigger when 10% of the element is visible

    if (imageContainerRef.current) {
      observer.observe(imageContainerRef.current);
    }

    return () => {
      if (imageContainerRef.current) {
        observer.unobserve(imageContainerRef.current);
      }
    };
  }, []);

  useEffect(() => {
    const path = route;
    const activeIndex = path.indexOf(location.pathname);

    if (activeIndex !== -1) {
      setnavShow("100%");
      handleNavClick(activeIndex);
    }
  }, [location.pathname]);

  useEffect(() => {
    const currentIndex = route.indexOf(location.pathname);
    if (currentIndex !== -1) {
      handleNavClick(currentIndex);
    }
  }, [props.dm]);
  

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 100) {
        setbtnData("MHR EXPORTS");
        setBthstyle(["10px", "100px"]);
        setBcshow("hidden");
      } else {
        setBthstyle(["", ""]);
        setBcshow("visible");
        setbtnData("Explore");
      }
      if (window.scrollY > 350) {
        setsideBc({ backgroundColor: props.dm[1], color: props.dm[0] });
      } else {
        setsideBc({ backgroundColor: props.dm[0], color: props.dm[1] });
      }
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, [props.dm]);

  return (
    <>
      <div className="dbbar" style={{backgroundColor:"#222"}} onClick={handleDmc}>
        <div
          className="dbcircle"
          style={{ left: dmc[0], backgroundColor: dmc[1] }}
        ></div>
      </div>

      <div className="bc" ref={imageContainerRef}>
        <div className="bcData" style={{ visibility: bcshow, color:props.dm[3]}}>
          <h1>MHR Exports</h1>
          <p>
            Experience the perfect blend of luxury and comfort with our premium
            collection of products in our shop
          </p>
        </div>
        <button
          onClick={() => {
            window.scrollTo({ top: 450, behavior: "smooth" });
          }}
          style={{ marginTop: btnstyle[0], marginBottom: btnstyle[1], color:props.dm[3], borderColor:props.dm[3] }}
          className="explorebtn"
          type="button"
        >
          {btnData}
        </button>

        <div
          className="navbc"
          style={{ left: navshow === "100%" ? "100%" : "0%" }}
        ></div>

        <div
          className="sidebarbtn"
          style={sideBc}
          role="button"
          aria-label="Open navigation menu"
          onClick={() => setnavShow("30%")}
        >
          ☰
        </div>
        <div className="navbar" style={{ left: navshow }}>
          <div className="crossbtn" onClick={() => setnavShow("100%")}>
            <img src="cross.png" alt="Close navigation menu" />
          </div>
          <ul id="nav">
            {navLabels.map((item, index) => (
              <li
                key={index}
                style={{
                  backgroundColor: navBc[index],
                }}
                onClick={() => {
                  window.scrollTo({ top: 320, behavior: "instant" });
                  handleNavClick(index);
                }}
              >
                <Link
                  style={{
                    color: navTitles[index],
                  }}
                  id="routeLink"
                  to={route[index]}
                >
                  {item}
                </Link>
              </li>
            ))}
          </ul>
          <ul id="links">
            <li>
              <a
                href="https://wa.me/923007629466?text=hello sir! how are you?"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaWhatsapp className="waIcon" size={25} style={{color:props.dm[3]}} />
              </a>
            </li>
            <a href="mailto:mhrexports@gmail.com" rel="noopener noreferrer">
              <li>
                <FaEnvelope className="waIcon" size={25} style={{color:props.dm[3]}} />
              </li>
            </a>
          </ul>
        </div>
      </div>
    </>
  );
};

export default Intro;

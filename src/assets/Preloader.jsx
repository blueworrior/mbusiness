import { useState, useEffect } from "react";
import './Preloader.css';
import Loader from "./loader";
const Preloader = ({ children }) => {
  const [loading, setLoading] = useState(true);

  // List of image paths to preload
  const imageList = [
    "/bc-towel.jpg",
    "/about.avif",
    "/kitchen-towel.JPG",
    "/emb-towel.jpg",
    "/int-towel.jpg",
    // add all important images here
  ];

  useEffect(() => {
    let loadedCount = 0;

    imageList.forEach((src) => {
      const img = new Image();
      img.src = src;
      img.onload = () => {
        loadedCount++;
        if (loadedCount === imageList.length) {
          setTimeout(() => {
            setLoading(false);
          }, 1000);
        }
      };
    });
  }, []);

  return loading ? (
    <div className="preloader">
      <Loader />
    </div>
  ) : (
    children
  );
};

export default Preloader;

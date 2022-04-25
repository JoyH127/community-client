import { useEffect, useState, useRef } from "react";
import axios from "axios";
import apiUrl from "../../apiConfig";
import chain from "../img/gif/chain.gif";
import education from "../img/gif/education.gif";

import rock from "../img/gif/rock.gif";
export default function Home() {
  const colors = ["#0088FE", "#00C49F", "#FFBB28"];
  const imgs = [education, rock, chain];
  const delay = 5000;
  const [index, setIndex] = useState(0);
  const timeoutRef = useRef(null);
  function resetTimeout() {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }
  }
  useEffect(() => {
    resetTimeout();
    timeoutRef.current = setTimeout(
      () =>
        setIndex((prevIndex) =>
          prevIndex === colors.length - 1 ? 0 : prevIndex + 1
        ),
      delay
    );

    return () => {
      resetTimeout();
    };
  }, [index]);
  const fetchImg = () => {
    return imgs.map((img, index) => {
      return img[index];
    });
  };
  return (
    <div className="slideshow">
      <div
        className="slideshowSlider"
        style={{ transform: `translate3d(${-index * 100}%, 0, 0)` }}
      >
        {imgs.map((item, index) => (
          <div className="slide" key={index}>
            <img src={item}></img>
          </div>
        ))}
      </div>

      <div className="slideshowDots">
        {colors.map((_, idx) => (
          <div
            key={idx}
            className={`slideshowDot${index === idx ? " active" : ""}`}
            onClick={() => {
              setIndex(idx);
            }}
          ></div>
        ))}
      </div>
    </div>
  );
}

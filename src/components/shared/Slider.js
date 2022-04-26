import { useEffect, useState, useRef } from "react";
import chain from "../img/gif/chain.gif";
import education from "../img/gif/education.gif";
import rock from "../img/gif/rock.gif";
import info from "../img/icon/information.png";
import send from "../img/icon/send.png";
import plus from "../img/icon/plus.png";
export default function Slider() {
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
    <div className="whole-slide-container">
      <section className="main-slide-banner">
        <img className="info-icon" src={info} />
        <img className="plus-icon" src={plus} />
        <img className="send-icon" src={send} />
        <div className="slideshow">
          <div className="slider-covers">
            <h3>Today's recommend</h3>
            <div className="icons"></div>
          </div>

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
      </section>
    </div>
  );
}

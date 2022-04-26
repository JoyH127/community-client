import { useEffect, useState } from "react";
import axios from "axios";
import Slider from "../shared/Slider";
// import env from "react-dotenv";
import MovieCard from "./MovieCard";
import React from "react";
import left from "../img/icon/next.png";
import right from "../img/icon/right.png";

const URL = "https://api.themoviedb.org/3/trending/movie/week?api_key=";
const API_KEY = "364efc32f3d781a4ef5b975d2e25f1f7";
export default function Home() {
  // const [popup, setPopup] = useState(true);
  const [trends, setTrend] = useState([]);

  const fetchTrend = async () => {
    try {
      const response = await axios(`${URL}${API_KEY}`);

      setTrend(response.data.results);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchTrend();
  }, []);

  const slideRight = () => {
    let slide = document.querySelector(".trend-container");
    slide.scrollLeft = slide.scrollLeft + 700;
  };
  const slideLeft = () => {
    let slide = document.querySelector(".trend-container");
    slide.scrollLeft = slide.scrollLeft - 700;
  };

  console.log("trend", trends);
  const renderTrend = () => {
    return trends.map((trend, index) => {
      const {
        title,
        overview,
        poster_path,
        id,
        popularity,
        release_date,
        backdrop_path,
        vote_count,
        vote_average,
      } = trend;
      return (
        <MovieCard
          title={title}
          overview={overview}
          poster_path={poster_path}
          id={id}
          popularity={popularity}
          release_date={release_date}
          backdrop_path={backdrop_path}
          vote_average={vote_average}
          vote_count={vote_count}
        />
      );
    });
  };

  // const PopupRender = () => {
  //   return popup ? (
  //     <>
  //       <div className="popup">
  //         <div className="popup-inner">
  //           <button
  //             className="close-btn"
  //             onClick={() => {
  //               handlePopup();
  //             }}
  //           >
  //             close
  //           </button>
  //         </div>
  //       </div>
  //     </>
  //   ) : (
  //     ""
  //   );
  // };
  return (
    <div>
      <Slider />
      <section className="trend-section">
        <div className="main-slider">
          <div className="main-slider-container">
            <h2>Weekly Movie Trend</h2>
            <img className="left" src={left} onClick={slideLeft} />
            <div className="trend-container">{renderTrend()}</div>
            <img className="right" src={right} onClick={slideRight} />
          </div>
        </div>
      </section>
    </div>
  );
}

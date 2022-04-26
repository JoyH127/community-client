import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import info from "../img/icon/information.png";
import send from "../img/icon/send.png";
import plus from "../img/icon/plus.png";
import axios from "axios";
import React from "react";
import close from "../img/icon/cancel.png";

export default function MovieCard({
  title,
  overview,
  poster_path,
  id,
  popularity,
  release_date,
  backdrop_path,
  vote_count,
  vote_average,
}) {
  const imgUrl = `http://image.tmdb.org/t/p/w500${poster_path}`;

  const b_imgUrl = `http://image.tmdb.org/t/p/w500${backdrop_path}`;
  const [popup, setPopup] = useState(false);

  const [m_id, ClickedId] = useState(0);

  const handlePopup = (e) => {
    setPopup(!popup);
    console.log("popup", popup);
  };
  const renderPopup = () => {
    return popup ? (
      <>
        <section className="popup">
          <div className="popup-container">
            <img className="close-btn" src={close}></img>
            <div className="popup-inner">
              <div className="background-contain">
                <img className="background" src={imgUrl}></img>
              </div>
              <div className="popup-text">
                <h2>{title}</h2>
                <h4> {release_date}</h4>
                <hr />
                <p>
                  <h3>Overview</h3>
                  {overview}
                </p>
                <div className="small-text">
                  <p>Popularity : {popularity}</p>
                  <p>Vote average : {vote_average}</p>
                  <p>Vote count : {vote_count}</p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </>
    ) : (
      <></>
    );
  };
  return (
    <div
      className="card"
      onClick={() => {
        handlePopup();
        ClickedId(id);
        console.log(m_id);
      }}
    >
      <div>
        <img className="card-img" src={imgUrl}></img>
        <div className="cock-cover">
          <h3>{title}</h3>
          <img className="plus-icon" src={plus}></img>
        </div>
      </div>
      <section>{renderPopup()}</section>
    </div>
  );
}

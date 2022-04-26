import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import axios from "axios";
import React from "react";

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
        <div className="popup">
          <div className="popup-inner">
            <button className="close-btn">close</button>
            <p>Title:{title}</p>
            <p>Overview:{overview}</p>
            <p>Popularity: {popularity}</p>
            <p>release_date: {release_date}</p>
            <p>vote_average:{vote_average}</p>
            <p>vote_count:{vote_count}</p>
            <img src={imgUrl}></img>
          </div>
        </div>
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
        <img src={imgUrl}></img>
        <div className="cock-cover">
          <h2>{title}</h2>
        </div>
      </div>
      <section>{renderPopup()}</section>
    </div>
  );
}

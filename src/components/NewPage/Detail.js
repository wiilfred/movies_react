import React, { useContext, } from "react";
import { movieDatas } from "../../context";
import './Detail.css'

function Detail() {
    const {movieData,searchMovie}= useContext(movieDatas)
    
  return (
    <div>
      {searchMovie?
      <div className="detail-container">
        <div>
        <img src={searchMovie[0].backdrop} alt="" />
        </div>
        <div className="details">
          <h1>{searchMovie[0].title}</h1>
          <p>{searchMovie[0].released_on}</p>
        </div>
      </div>
      : <div className="detail-container">
      <div>
      <img src={movieData.backdrop} alt="" />
      </div>
      <div className="details">
        <h1>{movieData.title}</h1>
        <p>{movieData.released_on}</p>

      </div>
    </div>}
    </div>
  );
}

export default Detail;

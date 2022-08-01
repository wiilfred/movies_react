import React, { useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "../../axios";
import { BASE_URL, config } from "../../constant";
import { movieDatas } from "../../context";
import './Row.css';

function Row({ title }) {
  const [movies, setMovies] = useState([]);
  const {setMovieData,setSearchMovie} = useContext(movieDatas)
  const navigate = useNavigate()

  const categories = (datas) => {
    let data = []
    for (let i = 0; i < datas.length; i++) {
    //   console.log(datas[i]);
    //   console.log(datas[i].genres);
      for (let j = 0; j < datas[i].genres.length; j++) {
        console.log(datas[i].genres[j]);
        if (datas[i].genres[j] === title) {
        data.push(datas[i]);
        break;
        }
      }
    }
    setMovies(data)
  };

  useEffect(() => {
    axios
      .get(BASE_URL, config)
      .then((response) => categories(response.data.movies))
      .catch((error) => console.log(error));
  }, []);
  const handleOnClick = (data) => {
    setSearchMovie('')
    setMovieData(data)
    navigate('/detail');
  }

  return (
      <div >
        <div>{title}</div>
        <div className="row_holder">
      {movies.map((data) => (
        <div className="row">
          <img src={data.backdrop} alt="{movies.title}" onClick={() => {handleOnClick(data)}}/>

          
        </div>
      ))}
        </div>

    </div>
  );
}

export default Row;

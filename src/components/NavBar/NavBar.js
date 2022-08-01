import React, { useContext, useState } from "react";
import "./NavBar.css";
import SearchIcon from "@mui/icons-material/Search";
import axios from "../../axios";
import { BASE_URL, config } from "../../constant";
import { movieDatas } from "../../context";
import { useNavigate } from "react-router-dom";

function NavBar() {
  const [search, setSearch] = useState("");
  const { setMovieData,setSearchMovie } = useContext(movieDatas);
  const navigate = useNavigate();

  const handleOnChange = (e) => {
    setSearch(e.target.value);
  };
  const handleOnClick = (e) => {
    axios
      .get(BASE_URL + `?q=<${search}>`, config)
      .then((res) => {
        console.log(res.data.movies);
        setMovieData('')
        setSearchMovie(res.data.movies);
        navigate("/detail");
      })
      .catch((err) => {
        console.error(err);
      });
  };

  return (
    <div className="app">
      <div className="nav_container">
        <div>
          <h1 className="wookie_title">WOOKIE MOVIES</h1>
        </div>
        <div className="search_holder">
          <input
            value={search}
            onChange={handleOnChange}
            type="text"
            className="wookie_search"
            placeholder="search"
          />
          <SearchIcon onClick={handleOnClick} />{" "}
        </div>
      </div>
    </div>
  );
}

export default NavBar;

import "./App.css";
import HomePage from "./Pages/HomePage/HomePage";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import DetailPage from "./Pages/DetailPage/DetailPage";
import { movieDatas } from "./context";
import { useState } from "react";

function App() {
  const [movieData, setMovieData] = useState();
  const [searchMovie, setSearchMovie] = useState();

  return (
    <movieDatas.Provider value={{ movieData, setMovieData,searchMovie,setSearchMovie }}>
      <BrowserRouter>
        <Routes>
          <Route exact path="/" element={<HomePage />} />
          <Route path="/detail" element={<DetailPage />} />
        </Routes>
      </BrowserRouter>
    </movieDatas.Provider>
  );
}

export default App;

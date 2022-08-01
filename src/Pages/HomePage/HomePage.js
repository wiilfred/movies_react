import React from "react";
import NavBar from "../../components/NavBar/NavBar";
import Row from "../../components/Rows/Row";

function HomePage() {
  return (
    <div>
      <NavBar />
      <Row title="Action" />
      <Row title="Crime" />
      <Row title="Drama" />
      <Row title="Biography" />
    </div>
  );
}

export default HomePage;

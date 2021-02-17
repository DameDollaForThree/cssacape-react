import React, { Component } from "react";
import SearchBar from "./components/SearchBar";
import CheckBox from "./components/CheckBox";
import Title from "./components/Title";
import "./App.css";
import cssaicon from "./Images/cssaicon.png";

function App() {
  return (
    <div className="Container" style={{ backgroundColor: "#e6e6e6" }}>
      <Title />
      <CheckBox />
      <SearchBar />
      <img className="icon" src={cssaicon} width="250" />
    </div>
  );
}

export default App;

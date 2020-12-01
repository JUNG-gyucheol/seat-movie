import React, { useState, useEffect } from "react";
import "./style.css";
import "./App.css";
import Seats from "./components/view/Seat";

function App() {
  return (
    <div>
      <h1>좌석예매 시스템</h1>
      <div id="app">
        <Seats />
      </div>
    </div>
  );
}

export default App;

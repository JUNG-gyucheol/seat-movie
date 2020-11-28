import React, { useState } from "react";
import "./style.css";
import "./App.css";

// import Seat from "./components/view/Seat";

function App() {
  // const [seats, setseats] = useState([
  //   [1, 1, 0, 1, 1, 0, 0, 0, 0, 1, 1, 0, 1, 1],
  //   [1, 1, 0, 1, 1, 1, 1, 1, 1, 1, 1, 0, 1, 1],
  //   [1, 1, 0, 1, 1, 1, 1, 1, 1, 1, 1, 0, 1, 1],
  //   [1, 1, 0, 1, 1, 1, 1, 1, 1, 1, 1, 0, 1, 1],
  //   [1, 1, 0, 1, 1, 1, 1, 1, 1, 1, 1, 0, 1, 1],
  //   [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  //   [1, 1, 0, 1, 1, 1, 1, 1, 1, 1, 1, 0, 1, 1],
  //   [1, 1, 0, 1, 1, 1, 1, 1, 1, 1, 1, 0, 1, 1],
  //   [1, 1, 0, 1, 1, 1, 1, 1, 1, 1, 1, 0, 1, 1],
  //   [1, 1, 0, 1, 1, 1, 1, 1, 1, 1, 1, 0, 1, 1],
  // ]);
  const [Soldout, setSoldout] = useState([]);
  let seats = [
    [1, 1, 0, 1, 1, 0, 0, 0, 0, 1, 1, 0, 1, 1],
    [1, 1, 0, 1, 1, 1, 1, 1, 1, 1, 1, 0, 1, 1],
    [1, 1, 0, 1, 1, 1, 1, 1, 1, 1, 1, 0, 1, 1],
    [1, 1, 0, 1, 1, 1, 1, 1, 1, 1, 1, 0, 1, 1],
    [1, 1, 0, 1, 1, 1, 1, 1, 1, 1, 1, 0, 1, 1],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [1, 1, 0, 1, 1, 1, 1, 1, 1, 1, 1, 0, 1, 1],
    [1, 1, 0, 1, 1, 1, 1, 1, 1, 1, 1, 0, 1, 1],
    [1, 1, 0, 1, 1, 1, 1, 1, 1, 1, 1, 0, 1, 1],
    [1, 1, 0, 1, 1, 1, 1, 1, 1, 1, 1, 0, 1, 1],
  ];

  const onChoiceHandler = function (e) {
    e.currentTarget.className === "seat enable"
      ? (e.currentTarget.className = "seat disable")
      : (e.currentTarget.className = "seat enable");
    setSoldout(...Soldout, e.currentTarget);

    // console.log(e.currentTarget);
    // if(e.currentTarget.className === "seat enalbe"){
    //   e.currentTarget.className = "seat disable";
    //   setSoldout(...Soldout, e.currentTarget);
    // } else {}
  };

  const onSoldOutHandler = function () {
    console.log("button 클릭");
  };

  seats.map((Row, rowIndex) => {
    Row.map((Col, colIndex) => {
      if (Col === 1) {
        seats[rowIndex][colIndex] = (
          <div className="seat enable" onClick={onChoiceHandler}></div>
        );
      } else if (Col === 0) {
        seats[rowIndex][colIndex] = <div className="seat hallway"></div>;
      }
    });
  });

  return (
    <div>
      <h1>좌석예매 시스템</h1>
      <div id="app">{seats}</div>
      <div id="bottom">
        <button type="button" id="confirmButton" onClick={onSoldOutHandler}>
          예약완료
        </button>
      </div>
    </div>
  );
}

export default App;

import React, { useState } from "react";

function Seat() {
  const [Seats, setSeats] = useState([
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
  ]);
  const [Soldout, setSoldout] = useState([]);
  let a = [];

  //좌석 클릭시 선택한 좌석과 선택한 좌석을 취소 할 수 있는 콜백함수
  const onChoiceHandler = function (e) {
    e.currentTarget.className === "seat enable"
      ? (e.currentTarget.className = "seat disable")
      : (e.currentTarget.className = "seat enable");
    //현재타겟의 부모를 선택하여 부모안에 있는 자식들을 HTMLCollection으로 가져온다음
    //스프레드 연산자를 사용하여 배열로 변환하여
    //SoldOut의 useState 초기화시켜줍니다.
    setSoldout([...e.currentTarget.parentNode.children]);
    console.log(e.currentTarget.parentNode.children);
  };

  //예약 버튼 클릭 시 선택한 좌석을 예약하는 콜백함수
  const onSoldOutHandler = function () {
    //선택한 좌석을 a 배열 변수에 입력
    a = Soldout.map((value, idx) => {
      if (value.classList[1] === "disable") {
        return idx;
      }
    }).filter((value) => {
      return typeof value === "number";
    });
    console.log(a);

    //Seats State에 있는 배열을 2로 변환
    a.map((value) => {
      console.log((Seats[parseInt(value / 14)][parseInt(value % 14)] = 2));
    });
    setSeats([...Seats]);
  };

  return (
    <div>
      {Seats.map((Row) =>
        Row.map((Col) =>
          Col === 1 ? (
            <div className="seat enable" onClick={onChoiceHandler}></div>
          ) : Col === 2 ? (
            <div className="seat soldout"></div>
          ) : (
            <div className="seat hallway"></div>
          )
        )
      )}
      <div id="bottom">
        <button type="button" id="confirmButton" onClick={onSoldOutHandler}>
          예약완료
        </button>
      </div>
    </div>
  );
}

export default Seat;

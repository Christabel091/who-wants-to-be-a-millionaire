import React, { useState } from "react";
import "./App.css";
import Quiz from "./component/Quiz";
const App = () => {
  const [questionNumber, setQuestionNumber] = useState(10);
  const moneyPyramid = [
    { id: 1, ammount: "$ 100" },
    { id: 2, ammount: "$ 200" },
    { id: 3, ammount: "$ 300" },
    { id: 4, ammount: "$ 400" },
    { id: 5, ammount: "$ 500" },
    { id: 6, ammount: "$ 600" },
    { id: 7, ammount: "$ 700" },
    { id: 8, ammount: "$ 800" },
    { id: 9, ammount: "$ 900" },
    { id: 10, ammount: "$ 1000" },
    { id: 11, ammount: "$ 5000" },
    { id: 12, ammount: "$ 10000" },
    { id: 13, ammount: "$ 20000" },
    { id: 14, ammount: "$ 50000" },
    { id: 15, ammount: "$ 100000" },
    { id: 16, ammount: "$ 1000000" },
    { id: 17, ammount: "$ 10000000" },
  ].reverse();
  return (
    <div className="app">
      <div className="main">
        <div className="top">
          <div className="timer">10</div>
        </div>
        <div className="bottom">
          <Quiz />`
        </div>
      </div>
      <div className="pyramid">
        <ul className="moneyList">
          {moneyPyramid.map((money) => (
            <li
              className={
                questionNumber === money.id
                  ? "moneyListItem active"
                  : "moneyListItem"
              }
            >
              <span className="moneyListItemNumber">{money.id}</span>
              <span className="moneyListItemAmmount">{money.ammount}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default App;

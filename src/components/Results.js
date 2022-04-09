import React from "react";
import Confetti from "react-confetti";

const sgColors = [
  "#9ce8c2",
  "#60d399",
  "#b9e2fe",
  "#4fb3f6",
  "#bdc7fb",
  "#6d83f3",
  "#ff7968",
  "#ffe8e5",
  "#fedd8e",
  "#fbbe2e",
];

const Results = ({ score, playAgain }) => (
  <div className="score-board">
    <div className="score">Correct {score} / 5 !</div>
    <button className="playBtn" onClick={playAgain}>
      Play Again ?
    </button>

    <Confetti
      className="canvas"
      colors={sgColors}
      numberOfPieces={1300}
      gravity={0.17}
      recycle={false}
    />
  </div>
);

export default Results;

import React from "react"

import "./Chessboard.css"

const files = ["a", "b", "c", "d", "e", "f", "g", "h"]
const ranks = ["1", "2", "3", "4", "5", "6", "7", "8"]

export default function Chessboard() {
  let board = []

  for (let i = ranks.length - 1; i >= 0; i--) {
    let squareColour = (i % 2 == 0) ? "hotpink" : "pink";
    for (let j = 0; j < files.length; j++) {
      board.push(<div className={`square ${squareColour}`}>{files[i]}{ranks[j]}</div>)
      squareColour = (squareColour === "pink") ? "hotpink" : "pink"
    }
  }

  return (
    <div className="chessboard">
      {board}
    </div>
  )
}
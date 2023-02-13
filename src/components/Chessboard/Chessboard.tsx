import Square from "../Square/Square"
import "./Chessboard.css"

const files = ["a", "b", "c", "d", "e", "f", "g", "h"]
const ranks = ["1", "2", "3", "4", "5", "6", "7", "8"]

export default function Chessboard() {
  let board = []

  for (let i = ranks.length - 1; i >= 0; i--) {
    for (let j = 0; j < files.length; j++) {
      const squareID = `${files[j]}${ranks[i]}`
      board.push(<Square number={i + j} name={squareID} key={squareID} />)
    }
  }

  return (
    <div className="chessboard-border">
      <div className="chessboard">
        {board}
      </div>
    </div>
  )
}
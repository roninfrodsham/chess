import "./Square.css"
import Piece from "../Piece/Piece"

type props = {
  number: number;
  name: string;
}

export default function Square({number, name}: props) {
  const squareColour = (number % 2 === 0) ? "dark" : "light"
  return <div className={`square ${squareColour}`} data-square={name}><Piece piece="Pawn" colour="light" /></div>
}
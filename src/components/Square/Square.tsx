import { Piece } from '../Piece/'
import './Square.css'

type props = {
  number: number;
  name: string;
  piece?: string;
  colour?: string;
}

export function Square({number, name, piece, colour}: props) {
  const squareColour = (number % 2 === 0) ? 'dark' : 'light'
  return (
    <div className={`square ${squareColour}`} data-square={name}>
      {(piece !== "" && colour != "") && <Piece piece={piece} colour={colour} />}
    </div>
  )
}
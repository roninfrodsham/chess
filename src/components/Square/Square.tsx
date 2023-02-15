import { Piece } from '../Piece/'

import './Square.css'

type props = {
  number: number;
  name: string;
  piece: string;
}

export function Square({number, name, piece}: props) {
  const squareColour = (number % 2 === 0) ? 'dark' : 'light'
  return (
    <div className={`square ${squareColour}`} data-square={name}>
      {(piece !== "") && <Piece piece={piece} />}
    </div>
  )
}
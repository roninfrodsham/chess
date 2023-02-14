import { Square } from '../Square/'
import { pieceData } from './piecesData'
import './Chessboard.css'

const files = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h']
const ranks = ['1', '2', '3', '4', '5', '6', '7', '8']

export function Chessboard() {
  let board = []

  for (let i = ranks.length - 1; i >= 0; i--) {
    for (let j = 0; j < files.length; j++) {
      const squareID = `${files[j]}${ranks[i]}`
      let piece = ""
      let colour = ""
      if(pieceData[squareID] !== undefined) {
        piece = pieceData[squareID].piece;
        colour = pieceData[squareID].colour;
      }
      board.push(<Square key={squareID} number={i + j} name={squareID} piece={piece} colour={colour} />)
    }
  }

  return (
    <div className='chessboard-border'>
      <div className='chessboard'>
        {board}
      </div>
    </div>
  )
}
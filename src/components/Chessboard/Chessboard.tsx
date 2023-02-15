import React from 'react'
import { Square } from '../Square/'
import { pieceData } from './piecesData'

import './Chessboard.css'

const files = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h']
const ranks = ['1', '2', '3', '4', '5', '6', '7', '8']

function grabChessPiece(e: React.MouseEvent<Element, MouseEvent>): void {
  console.log(e.target)
}

export function Chessboard() {
  let board = []

  for (let i = ranks.length - 1; i >= 0; i--) {
    for (let j = 0; j < files.length; j++) {
      const squareID = `${files[j]}${ranks[i]}`
      let piece = ""

      if(pieceData[squareID] !== undefined) {
        piece = pieceData[squareID].piece;
      }
      
      board.push(<Square key={squareID} number={i + j} name={squareID} piece={piece} />)
    }
  }

  return (
    <div className='chessboard-border'>
      <div className='chessboard' onMouseDown={e => grabChessPiece(e)}>
        {board}
      </div>
    </div>
  )
}
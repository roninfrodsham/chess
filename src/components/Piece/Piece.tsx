import PawnBlack from './pieces/pawn_black.png'
import PawnWhite from './pieces/pawn_white.png'
import KnightBlack from './pieces/knight_black.png'
import KnightWhite from './pieces/knight_white.png'
import BishopBlack from './pieces/bishop_black.png'
import BishopWhite from './pieces/bishop_white.png'
import RookBlack from './pieces/rook_black.png'
import RookWhite from './pieces/rook_white.png'
import QueenBlack from './pieces/queen_black.png'
import QueenWhite from './pieces/queen_white.png'
import KingBlack from './pieces/king_black.png'
import KingWhite from './pieces/king_white.png'

import './Piece.css'

type PieceProps = {
  piece: string;
}

type PieceComponentProps = {
  [key: string]: string;
}

const PieceComponents: PieceComponentProps = {
  'PawnBlack': PawnBlack,
  'PawnWhite': PawnWhite,
  'KnightBlack': KnightBlack,
  'KnightWhite': KnightWhite,
  'BishopBlack': BishopBlack,
  'BishopWhite': BishopWhite,
  'RookBlack': RookBlack,
  'RookWhite': RookWhite,
  'QueenBlack': QueenBlack,
  'QueenWhite': QueenWhite,
  'KingBlack': KingBlack,
  'KingWhite': KingWhite,
}

export function Piece({piece}: PieceProps) {
  const pieceClass = piece.replace(/Black|White/g, '')
  return <div className={`piece ${pieceClass}`} style={{backgroundImage: `url(${PieceComponents[piece]})`}}></div>
}
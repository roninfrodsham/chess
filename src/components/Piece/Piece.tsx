import { HTMLAttributes } from 'react'
import { Pawn, Knight, Bishop, Rook, Queen, King } from './Pieces'

interface Props extends HTMLAttributes<SVGElement> {
  colour: string;
}

type PieceComponentProps = {
  [key: string]: React.FC<Props>;
}

type PieceProps = {
  piece: string;
  colour: string;
}

export function Piece({piece, colour}: PieceProps) {
  const PieceComponents: PieceComponentProps = {
    'Pawn': Pawn,
    'Knight': Knight,
    'Bishop': Bishop,
    'Rook': Rook,
    'Queen': Queen,
    'King': King,
  }
  const Component = PieceComponents[piece]

  return <Component colour={colour} />
}
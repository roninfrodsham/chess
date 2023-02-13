import { Pawn, Knight, Bishop, Rook, Queen, King } from "./Pieces";

type PieceComponentProps = {
  [key: string]: React.FC;
}

type PieceProps = {
  piece: string;
  colour: string;
}

export default function Piece({piece, colour}: PieceProps) {
  const PieceComponents: any = {
    "Pawn": Pawn,
    "Knight": Knight,
    "Bishop": Bishop,
    "Rook": Rook,
    "Queen": Queen,
    "King": King,
  }
  const Component = PieceComponents[piece]
  console.log(colour);

  return <Component colour="light" />
}
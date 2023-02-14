export type PiecesProps = {
  [key: string]: {
    piece: string;
    colour: string;
  }
}

export const pieceData: PiecesProps = {
  a1: { piece: "Rook", colour: "light" },
  b1: { piece: "Knight", colour: "light" },
  c1: { piece: "Bishop", colour: "light" },
  d1: { piece: "Queen", colour: "light" },
  e1: { piece: "King", colour: "light" },
  f1: { piece: "Bishop", colour: "light" },
  g1: { piece: "Knight", colour: "light" },
  h1: { piece: "Rook", colour: "light" },
  a2: { piece: "Pawn", colour: "light" },
  b2: { piece: "Pawn", colour: "light" },
  c2: { piece: "Pawn", colour: "light" },
  d2: { piece: "Pawn", colour: "light" },
  e2: { piece: "Pawn", colour: "light" },
  f2: { piece: "Pawn", colour: "light" },
  g2: { piece: "Pawn", colour: "light" },
  h2: { piece: "Pawn", colour: "light" },
  a7: { piece: "Pawn", colour: "black" },
  b7: { piece: "Pawn", colour: "black" },
  c7: { piece: "Pawn", colour: "black" },
  d7: { piece: "Pawn", colour: "black" },
  e7: { piece: "Pawn", colour: "black" },
  f7: { piece: "Pawn", colour: "black" },
  g7: { piece: "Pawn", colour: "black" },
  h7: { piece: "Pawn", colour: "black" },
  a8: { piece: "Rook", colour: "black" },
  b8: { piece: "Knight", colour: "black" },
  c8: { piece: "Bishop", colour: "black" },
  d8: { piece: "Queen", colour: "black" },
  e8: { piece: "King", colour: "black" },
  f8: { piece: "Bishop", colour: "black" },
  g8: { piece: "Knight", colour: "black" },
  h8: { piece: "Rook", colour: "black" },
}

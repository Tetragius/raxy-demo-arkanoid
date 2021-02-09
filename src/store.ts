import { raxyReact } from "@tetragius/raxy-react";

interface IBox {
  x?: number;
  y?: number;
  width?: number;
  height?: number;
}

interface IBrick extends IBox {
  init?: boolean;
  removed?: boolean;
}

interface IBall extends IBox {
  stick: boolean;
  a: number;
  r: number;
  k: -1 | 1;
}

interface IGame {
  game: IBox;
  bricks: IBox[];
  bit: IBox;
  base: IBox;
  ball: IBall;
}

const initStore: IGame = {
  game: { width: 800, height: 600 },
  bricks: [
    { x: 0, y: 0 },
    { x: 100, y: 0 },
    { x: 200, y: 0 },
    { x: 300, y: 0 },
    { x: 400, y: 0 },
    { x: 500, y: 0 },
    { x: 600, y: 0 },
    { x: 700, y: 0 },
    { x: 0, y: 30 },
    { x: 100, y: 30 },
    { x: 200, y: 30 },
    { x: 300, y: 30 },
    { x: 400, y: 30 },
    { x: 500, y: 30 },
    { x: 600, y: 30 },
    { x: 700, y: 30 },
    { x: 0, y: 60 },
    { x: 100, y: 60 },
    { x: 200, y: 60 },
    { x: 300, y: 60 },
    { x: 400, y: 60 },
    { x: 500, y: 60 },
    { x: 600, y: 60 },
    { x: 700, y: 60 },
    { x: 0, y: 90 },
    { x: 100, y: 90 },
    { x: 200, y: 90 },
    { x: 300, y: 90 },
    { x: 400, y: 90 },
    { x: 500, y: 90 },
    { x: 600, y: 90 },
    { x: 700, y: 90 },
    { x: 0, y: 120 },
    { x: 100, y: 120 },
    { x: 200, y: 120 },
    { x: 300, y: 120 },
    { x: 400, y: 120 },
    { x: 500, y: 120 },
    { x: 600, y: 120 },
    { x: 700, y: 120 }
  ],
  base: { x: 0, y: 0 },
  bit: { x: 150, y: 52, height: 8, width: 150 },
  ball: { x: 150, y: 60, stick: true, a: Math.PI / 4, r: 15, k: 1 }
};

const instanse = raxyReact(initStore);

export const { store, transaction, subscribe, useRaxy } = instanse;
export default instanse;

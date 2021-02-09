import { subscribe } from "./store";

const h = 60;
const r = 30;

const checkBit = (base: any, x: number, y: number, a: number, x1: number) => {
  if (x >= x1 && x <= x1 + 150 && y <= h) {
    base.x = x;
    base.y = -h - 1;
    return -a;
  }
  return a;
};

const checkWindow = (
  game: any,
  ball: any,
  base: any,
  x: number,
  y: number,
  a: number,
  x1: number,
  width: number
) => {
  a = checkBit(base, x, y, a, x1);

  if (x + r >= game.width || y + r >= game.height || x <= 0) {
    base.x = x - ball.k * 1;
    base.y = -y;
    if (x + r >= game.width) {
      ball.k = -1;
    }
    if (x <= 0) {
      ball.k = 1;
    }

    return -a;
  }

  if (y <= 0) {
    base.x = 0;
    base.y = 0;
    ball.stick = true;
    return Math.abs(a);
  }

  return a;
};

subscribe("update", (e) => {
  const a = e.detail.store.ball.a;
  const x = e.detail.store.ball.x;
  const x0 = e.detail.store.base.x;
  const y0 = e.detail.store.base.y;
  const k = e.detail.store.ball.k;
  if (!e.detail.store.ball.stick) {
    e.detail.store.ball.x = x + k * 1;

    const y = (x - x0) * Math.tan(a) - y0;
    e.detail.store.ball.y = y;

    e.detail.store.ball.a = checkWindow(
      e.detail.store.game,
      e.detail.store.ball,
      e.detail.store.base,
      x,
      y,
      a,
      e.detail.store.bit.x,
      e.detail.store.bit.width
    );
  } else {
    e.detail.store.base.y = x * Math.tan(a) - h;
  }
});

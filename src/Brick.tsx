import React, { useRef, useEffect } from "react";
import { useRaxy } from "./store";

const checkBrick = (game: any, brick: any, ball: any, base: any, elem: any) => {
  const rect = elem?.current?.getBoundingClientRect();

  if (!rect && !brick.init) {
    return true;
  }

  if (brick.removed) {
    return false;
  }

  if (
    rect &&
    brick.init &&
    ball.x >= rect.left &&
    ball.x <= rect.right &&
    ball.y > game.height - rect.bottom - 30 &&
    ball.y < game.height - rect.top
  ) {
    if (ball.x - rect.left < 15 || rect.right - ball.x < 15) {
      ball.k = -ball.k;
    }

    base.x = ball.x - ball.k * 1;
    base.y = -ball.y;
    ball.a = -ball.a;
    brick.removed = true;
    return false;
  }
};

export default function Brik(props: any) {
  const ref = useRef<HTMLDivElement>(null);
  const { state } = useRaxy((store) => ({
    display: checkBrick(store.game, props.brick, store.ball, store.base, ref)
  }));

  // @ts-ignore:
  useEffect(() => (props.brick.init = true), []);

  return state.display ?? true ? (
    <div
      ref={ref}
      className="brik"
      style={{
        left: `${props.brick.x}px`,
        top: `${props.brick.y}px`
      }}
    />
  ) : null;
}

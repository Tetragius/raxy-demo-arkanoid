import React, { useEffect, useRef } from "react";
import Brick from "./Brick";
import Ball from "./Ball";
import Bit from "./Bit";
import { useRaxy } from "./store";

export default function Game() {
  const ref = useRef<HTMLDivElement>(null);
  const ballRef = useRef<HTMLDivElement>(null);
  const bitRef = useRef<HTMLDivElement>(null);
  const { store, state } = useRaxy(
    (store) => ({
      bricks: store.bricks,
      game: store.game
    }),
    { game: { ignoreTimeStamp: true }, bricks: { ignoreTimeStamp: true } }
  );

  useEffect(() => {
    document.body.addEventListener("click", () => {
      store.ball.stick = false;
      store.ball.a = Math.PI / 4;
    });
  }, []);

  return (
    <div
      ref={ref}
      className="game"
      style={{
        height: `${state.game.height}px`,
        width: `${state.game.width}px`
      }}
    >
      {state.bricks.map((brick: any, idx: number) => (
        <Brick key={idx} brick={brick} />
      ))}
      <Bit ref={bitRef} />
      <Ball ref={ballRef} />
    </div>
  );
}

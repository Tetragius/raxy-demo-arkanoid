import React from "react";
import { useRaxy } from "./store";

export default function Score() {
  const { state } = useRaxy((store) => ({
    score: store.bricks.filter((brick) => !brick.removed).length
  }));

  return <div className="score">Blocks : {state.score}</div>;
}

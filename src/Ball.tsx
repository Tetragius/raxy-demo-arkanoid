import React, { forwardRef } from "react";
import { useRaxy } from "./store";

const Ball = forwardRef((props, ref: any) => {
  const { state } = useRaxy((store) => ({ ball: store.ball, x: store.ball.x }));

  return (
    <div
      ref={ref}
      className="ball"
      style={{ bottom: `${state.ball.y}px`, left: `${state.ball.x}px` }}
    />
  );
});

export default Ball;

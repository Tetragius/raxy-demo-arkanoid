import React, { forwardRef, useCallback, useEffect } from "react";
import { useRaxy } from "./store";

const Bit = forwardRef((props, ref: any) => {
  const { state, store } = useRaxy((store) => ({ bit: store.bit, x: store.bit.x }));

  const move = useCallback((e) => {
    state.bit.x = e.x;
    if (store.ball.stick) {
      store.ball.x = state.bit.x;
      store.ball.y = 60;
    }
  }, []);

  useEffect(() => document.body.addEventListener("mousemove", move), []);

  return (
    <div
      ref={ref}
      className="bit"
      style={{
        left: `${state.bit.x}px`,
        bottom: `${state.bit.y}px`,
        width: `${state.bit.width}px`
      }}
    />
  );
});

export default Bit;

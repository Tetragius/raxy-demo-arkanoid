import React from "react";
import { Raxy } from "@tetragius/raxy-react";
import instanse from "./store";
import Game from "./Game";
import Score from "./Score";
import "./service";

import "./styles.css";

export default function App() {
  return (
    <Raxy value={instanse}>
      <div className="container">
        <Game />
        <Score />
      </div>
    </Raxy>
  );
}

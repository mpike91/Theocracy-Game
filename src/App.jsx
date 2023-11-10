import { useState } from "react";
import "./App.css";

function App() {
  return (
    <>
      {/* P1 Defense */}
      <Board numCards={4}>Defense</Board>

      {/* P1 Kingdoms */}
      <Board x="750" numCards={4}>
        Kingdoms
      </Board>
      <Board x="750" y="140" numCards={4}></Board>

      {/* Center Board / Hostile Kingdoms */}
      <Board className="board-center" x="635" y="250" numCards={5}>
        Hostile Kingdoms
      </Board>

      {/* P2 Defense */}
      <Board y="545" numCards={4}>
        Defense
      </Board>

      {/* P2 Kingdoms */}
      <Board x="750" y="465" numCards={4}>
        Kingdoms
      </Board>
      <Board x="750" y="585" numCards={4}></Board>
    </>
  );
}

function Board({ className, numCards, x = "20", y = "20", children }) {
  console.log(children);
  const cards = Array.from({ length: numCards }, (x, i) => i);
  return (
    <div className={`board ${className}`} style={{ margin: `${y}px ${x}px` }}>
      <h1>{children}</h1>
      {cards.map((x, i) => (
        <Card key={i} id={i + 1} />
      ))}
    </div>
  );
}

function Card({ id }) {
  return (
    <div className="card" onClick={(e) => console.log(id)}>
      {id}
    </div>
  );
}

export default App;

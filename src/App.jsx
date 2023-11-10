import { useState } from "react";
import "./App.css";

function App() {
  return (
    <>
      <Board className="contractors" numCards={5}>
        {{ title: "Contractors" }}
      </Board>
      <Board className="kingdom" numCards={4}>
        {{ title: "Kingdoms" }}
      </Board>
      <Board className="kingdom" numCards={4}></Board>
      <Board className="board-center" numCards={5}>
        {{ title: "Hostile Kingdoms" }}
      </Board>
      <Board className="contractors" numCards={5}>
        {{ title: "Contractors" }}
      </Board>
      <Board className="kingdom" numCards={4}>
        {{ title: "Kingdoms" }}
      </Board>
      <Board className="kingdom" numCards={4}></Board>
    </>
  );
}

function Board({ className, numCards, children = { title: "" } }) {
  console.log(children);
  const cards = Array.from({ length: numCards }, (x, i) => i);
  return (
    <div className={className}>
      <h1>{children.title}</h1>
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

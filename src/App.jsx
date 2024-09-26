import { useEffect, useState } from "react";
import "./App.css";
import { Header } from "./components/Header";
import { Scoreboard } from "./components/Scoreboard";
import { Card } from "./components/Card";
import { useGameLogic } from "./hooks/useGameLogic";

function App() {
  const headerData = {
    title: "Memory Card Game",
    body: `The game is simple: 
            Select as many unique cards as you can.
            You loose if you repeat a selection`,
  };

  const mockButtons = [
    { id: 1, name: "a button", image: "img" },
    { id: 2, name: "other button", image: "img" },
    { id: 3, name: "one more button", image: "img" },
    { id: 4, name: "last button", image: "img" },
  ];

  const { currentScore, highestScore, checkPickedCard } =
    useGameLogic(mockButtons);

  return (
    <>
      <Header title={headerData.title} body={headerData.body} />
      <Scoreboard currentScore={currentScore} highestScore={highestScore} />
      <div className="card-grid">
        {mockButtons.map((card) => (
          <Card
            key={card.id}
            id={card.id}
            name={card.name}
            image={""}
            onCardPick={checkPickedCard}
          />
        ))}
      </div>
    </>
  );
}

export default App;

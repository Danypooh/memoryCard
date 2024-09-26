import { useState } from "react";
import "./App.css";
import { Header } from "./components/Header";
import { Scoreboard } from "./components/Scoreboard";
import { useGameLogic } from "./hooks/useGameLogic";

function App() {
  const [count, setCount] = useState(0);

  const headerData = {
    title: "Memory Card Game",
    body: `The game is simple: 
            Select as many unique cards as you can.
            You loose if you repeat a selection`,
  };

  const mockButtons = [
    { id: 1, name: "a button" },
    { id: 2, name: "other button" },
    { id: 3, name: "one more button" },
    { id: 4, name: "last button" },
  ];

  const { checkPickedButton, currentScore, highestScore } =
    useGameLogic(mockButtons);

  return (
    <>
      <Header title={headerData.title} body={headerData.body} />
      <Scoreboard currentScore={currentScore} highestScore={highestScore} />
      <div className="card-grid">
        {mockButtons.map((btn) => (
          <button key={btn.id} onClick={() => checkPickedButton(btn.id)}>
            {btn.id}: {btn.name}
          </button>
        ))}
      </div>
    </>
  );
}

export default App;

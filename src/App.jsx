import "./App.css";
import { Header } from "./components/Header";
import { Scoreboard } from "./components/Scoreboard";
import { Card } from "./components/Card";
import { useFetchCards } from "./hooks/useFetchCards";
import { useGameLogic } from "./hooks/useGameLogic";

function App() {
  const headerData = {
    title: "Memory Card Game",
    body: `The game is simple: 
            Select as many unique cards as you can.
            You loose if you repeat a selection`,
  };

  const { cards, loading } = useFetchCards(
    "https://pokeapi.co/api/v2/pokemon?limit=12"
  );
  const { currentScore, highestScore, checkPickedCard } = useGameLogic(cards);

  if (loading) return <p>Loading...</p>;

  return (
    <>
      <Header title={headerData.title} body={headerData.body} />
      <Scoreboard currentScore={currentScore} highestScore={highestScore} />
      <div className="card-grid">
        {cards.map((card) => (
          <Card
            key={card.id}
            id={card.id}
            name={card.name}
            image={card.image}
            onCardPick={checkPickedCard}
          />
        ))}
      </div>
    </>
  );
}

export default App;

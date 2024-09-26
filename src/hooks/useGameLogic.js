import { useState } from "react";

function useGameLogic(mockCards) {
  const [selectedCards, setSelectedCards] = useState([]);
  const [currentScore, setCurrentScore] = useState(0);
  const [highestScore, setHighestScore] = useState(0);

  const checkPickedCard = (id) => {
    if (selectedCards.includes(id)) {
      resetGame();
    } else {
      const newScore = currentScore + 1;
      setCurrentScore(newScore);
      setSelectedCards([...selectedCards, id]);

      if (newScore > highestScore) {
        setHighestScore(newScore);
      }

      if (newScore === mockCards.length) {
        alert("You win!");
        resetGame();
      }
    }
  };

  const resetGame = () => {
    setCurrentScore(0);
    setSelectedCards([]);
  };

  return { checkPickedCard, currentScore, highestScore };
}

export { useGameLogic };

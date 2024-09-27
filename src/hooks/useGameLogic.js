import { useState, useEffect } from "react";

function useGameLogic(cards) {
  const [selectedCards, setSelectedCards] = useState([]);
  const [currentScore, setCurrentScore] = useState(0);
  const [highestScore, setHighestScore] = useState(0);
  const [shuffledCards, setShuffledCards] = useState([]);

  useEffect(() => {
    if (cards.length > 0) {
      setShuffledCards(shuffleCards(cards));
    }
  }, [cards]);

  const checkPickedCard = (id) => {
    setShuffledCards(shuffleCards(cards));
    if (selectedCards.includes(id)) {
      resetGame();
    } else {
      const newScore = currentScore + 1;
      setCurrentScore(newScore);
      setSelectedCards([...selectedCards, id]);

      if (newScore > highestScore) {
        setHighestScore(newScore);
      }

      if (newScore === cards.length) {
        alert("You win!");
        resetGame();
      }
    }
  };

  const shuffleCards = (cardsArray) => {
    return cardsArray.sort(() => Math.random() - 0.5);
  };

  const resetGame = () => {
    setCurrentScore(0);
    setSelectedCards([]);
  };

  return { checkPickedCard, currentScore, highestScore };
}

export { useGameLogic };

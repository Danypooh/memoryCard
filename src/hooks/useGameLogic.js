import { useState } from "react";

function useGameLogic(mockButtons) {
  const [selectedButtons, setSelectedButtons] = useState([]);
  const [currentScore, setCurrentScore] = useState(0);
  const [highestScore, setHighestScore] = useState(0);

  const checkPickedButton = (id) => {
    if (selectedButtons.includes(id)) {
      resetGame();
    } else {
      const newScore = currentScore + 1;
      setCurrentScore(newScore);
      setSelectedButtons([...selectedButtons, id]);

      if (newScore > highestScore) {
        setHighestScore(newScore);
      }

      if (newScore === mockButtons.length) {
        alert("You win!");
        resetGame();
      }
    }
  };

  const resetGame = () => {
    setCurrentScore(0);
    setSelectedButtons([]);
  };

  return { checkPickedButton, currentScore, highestScore };
}

export { useGameLogic };

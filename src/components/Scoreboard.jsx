function Scoreboard({ currentScore, highestScore }) {
  return (
    <>
      <div id="score-container">
        <div>Current Score: {currentScore}</div>
        <div>Highest Score: {highestScore}</div>
      </div>
    </>
  );
}

export { Scoreboard };

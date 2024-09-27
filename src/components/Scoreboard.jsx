function Scoreboard({ currentScore, highestScore }) {
  return (
    <div id="score-container" className="container mt-3">
      <div className="row">
        <div className="col-md-3">
          <div className="card shadow-lg">
            <div className="card-body">
              <div>Current Score: {currentScore}</div>
              <div>Highest Score: {highestScore}</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export { Scoreboard };

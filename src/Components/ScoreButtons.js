import React from 'react';

export default function ScoreButtons({handleScore, handleQuarter}) {

  return (
    <section className="buttons">
      <div className="homeButtons">
        {/* TODO STEP 4 - Now we need to attach our state setter functions to click listeners. */}
        <button className="homeButtons__touchdown" onClick={() => handleScore('home', 7)}>Home Touchdown</button>
        <button className="homeButtons__fieldGoal" onClick={() => handleScore('home', 3)}>Home Field Goal</button>
      </div>
      <div className="awayButtons">
        <button className="awayButtons__touchdown" onClick={() => handleScore('away', 7)}>Away Touchdown</button>
        <button className="awayButtons__fieldGoal" onClick={() => handleScore('away', 3)}>Away Field Goal</button>
      </div>
      <div className="awayButtons">
        <button className="awayButtons__touchdown" onClick={handleQuarter}>Remaining Quarter</button>
      </div>
    </section>
  );
}
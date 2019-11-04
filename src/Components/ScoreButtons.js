import React from 'react';

export default function ScoreButtons() {
  const [lionsScore, setLionsScore] = useState(0);
  const [tigersScore, setTigersScore] = useState(10);

  return (
    <section className="buttons">
      <div className="homeButtons">
        {/* TODO STEP 4 - Now we need to attach our state setter functions to click listeners. */}
        <button className="homeButtons__touchdown" onClick={() => setLionsScore(lionsScore + 7)}>Home Touchdown</button>
        <button className="homeButtons__fieldGoal" onClick={() => setLionsScore(lionsScore + 3)}>Home Field Goal</button>
      </div>
      <div className="awayButtons">
        <button className="awayButtons__touchdown" onClick={() => setTigersScore(tigersScore + 7)}>Away Touchdown</button>
        <button className="awayButtons__fieldGoal" onClick={() => setTigersScore(tigersScore + 3)}>Away Field Goal</button>
      </div>
    </section>
  );
}
import React from 'react';
import './HallOfFame.css';

export const HallOfFame = () => {
  const topPerformers = [
    {
      rank: 1,
      username: "ByteMaster",
      score: 15800,
      questsCompleted: 127,
      specialty: "Dynamic Programming",
      badge: "⚔️ Legend",
    },
    {
      rank: 2,
      username: "AlgoQueen",
      score: 14200,
      questsCompleted: 115,
      specialty: "Graph Algorithms",
      badge: "🛡️ Champion",
    },
    {
      rank: 3,
      username: "CodeWarrior",
      score: 13900,
      questsCompleted: 108,
      specialty: "Tree Traversal",
      badge: "⚔️ Elite",
    },
    // Add more users as needed
  ];

  return (
    <div className="hall-of-fame">
      <div className="fame-header">
        <h1>Hall of Fame</h1>
        <p className="subtitle">Legendary Code Warriors</p>
      </div>

      <div className="leaderboard">
        {topPerformers.map((performer, index) => (
          <div 
            key={performer.username} 
            className={`leaderboard-card ${index === 0 ? 'top-performer' : ''}`}
          >
            <div className="rank-badge">
              <span className="rank">{performer.rank}</span>
            </div>
            
            <div className="performer-details">
              <h3 className="username">{performer.username}</h3>
              <div className="stats-grid">
                <div className="stat">
                  <span className="stat-label">Score</span>
                  <span className="stat-value">{performer.score}</span>
                </div>
                <div className="stat">
                  <span className="stat-label">Quests</span>
                  <span className="stat-value">{performer.questsCompleted}</span>
                </div>
                <div className="stat">
                  <span className="stat-label">Specialty</span>
                  <span className="stat-value specialty">{performer.specialty}</span>
                </div>
              </div>
              <div className="badge">{performer.badge}</div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

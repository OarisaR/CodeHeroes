import React, { useState, useEffect } from 'react';
import './Arena.css';

export const Arena = () => {
  const questions = [
    {
      question: "What is the time complexity of QuickSort in the average case?",
      options: ["O(n)", "O(n log n)", "O(n²)", "O(log n)"],
      correctAnswer: "O(n log n)"
    },
    {
      question: "Which data structure uses LIFO principle?",
      options: ["Queue", "Stack", "Tree", "Graph"],
      correctAnswer: "Stack"
    },
    {
      question: "What is the space complexity of a recursive fibonacci function?",
      options: ["O(1)", "O(n)", "O(log n)", "O(2^n)"],
      correctAnswer: "O(n)"
    },
    {
      question: "Which sorting algorithm has the best average case performance?",
      options: ["Bubble Sort", "Merge Sort", "Selection Sort", "Insertion Sort"],
      correctAnswer: "Merge Sort"
    },
    {
      question: "What is the time complexity of binary search?",
      options: ["O(n)", "O(n log n)", "O(log n)", "O(1)"],
      correctAnswer: "O(log n)"
    }
  ];
  const [players, setPlayers] = useState([
    {
      id: 1,
      username: "ByteMaster",
      avatar: "⚔️",
      score: 0,
      status: "ready",
      currentStreak: 0
    },
    {
      id: 2,
      username: "CodeWarrior",
      avatar: "🛡️",
      score: 0,
      status: "ready",
      currentStreak: 0
    }
  ]);

 
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [currentQuestion, setCurrentQuestion] = useState(questions[0]);
  const [timer, setTimer] = useState(30);
  const [gameStatus, setGameStatus] = useState("waiting");

  useEffect(() => {
    if (gameStatus === "active" && timer > 0) {
      const interval = setInterval(() => {
        setTimer((prev) => prev - 1);
      }, 1000);
      return () => clearInterval(interval);
    }
  }, [gameStatus, timer]);
 
  const handleAnswer = (playerId, answer) => {
    setPlayers(players.map(player => {
      if (player.id === playerId) {
        const isCorrect = answer === currentQuestion.correctAnswer;
        return {
          ...player,
          score: isCorrect ? player.score + (timer * 10) : player.score,
          currentStreak: isCorrect ? player.currentStreak + 1 : 0,
          status: "answered"
        };
      }
      return player;
    }));
     // Move to next question
     if (currentQuestionIndex < questions.length - 1) {
      setCurrentQuestionIndex(prev => prev + 1);
      setCurrentQuestion(questions[currentQuestionIndex + 1]);
      setTimer(30); // Reset timer
      // Reset player status
      setPlayers(players => players.map(player => ({
        ...player,
        status: "ready"
      })));
    } else {
      setGameStatus("finished");
    }
  };
 
  // ... rest of the component remains exactly the same ...
  return (
    <div className="arena-container">
      <div className="arena-header">
        <h1>Code Battle Arena</h1>
        <div className="battle-timer">
          <span className="timer-value">{timer}</span>
          <span className="timer-label">seconds</span>
        </div>
      </div>

      <div className="battle-ground">
        <div className="players-container">
          {players.map((player) => (
            <div key={player.id} className={`player-card ${player.status}`}>
              <div className="player-avatar">{player.avatar}</div>
              <div className="player-info">
                <h3 className="player-name">{player.username}</h3>
                <div className="player-stats">
                  <span className="player-score">Score: {player.score}</span>
                  {player.currentStreak > 1 && (
                    <span className="streak-badge">
                      {player.currentStreak}x Streak!
                    </span>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="battle-arena">
          <div className="queston-container">
            <h2 className="question-text">{currentQuestion.question}</h2>
            <div className="options-grid">
              {currentQuestion.options.map((option, index) => (
                <button
                  key={index}
                  className="option-button"
                  onClick={() => handleAnswer(1, option)}
                >
                  {option}
                </button>
              ))}
            </div>
          </div>

          <div className="battle-stats">
            <div className="stat-item">
              <span className="stat-label">Round</span>
              <span className="stat-value">{currentQuestionIndex + 1}/{questions.length}</span>
            </div>
            <div className="stat-item">
              <span className="stat-label">Time Bonus</span>
              <span className="stat-value">{timer * 10}</span>
            </div>
          </div>
        </div>
      </div>

      <div className="battle-controls">
        <button 
          className="control-btn"
          onClick={() => setGameStatus("active")}
          disabled={gameStatus === "active"}
        >
          Start Battle
        </button>
        <button className="control-btn">
          Invite Friend
        </button>
      </div>
    </div>
  );
};
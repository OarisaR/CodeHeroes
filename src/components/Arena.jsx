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
    let interval;
    if (gameStatus === "active" && timer > 0) {
      interval = setInterval(() => {
        setTimer((prevTimer) => {
          if (prevTimer <= 1) {
            handleAnswer(1, ""); // Auto-submit on timer end
            return 30;
          }
          return prevTimer - 1;
        });
      }, 1000);
    }
    return () => clearInterval(interval);
  }, [gameStatus, currentQuestionIndex]);
 
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
      const nextIndex = currentQuestionIndex + 1;
      setCurrentQuestionIndex(nextIndex);
      setCurrentQuestion(questions[nextIndex]);
      
      // Reset player status only
      setPlayers(prevPlayers => prevPlayers.map(player => ({
        ...player,
        status: "ready"
      })));
    } else {
      setGameStatus("finished");
    }
  };
  const startBattle = () => {
    setGameStatus("active");
    setTimer(30);
    setCurrentQuestionIndex(0);
    setCurrentQuestion(questions[0]);
    setPlayers(players.map(player => ({
      ...player,
      score: 0,
      status: "ready",
      currentStreak: 0
    })));
  };
  // ... rest of the component remains exactly the same ...

  const determineWinner = () => {
    const sortedPlayers = [...players].sort((a, b) => b.score - a.score);
    if (sortedPlayers[0].score === sortedPlayers[1].score) {
      return 'draw';
    }
    return sortedPlayers[0];
  };
  return (
  <div className="arena-container">
    {gameStatus === "finished" ? (
      <div className="winner-declaration">
        <div className="trophy-animation">🏆</div>
        {determineWinner() === 'draw' ? (
          <h2 className="winner-title">It's a Draw!</h2>
        ) : (
          <>
            <h2 className="winner-title">Victory!</h2>
            <div className="winner-card">
              <div className="winner-avatar">{determineWinner().avatar}</div>
              <div className="winner-details">
                <h3>{determineWinner().username}</h3>
                <p className="winner-score">Score: {determineWinner().score}</p>
              </div>
            </div>
          </>
        )}
        
        <div className="battle-summary">
          <h3>Battle Summary</h3>
          <div className="players-summary">
            {players.map(player => (
              <div key={player.id} className="player-summary-card">
                <div className="summary-header">
                  <span>{player.avatar}</span>
                  <span>{player.username}</span>
                </div>
                <div className="summary-stats">
                  <div className="stat">
                    <span>Final Score</span>
                    <span>{player.score}</span>
                  </div>
                  <div className="stat">
                    <span>Best Streak</span>
                    <span>{player.currentStreak}🔥</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="post-battle-actions">
          <button className="control-btn rematch-btn" onClick={startBattle}>
            Rematch 
          </button>
          <button className="control-btn share-btn">
            Share Results 
          </button>
        </div>
      </div>
    ) : (
      <>
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
            <div className="question-container">
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
            onClick={startBattle}
            disabled={gameStatus === "active"}
          >
            Start Battle
          </button>
          <button className="control-btn">
            Invite Friend
          </button>
        </div>
      </>
    )}
  </div>
);}

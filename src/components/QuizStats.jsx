import React from 'react';
import { useNavigate } from 'react-router-dom';
import './QuizStats.css';

export const QuizStats = ({ score, totalQuestions, topicId }) => {
  const navigate = useNavigate();
  const percentage = Math.round((score / totalQuestions) * 100);

  const getPerformanceMessage = () => {
    if (percentage >= 90) return "Outstanding! You're a master!";
    if (percentage >= 70) return "Great job! You're getting there!";
    if (percentage >= 50) return "Good effort! Keep practicing!";
    return "Keep learning! You'll get better!";
  };

  return (
    <div className="quiz-stats-container">
       <div className="symb symb-1">{`</>`}</div>
      <div className="symb symb-2">{`{ }`}</div>
      <div className="symb symb-3">#</div>
      <div className="symb symb-4">{`( )`}</div>
      <div className="symb symb-5">{`[ ]`}</div>
      <div className="symb symb-6">{`/>`}</div>
      <div className="symb symb-7">{`</`}</div>
      <div className="symb symb-8">{`=>`}</div>
      <div className="stats-card">
        <h2 className="stats-title">Quiz Completed! 🎉</h2>
        
        <div className="score-circle">
          <div className="percentage">{percentage}%</div>
          <div className="score-text">
            {score} / {totalQuestions}
          </div>
        </div>

        <p className="performance-message">{getPerformanceMessage()}</p>
        
        <div className="stats-actions">
          <button 
            className="retry-btn"
            onClick={() => window.location.reload()}
          >
             Try Again ⟲
          </button>
          <button 
            className="home-btn"
            onClick={() => navigate(`/topic/${topicId}`)}
          >
            Back to Topic ←
          </button>
        </div>
      </div>
    </div>
  );
};

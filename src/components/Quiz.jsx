import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import quizData from './quizData.json';
import './Quiz.css';
import { QuizStats } from './QuizStats';
export const Quiz = () => {
  
  const [isQuizCompleted, setIsQuizCompleted] = useState(false);
  const { topicId } = useParams();
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState(null);
  const [score, setScore] = useState(0);
  const [showFeedback, setShowFeedback] = useState(false);
  const [isCorrect, setIsCorrect] = useState(false);
  const questions = quizData[topicId].questions;

  const progress = ((currentQuestion + 1) / questions.length) * 100;
  const formatTopicName = (id) => {
    return id.split('-').map(word => 
      word.charAt(0).toUpperCase() + word.slice(1)
    ).join(' ');
  };

  const motivationalQuotes = [
    "You're doing great! Keep going!",
    "Every question makes you stronger!",
    "You're mastering this topic step by step!",
    "Stay focused, you're making progress!"
  ];

  const [currentQuote, setCurrentQuote] = useState(motivationalQuotes[0]);

  useEffect(() => {
    const quoteIndex = Math.floor((progress / 100) * motivationalQuotes.length);
    setCurrentQuote(motivationalQuotes[quoteIndex]);
  }, [progress]);

  const handleAnswerSelect = (answer) => {
    setSelectedAnswer(answer);
    const correct = answer === questions[currentQuestion].correctAnswer;
    setIsCorrect(correct);
    setShowFeedback(true);
    if (correct) {
      setScore(score + 1);
    }
  };

  const handleNextQuestion = () => {
    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
      setSelectedAnswer(null);
      setShowFeedback(false);
    } else {
      setIsQuizCompleted(true);
    }
  };

  if (isQuizCompleted) {
    return (
      <QuizStats 
        score={score}
        totalQuestions={questions.length}
        topicId={topicId}
      />
    );
  }
  return (
   
    <div className="quiz-container">
    
      <div className="quiz-header">
      <h1 className="topic-title">{formatTopicName(topicId)}</h1>
        <div className="score-display">
          Score: {score}/{questions.length}
        </div>
      </div>
      
      <div className="quiz-content">
        <div className="question-box">
          <div className="question-number">
            Question {currentQuestion + 1} of {questions.length}
          </div>
          <h2 className="question-text">
            {questions[currentQuestion].question}
          </h2>
          <div className="options-list">
            {questions[currentQuestion].options.map((option, index) => (
              <button
                key={index}
                className={`option-btn ${
                  selectedAnswer === option 
                    ? isCorrect 
                      ? 'correct' 
                      : 'incorrect'
                    : ''
                } ${showFeedback && option === questions[currentQuestion].correctAnswer ? 'correct' : ''}`}
                onClick={() => handleAnswerSelect(option)}
                disabled={selectedAnswer !== null}
              >
                {option}
              </button>
            ))}
          </div>
          {showFeedback && (
            <div className={`feedback-message ${isCorrect ? 'correct' : 'incorrect'}`}>
              {isCorrect ? '🎉 Correct!' : '❌ Try again next time!'}
            </div>
          )}
           {selectedAnswer && (
        <button className="next-btn" onClick={handleNextQuestion}>
          {currentQuestion < questions.length - 1 ? (
            <>Next Question <span className="arrow">←</span></>
          ) : (
            <>Finish Quiz <span className="arrow">🎉</span></>
          )}
        </button>
      )}
        </div>

        <div className="progress-section">
        <div className="progress-bar">
          <div 
            className="progress-fill" 
            style={{ height: `${progress}%` }}
          >
            <div className="progress-text">
              <div className="progress-percentage">
                {Math.round(progress)}%
              </div>
              <div className="question-count">
                {currentQuestion + 1} of {questions.length} Questions
              </div>
            </div>
          </div>
        </div>
          <div className="motivation-box">
            <p className="motivation-text">{currentQuote}</p>
          </div>
        </div>
      </div>
    </div>
 
  );
  

};
import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import './TopicIntro.css';
import cover1 from './cover1.jpg';

export const TopicIntro = () => {
  const { topicId } = useParams();
  const navigate = useNavigate();

  const handleStartQuiz = () => {
    navigate(`/quiz/${topicId}`);
  };

  const formatTopicName = (id) => {
    return id.split('-').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ');
  };

  return (
    <div className="topic-intro-container">
      <div className="banner-image">
        <img src={cover1} alt="Array Banner" />
        <div className="banner-overlay"></div>
      </div>
      <div className="topic-intro-grid">
        <div className="main-content">
          <h1 className="topic-tile">{formatTopicName(topicId)}</h1>
          <div className="topic-description">
            <p>
              Welcome, warrior! The <strong>{formatTopicName(topicId)}</strong> quest awaits. Arrays are the backbone of efficient data storage and retrieval. 
              Mastering them will forge your path to becoming a true coding hero. From dynamic memory allocation to solving complex problems efficiently, 
              arrays play a crucial role in software development. Understanding them thoroughly will empower you to tackle a wide range of coding challenges, 
              from algorithmic competitions to real-world applications.
            </p>
            <p>
              In this module, you will dive deep into different types of arrays, their manipulation techniques, and how they integrate with various algorithms.
              You will learn about searching and sorting within arrays, understand multidimensional arrays, and explore how arrays interact with other data structures.
              With hands-on practice, you'll develop a strong foundation to solve interview problems with confidence.
            </p>
            <button className="start-quiz-btn" onClick={handleStartQuiz}>
              Begin Your Quest <span className="arrow">⚔️</span>
            </button>
          </div>
        </div>
        <div className="side-content">
          <div className="learning-objectives">
            <h3>What You’ll Conquer</h3>
            <ul>
              <li><span className="objective-icon">📚</span> Array fundamentals & operations</li>
              <li><span className="objective-icon">🧩</span> Problem-solving strategies</li>
              <li><span className="objective-icon">⚡</span> Optimizing time & space complexity</li>
              <li><span className="objective-icon">🛠️</span> Hands-on implementation</li>
            </ul>
          </div>
          <div className="prerequisites">
            <h3>Prepare Your Arsenal</h3>
            <div className="skill-level">
              <div className="skill-meter">
                <div className="skill-fill"></div>
              </div>
              <span>Difficulty: Intermediate</span>
            </div>
            <div className="required-tools">
            <p style={{ textAlign: "left" }}>Gear Up:</p>
              <ul>
                <li>Modern web browser ⚔️</li>
                <li>Reliable code editor 🛡️</li>
                <li>Understanding of conditionals 🔄</li>
                <li>Familiarity with time complexity analysis ⏳</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
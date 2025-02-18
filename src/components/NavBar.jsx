import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './NavBar.css';
import sword from './sword.png';
import { HallOfFame } from './HallOfFame';

export const NavBar = () => {
  const [showTopics, setShowTopics] = useState(false);
  const navigate = useNavigate();

  return (
    <nav className="navbar">
      <div className="nav-items">
        <div className="brand-container">
          <img src={sword} alt="Sword icon" className="brand-icon" />
          <a href="#" className="brand">CodeHeroes</a>
        </div>
        <div className="nav-links">
          <div 
            className="nav-link" 
            onClick={() => navigate('/')}
            style={{ cursor: 'pointer' }}
          >
            Quests
          </div>
          <div 
            className="nav-link"
            onClick={() => navigate('/arena')}
            style={{ cursor: 'pointer' }}
          >
            Arena
          </div>
          <div 
            className="nav-link"
            onClick={() => navigate('/hall-of-fame')}
            style={{ cursor: 'pointer' }}
          >
            Hall of Fame
          </div>
          <div
            className="nav-link topics"
            onMouseEnter={() => setShowTopics(true)}
          >
            Topics
          </div>
          <div 
            className="nav-link"
            onClick={() => navigate('/contact')}
            style={{ cursor: 'pointer' }}
          >
            Contact
          </div>
        </div>
      </div>   
      {showTopics && (
        <div 
          className="topics-content" 
          onMouseEnter={() => setShowTopics(true)} 
          onMouseLeave={() => setShowTopics(false)}
        >
          <div className="topic-category">
            <h4>Basic Data Structures</h4>
            <a href="#">Arrays</a>
            <a href="#">Strings</a>
            <a href="#">Linked Lists</a>
            <a href="#">Stacks</a>
            <a href="#">Queues</a>
          </div>
          <div className="divider"></div>
          <div className="topic-category">
            <h4>Trees & Graphs</h4>
            <a href="#">Trees</a>
            <a href="#">Graphs</a>
            <a href="#">Heap</a>
          </div>
          <div className="divider"></div>
          <div className="topic-category">
            <h4>Algorithms</h4>
            <a href="#">Sorting</a>
            <a href="#">Searching</a>
            <a href="#">Recursion</a>
            <a href="#">Backtracking</a>
            <a href="#">Dynamic Programming</a>
          </div>
          <div className="divider"></div>
          <div className="topic-category">
            <h4>Advanced Topics</h4>
            <a href="#">Bit Manipulation</a>
            <a href="#">Sliding Window</a>
            <a href="#">Segment Tree</a>
            <a href="#">Disjoint Set (DSU)</a>
          </div>
        </div>
      )}
    </nav>
  );
};
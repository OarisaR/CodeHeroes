import React from "react";
import { useNavigate } from 'react-router-dom';
import "./FeatureGrid.css";
import img from "./img1.jpg";
import l1 from "./l1.jpg"
import l2 from "./l2.png"
import l3 from "./l3.jpg"
import l4 from "./l4.jpg"
import l5 from "./l5.jpg"
import l6 from "./l6.jpg"
import l8 from "./l8.png"
const FloatingElements = () => (
  <div className="floating-elements">
    <div className="code-symbo">&lt;/&gt;</div>
    <div className="code-symbo">{ }</div>
    <div className="code-symbo">#</div>
    <div className="code-symbo">( )</div>
    <div className="code-symbo">[]</div>
    <div className="code-symbo">//</div>
    <div className="code-symbo">=&gt;</div>
    <div className="code-symbo">;</div>
    <div className="code-symbo">++</div>
    <div className="code-symbo">&amp;&amp;</div>
  </div>
);

const FeatureCard = ({ title, description, image, topicId }) => {
  const navigate = useNavigate();

  const handleStartLearning = () => {
    navigate(`/topic/${topicId}`);
  };

  return (
    <div className="feature-card">
      <img src={image} alt={title} className="feature-image" />
      <div className="feature-content">
        <h3 className="feature-title">{title}</h3>
        <p className="feature-description">{description}</p>
        <button 
          className="difficulty-badge"
          onClick={handleStartLearning}
        >
          Start Learning
        </button>
      </div>
    </div>
  );
};

export const FeatureGrid = () => {
  const navigate = useNavigate();

  const handleTagClick = (tag) => {
    navigate(`/topic/${tag.toLowerCase()}`);
  };

  const features = [
    {
      title: "Array Mastery",
      description: "Understand the fundamentals of arrays and their applications in problem-solving.",
      image: img,
      topicId: "array"
    },
    {
      title: "Linked List Navigation",
      description: "Master linked lists and their variations to tackle complex data structures.",
      image: l1,
      topicId: "linked-list"
    },
    {
      title: "Stack Operations",
      description: "Learn about stack operations and their use in recursion and backtracking.",
      image: l2,
      topicId: "stack"
    },
    {
      title: "Queue Management",
      description: "Explore queue types such as FIFO and priority queues with practical examples.",
      image: l3,
      topicId: "queue"
    },
    {
      title: "Tree Structures",
      description: "Dive into trees, including binary trees, BSTs, and AVL trees.",
      image: l4,
      topicId: "tree"
    },
    {
      title: "Graph Algorithms",
      description: "Unravel graph algorithms like DFS, BFS, and shortest path techniques.",
      image: l5,
      topicId: "graph"
    },
    {
      title: "Sorting Techniques",
      description: "Learn sorting algorithms from bubble sort to quicksort with efficiency analysis.",
      image: l6,
      topicId: "sorting"
    },
    {
      title: "Hashing Strategies",
      description: "Understand hash tables, collision handling, and applications in search optimization.",
      image: l8,
      topicId: "hashing"
    },
    {
      title: "Heap and Priority Queues",
      description: "Master heap data structures and their applications in scheduling and optimization.",
      image: img,
      topicId: "heap"
    }
];

  return (
    <div className="feature-grid">
      <FloatingElements />
      <div className="tag-container">
        {[
          "Popular",
          "Array",
          "String",
          "Sorting",
          "Stack",
          "Queue",
          "Graph",
          "Tree",
          "Heap",
          "Hashing",
        ].map((tag) => (
          <span 
            key={tag} 
            className="tag"
            onClick={() => handleTagClick(tag)}
            style={{ cursor: 'pointer' }}
          >
            {tag}
          </span>
        ))}
      </div>
      <div className="feature-cards">
        {features.map((feature, index) => (
          <FeatureCard key={index} {...feature} />
        ))}
      </div>
    </div>
  );
};
import "./App.css";
import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Home } from "./components/Home";
import { TopicIntro } from "./components/TopicIntro";
import { Quiz } from "./components/Quiz";
import { NavBar } from "./components/NavBar";
import { HallOfFame } from "./components/HallOfFame";
// Import other components when they're ready
 import { Arena } from "./components/Arena";
import { Contact } from "./components/Contact";

function App() {
  return (
    <BrowserRouter basename={process.env.PUBLIC_URL}>
      <NavBar/>
      <div className="main">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/arena" element={<Arena/>}/>
          <Route path="/hall-of-fame" element={<HallOfFame />} />
          <Route path="/contact" element={<Contact/>} />
          <Route path="topic/:topicId" element={<TopicIntro />} />
          <Route path="quiz/:topicId" element={<Quiz />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
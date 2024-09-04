import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import Home from './Landing/Home.jsx';
import Connect_page from './Landing/Connect_page.jsx';
import { Resume_page } from './Landing/Resume_page.jsx';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/connect" element={<Connect_page />} />
        <Route path="download-resume" element={<Resume_page />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;

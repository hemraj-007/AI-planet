import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Page from './Page';
import CreateChallenge from './components/CreateChallenge';
import ChallengeDetails from './components/ChallengeDetails'; 

const App: React.FC = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Page />} />
        <Route path="/create-challenge" element={<CreateChallenge />} />
        <Route path="/details" element={<ChallengeDetails />} />
      </Routes>
    </Router>
  );
};

export default App;

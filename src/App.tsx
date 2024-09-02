import React from 'react';
import { BrowserRouter , Route, Routes } from 'react-router-dom';
import LandingPage from './components/LandingPage';
import CreateChallenge from './components/CreateChallenge';

const App: React.FC = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/create-challenge" element={<CreateChallenge />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;

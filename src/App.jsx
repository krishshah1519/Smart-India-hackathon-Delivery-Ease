import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import HomePage from './page/HomePage';
import SenderPage from './page/SenderPage';
import ReceiverPage from './page/Receiver';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/sender" element={<SenderPage />} />
        <Route path="/receiver" element={<ReceiverPage />} />
      </Routes>
    </Router>
  );
}

export default App;

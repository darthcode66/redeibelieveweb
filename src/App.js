import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './Home';
import Support from './Support';
import Changelog from './Changelog';

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/suporte" element={<Support />} />
          <Route path="/changelog" element={<Changelog />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;

import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './Home';
import Support from './Support';
import Changelog from './Changelog';
import DeleteAccount from './DeleteAccount';

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/suporte" element={<Support />} />
          <Route path="/changelog" element={<Changelog />} />
          <Route path="/excluir-conta" element={<DeleteAccount />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;

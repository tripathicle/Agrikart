import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { AppProvider } from './context/AppContext';
import Header from './components/Header';
import Home from './pages/Home';
import Marketplace from './pages/Marketplace';
import TractorServices from './pages/TractorServices';
import MilkTrading from './pages/MilkTrading';
import Community from './pages/Community';

function App() {
  return (
    <AppProvider>
      <Router>
        <div className="min-h-screen bg-gray-50">
          <Header />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/marketplace" element={<Marketplace />} />
            <Route path="/tractors" element={<TractorServices />} />
            <Route path="/milk" element={<MilkTrading />} />
            <Route path="/community" element={<Community />} />
          </Routes>
        </div>
      </Router>
    </AppProvider>
  );
}

export default App;
import React from 'react';
import './app.css';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import Home from './pages/Home';
import Followers from './pages/Followers';
import FAQ from './pages/FAQ';
import Avaliacoes from './pages/Avaliacoes';
import TikTokFollower from './pages/TikTokFollower';
import Login from './pages/Login';
import Curtidas from './pages/Curtidas';
import Views from './pages/Views';
import Reels from './pages/Reels';
import Comentarios from './pages/Comentarios';
import Checkout from './pages/Checkout.jsx';






function App() {
  return (
    <Router>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/followers" element={<Followers />} />
            <Route path="/FAQ" element={<FAQ />} />
            <Route path="/avaliacoes" element={<Avaliacoes />} />
            <Route path="/tiktok/followers" element={<TikTokFollower />} />
            <Route path="/login" element={<Login />} />
            <Route path="/instagram/curtidas" element={<Curtidas />} />
            <Route path="/instagram/views" element={<Views />} />
            <Route path="/instagram/reels" element={<Reels />} />
            <Route path="/instagram/comentarios" element={<Comentarios />} />
            <Route path="/pay/checkout" element={<Checkout />} />

            </Routes>
    </Router>
  );
}

export default App;

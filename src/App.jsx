import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import Home from './pages/Home';
import Followers from './pages/Followers';
import PrivacyPolicy from './pages/privacyPolicy';
import Top from './top.jsx'
import Disclaimer from './pages/Disclaimer.jsx';
import Termsofuse from './pages/termsOfUse';
import CookiePolicy from './pages/cookiePolicy';
import FAQ from './pages/FAQ';
import Avaliacoes from './pages/Avaliacoes';
import TikTokFollower from './pages/TikTokFollower';
import Login from './pages/Login';
import Curtidas from './pages/Curtidas';
import Views from './pages/Views';
import Reels from './pages/Reels';
import Comentarios from './pages/Comentarios';
import Checkout from './pages/Checkout.jsx';

import './assets/css/client.css'
import './assets/css/icons.css'
import './assets/css/index.css'
import './assets/css/nav.css'
import './assets/css/style.css'
import './assets/css/styles.css'
import Form from './pages/Form.jsx';
import Pending from './pages/Pending.jsx';




function App() {
  return (
    <Router>
      <Top />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/privacy-policy" element={<PrivacyPolicy />} />
        <Route path="/cookie-policy" element={<CookiePolicy />} />
        <Route path="/terms-of-use" element={<Termsofuse />} />
        <Route path="/disclaimer" element={<Disclaimer />} />
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
        <Route path="/pay/form" element={<Form />} />
        <Route path="/pay/pending" element={<Pending />} />

      </Routes>
    </Router>
  );
}

export default App;

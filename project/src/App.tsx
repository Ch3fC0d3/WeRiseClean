import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import ResourcesPage from './pages/ResourcesPage';
import JoinPage from './pages/JoinPage';
import ContactPage from './pages/ContactPage';
import ActionsPage from './pages/ActionsPage';
import MediaPage from './pages/MediaPage';

function App() {
  return (
    <Router>
      <div className="min-h-screen flex flex-col bg-neutral-900">
        <Navbar />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/resources" element={<ResourcesPage />} />
            <Route path="/join" element={<JoinPage />} />
            <Route path="/contact" element={<ContactPage />} />
            <Route path="/actions" element={<ActionsPage />} />
            <Route path="/media" element={<MediaPage />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
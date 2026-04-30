import React from 'react'; // আপনি যেহেতু React দিয়ে করতে চেয়েছিলেন
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { useState, useEffect } from 'react';
import toast, { Toaster } from 'react-hot-toast';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './Components/Home'
import FriendDetails from './Components/FriendDetails'; // এখানে আগে / ছিল, এখন ./ হবে
import Timeline from './Components/Timeline';           // এখানেও ./ হবে
import Stats from './Components/Stats';                 // এখানেও ./ হবে
import NotFound from './Components/NotFounder';

function App() {
  const [friends, setFriends] = useState([]);
  const [timeline, setTimeline] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch('/friends.json')
      .then(res => res.json())
      .then(data => {
        setFriends(data);
        setLoading(false);
      });
  }, []);


  // 🔥 1. Load timeline from localStorage
  useEffect(() => {
    const saved = localStorage.getItem('timeline');
    if (saved) {
      setTimeline(JSON.parse(saved));
    }
  }, []);

  // 🔥 2. Save timeline to localStorage
  useEffect(() => {
    localStorage.setItem('timeline', JSON.stringify(timeline));
  }, [timeline]);

  const addTimelineEntry = (entry) => {
    setTimeline(prev => [entry, ...prev]);
    toast.success(`Interaction with ${entry.friendName} logged!`);
  };

  return (
    <Router>
      <div className="flex flex-col min-h-screen bg-[#F9FAF8]">
        <Toaster position="top-right" />
        <Navbar />
        <div className="flex-grow">
          <Routes>
            <Route 
  path="/" 
  element={<Home friends={friends} loading={loading} timeline={timeline} />} 
/>
            <Route path="/friend/:id" element={<FriendDetails friends={friends} onCheckIn={addTimelineEntry} />} />
            <Route path="/timeline" element={<Timeline timeline={timeline} />} />
            <Route path="/stats" element={<Stats timeline={timeline} />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </div>
        <Footer />
      </div>
    </Router>
  );
}
export default App;


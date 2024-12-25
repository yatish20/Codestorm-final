// App.js
import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './Navbar';
import Hero from './Hero';
import LearningModules from './LearningModules';
import Quiz from './Quiz';
import PersonalizedDashboard from './PersonalizedDashboard';
import AvatarUnlock from './AvatarUnlock';
import Footer from './Footer';
import ExpenseTracker from './ExpenseTracker';
import Calculator from './Calculator';
import './style.css';
import LoginForm from './LoginForm';
import SignUpForm from './SignUpForm';

function App() {
  const [currentModule, setCurrentModule] = useState(null);

  return (
    <Router>
      <div className="app">
        <Navbar />
        <main>
          <Routes>
            <Route path="/" element={<Hero />} /> 
            <Route path="/modules" element={<LearningModules setCurrentModule={setCurrentModule} />} />
            <Route path="/dashboard" element={<PersonalizedDashboard />} />
            <Route path="/unlock-avatars" element={<AvatarUnlock userCoins={100}/> } /> 
             <Route path="/login" element={<LoginForm />} />
             <Route path="/login" element={<LoginForm />} />
             <Route path="/signup" element={<SignUpForm />} />
            <Route path="/expense" element={<ExpenseTracker />} />
            <Route path="/quiz" element={<Quiz/>} />
            <Route path="/calculator" element={<Calculator/>} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;

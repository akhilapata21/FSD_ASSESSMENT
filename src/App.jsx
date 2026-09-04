import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { StudentProvider, useStudent } from './context/StudentContext';
import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';
import { Home } from './pages/Home';
import { Courses } from './pages/Courses';
import { CourseDetails } from './pages/CourseDetails';
import { About } from './pages/About';
import { NotFound } from './pages/NotFound';
import './styles/App.css';

// Component to display dynamic toast feedback from StudentContext
const ToastContainer = () => {
  const { toast, dismissToast } = useStudent();
  if (!toast) return null;

  return (
    <div className={`toast-banner ${toast.type}`}>
      <span className="toast-message">{toast.message}</span>
      <button 
        onClick={dismissToast} 
        className="toast-close-btn"
        aria-label="Dismiss notification"
      >
        ×
      </button>
    </div>
  );
};

// Main application layout with routes
const AppLayout = () => {
  return (
    <div className="app-container">
      <Navbar />
      <main className="main-content">
        <Routes>
          {/* Static Pages */}
          <Route path="/" element={<Home />} />
          <Route path="/courses" element={<Courses />} />
          <Route path="/about" element={<About />} />

          {/* Dynamic Course Details Route (e.g. /course/:id and alias /courses/:id) */}
          <Route path="/course/:id" element={<CourseDetails />} />
          <Route path="/courses/:id" element={<CourseDetails />} />

          {/* 404 Catch-all */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </main>
      <Footer />
      <ToastContainer />
    </div>
  );
};

export function App() {
  return (
    <StudentProvider>
      <BrowserRouter>
        <AppLayout />
      </BrowserRouter>
    </StudentProvider>
  );
}

export default App;

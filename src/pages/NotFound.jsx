import React from 'react';
import { Link } from 'react-router-dom';
import { HelpCircle, Home, BookOpen } from 'lucide-react';

export const NotFound = () => {
  return (
    <div className="page-not-found animate-fade-in">
      <div className="not-found-wrapper">
        <div className="not-found-badge">
          <span>Error 404</span>
        </div>
        <h1 className="not-found-heading">Page Not Found</h1>
        <p className="not-found-desc">
          The requested URL path does not exist in this course portal. Please check the address or return to the main dashboard.
        </p>
        <div className="not-found-btns">
          <Link to="/" className="btn-primary">
            <Home size={18} />
            <span>Go to Dashboard</span>
          </Link>
          <Link to="/courses" className="btn-secondary">
            <BookOpen size={18} />
            <span>Browse Courses</span>
          </Link>
        </div>
      </div>
    </div>
  );
};

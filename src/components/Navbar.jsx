import React, { useState } from 'react';
import { NavLink, Link } from 'react-router-dom';
import { 
  GraduationCap, 
  BookOpen, 
  Home, 
  Info, 
  User, 
  Menu, 
  X,
  Award
} from 'lucide-react';
import { useStudent } from '../context/StudentContext';

export const Navbar = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { student, enrolledCourseIds, totalEnrolledCredits } = useStudent();

  const closeMenu = () => setMobileMenuOpen(false);

  return (
    <header className="navbar-container">
      <div className="navbar-wrapper">
        {/* Brand Logo */}
        <Link to="/" className="navbar-brand" onClick={closeMenu}>
          <div className="brand-icon-wrapper">
            <GraduationCap className="brand-icon" size={26} />
          </div>
          <div className="brand-text-wrapper">
            <span className="brand-title">EduTrack</span>
            <span className="brand-tagline">Course Management</span>
          </div>
        </Link>

        {/* Desktop Navigation Links */}
        <nav className="navbar-nav">
          <NavLink 
            to="/" 
            end
            className={({ isActive }) => `nav-link ${isActive ? 'active' : ''}`}
          >
            <Home size={18} />
            <span>Home</span>
          </NavLink>

          <NavLink 
            to="/courses" 
            className={({ isActive }) => `nav-link ${isActive ? 'active' : ''}`}
          >
            <BookOpen size={18} />
            <span>Courses</span>
            <span className="nav-badge-pill">{enrolledCourseIds.length}</span>
          </NavLink>

          <NavLink 
            to="/about" 
            className={({ isActive }) => `nav-link ${isActive ? 'active' : ''}`}
          >
            <Info size={18} />
            <span>About</span>
          </NavLink>
        </nav>

        {/* Student Quick Profile Widget (Demonstrates Context API in Header) */}
        <div className="navbar-student-widget">
          <div className="student-badge-info">
            <div className="student-name-row">
              <span className="student-name">{student.name}</span>
              <span className="student-major-badge">{student.year.split(' ')[0]}</span>
            </div>
            <div className="student-credits-row">
              <span className="credits-text">{enrolledCourseIds.length} enrolled ({totalEnrolledCredits} cr)</span>
            </div>
          </div>
          <div className="student-avatar-ring">
            <img 
              src={student.avatar} 
              alt={student.name} 
              className="student-avatar-img"
              onError={(e) => {
                // Fallback if image fails
                e.target.style.display = 'none';
                e.target.nextSibling.style.display = 'flex';
              }}
            />
            <div className="student-avatar-fallback" style={{ display: 'none' }}>
              <User size={18} />
            </div>
          </div>
        </div>

        {/* Mobile Hamburger Button */}
        <button 
          className="mobile-menu-btn"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-label="Toggle navigation menu"
        >
          {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Dropdown Menu */}
      {mobileMenuOpen && (
        <div className="mobile-dropdown">
          <NavLink 
            to="/" 
            end
            className={({ isActive }) => `mobile-nav-link ${isActive ? 'active' : ''}`}
            onClick={closeMenu}
          >
            <Home size={20} />
            <span>Home</span>
          </NavLink>
          <NavLink 
            to="/courses" 
            className={({ isActive }) => `mobile-nav-link ${isActive ? 'active' : ''}`}
            onClick={closeMenu}
          >
            <BookOpen size={20} />
            <span>Course Catalog ({enrolledCourseIds.length} enrolled)</span>
          </NavLink>
          <NavLink 
            to="/about" 
            className={({ isActive }) => `mobile-nav-link ${isActive ? 'active' : ''}`}
            onClick={closeMenu}
          >
            <Info size={20} />
            <span>About</span>
          </NavLink>

          <div className="mobile-student-card">
            <div className="mobile-student-header">
              <div className="student-avatar-ring small">
                <img src={student.avatar} alt={student.name} className="student-avatar-img" />
              </div>
              <div>
                <strong>{student.name}</strong>
                <p className="subtext">{student.major}</p>
              </div>
            </div>
            <div className="mobile-student-stats">
              <span>{enrolledCourseIds.length} Courses Enrolled</span>
              <span>{totalEnrolledCredits} / {student.maxCredits} Credits</span>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};

import React from 'react';
import { Link } from 'react-router-dom';
import { GraduationCap, Heart, Code2, ShieldCheck, BookOpen } from 'lucide-react';
import { useStudent } from '../context/StudentContext';

export const Footer = () => {
  const { student, enrolledCourseIds } = useStudent();

  return (
    <footer className="footer-container">
      <div className="footer-wrapper">
        <div className="footer-col brand-col">
          <div className="footer-logo">
            <GraduationCap className="footer-logo-icon" size={24} />
            <span className="footer-logo-text">EduTrack</span>
          </div>
          <p className="footer-desc">
            Empowering students with seamless academic course planning, real-time credit tracking, and interactive syllabus access.
          </p>
          <div className="footer-student-meta">
            <span className="badge-subtle">Active Session: {student.name}</span>
            <span className="badge-subtle">{enrolledCourseIds.length} Registered Courses</span>
          </div>
        </div>

        <div className="footer-col">
          <h4 className="footer-heading">Navigation</h4>
          <ul className="footer-links">
            <li><Link to="/">Dashboard Home</Link></li>
            <li><Link to="/courses">Course Catalog</Link></li>
            <li><Link to="/about">About Application</Link></li>
            <li><Link to="/course/cs-101">CS 101 Details</Link></li>
            <li><Link to="/course/web-205">WEB 205 Details</Link></li>
          </ul>
        </div>

        <div className="footer-col">
          <h4 className="footer-heading">Architecture</h4>
          <ul className="footer-features-list">
            <li><Code2 size={16} /> React Functional Components</li>
            <li><BookOpen size={16} /> React Router v6 Dynamic Routing</li>
            <li><ShieldCheck size={16} /> Context API Global State</li>
          </ul>
        </div>
      </div>

      <div className="footer-bottom">
        <div className="footer-bottom-wrapper">
          <p>© {new Date().getFullYear()} EduTrack Student Course Management. Built with React & Context API.</p>
          <p className="footer-credits">Designed with modular JSX & responsive layout.</p>
        </div>
      </div>
    </footer>
  );
};

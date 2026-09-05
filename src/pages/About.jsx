import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { 
  GraduationCap, 
  Layers, 
  Route, 
  Database, 
  CheckCircle2, 
  User, 
  Edit3, 
  Save, 
  BookOpen, 
  ShieldCheck,
  Code,
  RotateCcw
} from 'lucide-react';
import { useStudent } from '../context/StudentContext';

export const About = () => {
  const { student, enrolledCourses, totalEnrolledCredits, updateStudentProfile, resetProfile } = useStudent();

  const [isEditing, setIsEditing] = useState(false);
  const [name, setName] = useState(student.name);
  const [major, setMajor] = useState(student.major);
  const [email, setEmail] = useState(student.email);

  useEffect(() => {
    setName(student.name);
    setMajor(student.major);
    setEmail(student.email);
  }, [student]);

  const handleSaveProfile = (e) => {
    e.preventDefault();
    updateStudentProfile({ name, major, email });
    setIsEditing(false);
  };

  return (
    <div className="page-about animate-fade-in">
      {/* About Header */}
      <div className="about-header">
        <div className="about-badge">
          <GraduationCap size={16} />
          <span>System Architecture & Info</span>
        </div>
        <h1 className="page-title">About EduTrack Portal</h1>
        <p className="page-subtitle">
          A modern student course management application designed with React functional components, React Router navigation, dynamic parameterized routes, and centralized state sharing via the Context API.
        </p>
      </div>

      {/* Architecture Highlights Grid */}
      <section className="architecture-grid">
        <div className="arch-card">
          <div className="arch-icon-wrapper bg-blue-subtle">
            <Route size={24} className="text-blue" />
          </div>
          <h3>React Router Navigation</h3>
          <p>
            Client-side routing implemented with <code>react-router-dom</code>. Enables seamless page transitions without full page reloads between <strong>Home</strong>, <strong>Courses</strong>, and <strong>About</strong>.
          </p>
          <ul className="arch-list">
            <li>Declarative <code>&lt;Routes&gt;</code> and <code>&lt;Route&gt;</code> hierarchy</li>
            <li>Active link styling with <code>NavLink</code></li>
            <li>Programmatic navigation & 404 fallback routing</li>
          </ul>
        </div>

        <div className="arch-card">
          <div className="arch-icon-wrapper bg-indigo-subtle">
            <Layers size={24} className="text-indigo" />
          </div>
          <h3>Dynamic Course Routes</h3>
          <p>
            Dynamic URL parameter handling via <code>/course/:id</code> using the <code>useParams()</code> hook. Course details render dynamically based on route identifiers.
          </p>
          <div className="arch-links-preview">
            <span>Try dynamic paths:</span>
            <div className="dynamic-badge-group">
              <Link to="/course/cs-101">/course/cs-101</Link>
              <Link to="/course/web-205">/course/web-205</Link>
              <Link to="/course/ds-301">/course/ds-301</Link>
            </div>
          </div>
        </div>

        <div className="arch-card">
          <div className="arch-icon-wrapper bg-emerald-subtle">
            <Database size={24} className="text-emerald" />
          </div>
          <h3>Context API State Management</h3>
          <p>
            The <code>StudentContext</code> provides a single source of truth for student identity, active enrollments, and credit balances, accessible by all pages without prop drilling.
          </p>
          <ul className="arch-list">
            <li>Clean custom hook: <code>useStudent()</code></li>
            <li>Synchronized credit hours and enrollment count</li>
            <li>Instant feedback toasts across routes</li>
          </ul>
        </div>
      </section>

      {/* Live Context Inspector & Interactive Profile Update */}
      <section className="context-demo-section">
        <div className="context-demo-header">
          <div className="context-demo-title-group">
            <div className="live-indicator-pill">
              <span className="live-pulse"></span>
              <span>Live Context API State Inspector</span>
            </div>
            <h2>Active Student Session in Context</h2>
            <p>
              This section directly consumes and mutates values in <code>StudentContext</code>. Edit the student profile below to see updates instantly reflected in the Navbar and Home Dashboard.
            </p>
          </div>

          <div style={{ display: 'flex', gap: '10px', flexWrap: 'wrap' }}>
            <button 
              onClick={() => setIsEditing(!isEditing)}
              className="btn-secondary"
            >
              <Edit3 size={16} />
              <span>{isEditing ? 'Cancel Editing' : 'Edit Context Profile'}</span>
            </button>
            <button 
              onClick={resetProfile}
              className="btn-secondary"
              title="Reset profile to default (Akhil Apata)"
            >
              <RotateCcw size={16} />
              <span>Reset Profile</span>
            </button>
          </div>
        </div>

        <div className="context-inspector-card">
          {isEditing ? (
            <form onSubmit={handleSaveProfile} className="profile-edit-form">
              <div className="form-grid">
                <div className="form-group">
                  <label>Student Full Name:</label>
                  <input 
                    type="text" 
                    value={name} 
                    onChange={(e) => setName(e.target.value)} 
                    required 
                    className="form-input"
                  />
                </div>
                <div className="form-group">
                  <label>Academic Major:</label>
                  <input 
                    type="text" 
                    value={major} 
                    onChange={(e) => setMajor(e.target.value)} 
                    required 
                    className="form-input"
                  />
                </div>
                <div className="form-group">
                  <label>Institutional Email:</label>
                  <input 
                    type="email" 
                    value={email} 
                    onChange={(e) => setEmail(e.target.value)} 
                    required 
                    className="form-input"
                  />
                </div>
              </div>

              <div className="form-actions">
                <button type="submit" className="btn-primary">
                  <Save size={16} />
                  <span>Save to Context & Sync Navbar</span>
                </button>
              </div>
            </form>
          ) : (
            <div className="context-data-view">
              <div className="context-meta-row">
                <div className="context-meta-item" style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                  <img 
                    src={student.avatar} 
                    alt={student.name}
                    style={{ width: '42px', height: '42px', borderRadius: '50%', objectFit: 'cover', border: '2px solid var(--primary-600)' }}
                    onError={(e) => { e.target.src = '/akhil.jpeg'; }}
                  />
                  <div>
                    <span className="context-key">Student Name</span>
                    <span className="context-val highlight">{student.name}</span>
                  </div>
                </div>
                <div className="context-meta-item">
                  <span className="context-key">Student ID</span>
                  <span className="context-val">{student.id}</span>
                </div>
                <div className="context-meta-item">
                  <span className="context-key">Degree Program</span>
                  <span className="context-val">{student.major}</span>
                </div>
                <div className="context-meta-item">
                  <span className="context-key">Current Term</span>
                  <span className="context-val">{student.semester} ({student.year})</span>
                </div>
              </div>

              <div className="context-enrollment-summary">
                <h4>Currently Enrolled Courses in Context ({enrolledCourses.length}):</h4>
                {enrolledCourses.length > 0 ? (
                  <div className="enrolled-pills-row">
                    {enrolledCourses.map(course => (
                      <Link 
                        key={course.id} 
                        to={`/course/${course.id}`} 
                        className="enrolled-pill-tag"
                      >
                        <CheckCircle2 size={14} className="text-emerald" />
                        <span><strong>{course.code}</strong>: {course.title} ({course.credits} cr)</span>
                      </Link>
                    ))}
                  </div>
                ) : (
                  <p className="subtext">No courses currently enrolled in Context.</p>
                )}
                <div className="context-total-credits-note">
                  Total Academic Load in Context: <strong>{totalEnrolledCredits} / {student.maxCredits} credits</strong>
                </div>
              </div>
            </div>
          )}
        </div>
      </section>

      {/* Tech Specifications */}
      <section className="tech-specs-section">
        <h3 className="section-title">Technical Specifications</h3>
        <div className="specs-grid">
          <div className="spec-card">
            <span className="spec-title">Frontend Framework</span>
            <span className="spec-val">React 18 (Functional Components & Hooks)</span>
          </div>
          <div className="spec-card">
            <span className="spec-title">Client-Side Routing</span>
            <span className="spec-val">React Router DOM v6 (useParams, NavLink, useNavigate)</span>
          </div>
          <div className="spec-card">
            <span className="spec-title">State Architecture</span>
            <span className="spec-val">React Context API (createContext, useContext, Provider)</span>
          </div>
          <div className="spec-card">
            <span className="spec-title">Persistence</span>
            <span className="spec-val">Browser LocalStorage Sync</span>
          </div>
        </div>
      </section>
    </div>
  );
};

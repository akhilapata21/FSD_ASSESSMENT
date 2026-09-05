import React from 'react';
import { Link } from 'react-router-dom';
import { 
  BookOpen, 
  GraduationCap, 
  Award, 
  Clock, 
  ArrowRight, 
  Sparkles, 
  CheckCircle2, 
  AlertCircle,
  BarChart3,
  Calendar,
  Layers
} from 'lucide-react';
import { useStudent } from '../context/StudentContext';
import { CourseCard } from '../components/CourseCard';
import { COURSES_DATA } from '../data/coursesData';

export const Home = () => {
  const { student, enrolledCourses, totalEnrolledCredits, dropCourse } = useStudent();

  // Find non-enrolled courses for recommendations
  const recommendedCourses = COURSES_DATA.filter(
    course => !enrolledCourses.some(enrolled => enrolled.id === course.id)
  ).slice(0, 2);

  const creditPercentage = Math.min(100, Math.round((totalEnrolledCredits / student.maxCredits) * 100));

  return (
    <div className="page-home animate-fade-in">
      {/* Hero Welcome Banner */}
      <section className="hero-banner">
        <div className="hero-content">
          <div className="hero-badge">
            <Sparkles size={16} className="hero-badge-icon" />
            <span>Academic Portal • Spring 2026</span>
          </div>
          <h1 className="hero-title">
            Welcome back, <span className="gradient-text">{student.name}</span>
          </h1>
          <p className="hero-subtitle">
            Manage your registered curriculum, discover available electives, and monitor your degree progress with real-time credit tracking.
          </p>
          <div className="hero-actions">
            <Link to="/courses" className="btn-primary">
              <BookOpen size={18} />
              <span>Browse Course Catalog</span>
            </Link>
            <Link to="/about" className="btn-secondary">
              <GraduationCap size={18} />
              <span>About EduTrack</span>
            </Link>
          </div>
        </div>

        {/* Hero Student Status Card */}
        <div className="hero-student-card">
          <div className="student-profile-header">
            <img 
              src={student.avatar} 
              alt={student.name} 
              className="student-avatar-large"
              onError={(e) => {
                e.target.src = '/akhil.jpeg';
              }}
            />
            <div className="student-profile-titles">
              <h3 className="student-profile-name">{student.name}</h3>
              <p className="student-id-tag">ID: {student.id}</p>
              <p className="student-major-text">{student.major}</p>
            </div>
          </div>

          <div className="student-metric-pills">
            <div className="metric-pill">
              <span className="metric-label">Semester</span>
              <span className="metric-val">{student.semester}</span>
            </div>
            <div className="metric-pill">
              <span className="metric-label">Year Standing</span>
              <span className="metric-val">{student.year}</span>
            </div>
            <div className="metric-pill">
              <span className="metric-label">Cumulative GPA</span>
              <span className="metric-val gpa-val">{student.gpa}</span>
            </div>
          </div>
        </div>
      </section>

      {/* Academic Stats Grid */}
      <section className="dashboard-stats-grid">
        <div className="stat-card">
          <div className="stat-icon-wrapper bg-blue-subtle">
            <BookOpen size={22} className="text-blue" />
          </div>
          <div className="stat-info">
            <span className="stat-label">Enrolled Courses</span>
            <div className="stat-value-group">
              <span className="stat-number">{enrolledCourses.length}</span>
              <span className="stat-unit">courses active</span>
            </div>
          </div>
        </div>

        <div className="stat-card">
          <div className="stat-icon-wrapper bg-indigo-subtle">
            <Award size={22} className="text-indigo" />
          </div>
          <div className="stat-info">
            <span className="stat-label">Credit Hours</span>
            <div className="stat-value-group">
              <span className="stat-number">{totalEnrolledCredits}</span>
              <span className="stat-unit">/ {student.maxCredits} max credits</span>
            </div>
            <div className="credit-progress-track">
              <div 
                className="credit-progress-bar"
                style={{ width: `${creditPercentage}%` }}
              ></div>
            </div>
          </div>
        </div>

        <div className="stat-card">
          <div className="stat-icon-wrapper bg-emerald-subtle">
            <BarChart3 size={22} className="text-emerald" />
          </div>
          <div className="stat-info">
            <span className="stat-label">Academic Status</span>
            <div className="stat-value-group">
              <span className="stat-number standing-good">Good Standing</span>
            </div>
            <span className="stat-subtext">3.84 GPA (Dean's Honor List)</span>
          </div>
        </div>

        <div className="stat-card">
          <div className="stat-icon-wrapper bg-amber-subtle">
            <Calendar size={22} className="text-amber" />
          </div>
          <div className="stat-info">
            <span className="stat-label">Current Term</span>
            <div className="stat-value-group">
              <span className="stat-number">{student.semester}</span>
            </div>
            <span className="stat-subtext">Add/Drop deadline: Mar 15</span>
          </div>
        </div>
      </section>

      {/* My Enrolled Courses Section */}
      <section className="dashboard-section">
        <div className="section-header">
          <div className="section-title-group">
            <h2 className="section-title">My Registered Courses</h2>
            <p className="section-subtitle">
              Courses currently enrolled under your active student account ({enrolledCourses.length} courses, {totalEnrolledCredits} credits)
            </p>
          </div>
          <Link to="/courses" className="btn-link">
            <span>Explore more courses</span>
            <ArrowRight size={16} />
          </Link>
        </div>

        {enrolledCourses.length > 0 ? (
          <div className="enrolled-courses-table-container">
            <div className="enrolled-courses-grid">
              {enrolledCourses.map(course => (
                <div key={course.id} className="enrolled-course-row-card">
                  <div className="enrolled-row-main">
                    <div className="enrolled-code-badge">{course.code}</div>
                    <div>
                      <h4 className="enrolled-course-title">
                        <Link to={`/course/${course.id}`}>{course.title}</Link>
                      </h4>
                      <p className="enrolled-course-meta">
                        <span>{course.instructor.name}</span> • <span>{course.schedule}</span> • <span>{course.credits} Credits</span>
                      </p>
                    </div>
                  </div>

                  <div className="enrolled-row-actions">
                    <Link 
                      to={`/course/${course.id}`} 
                      className="btn-details-sm"
                    >
                      <span>Syllabus & Details</span>
                      <ArrowRight size={14} />
                    </Link>
                    <button 
                      onClick={() => dropCourse(course.id)}
                      className="btn-drop-sm"
                      title="Drop course"
                    >
                      Drop
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        ) : (
          <div className="empty-enrollment-banner">
            <AlertCircle size={32} className="empty-icon" />
            <h3>You haven't enrolled in any courses yet!</h3>
            <p>Your semester schedule is currently empty. Browse the course catalog to enroll in upcoming subjects.</p>
            <Link to="/courses" className="btn-primary">
              <BookOpen size={16} />
              <span>Browse Catalog Now</span>
            </Link>
          </div>
        )}
      </section>

      {/* Recommended Courses Section */}
      {recommendedCourses.length > 0 && (
        <section className="dashboard-section">
          <div className="section-header">
            <div className="section-title-group">
              <h2 className="section-title">Recommended For You</h2>
              <p className="section-subtitle">
                Curated based on your major in {student.major}
              </p>
            </div>
            <Link to="/courses" className="btn-link">
              <span>View all available ({COURSES_DATA.length})</span>
              <ArrowRight size={16} />
            </Link>
          </div>

          <div className="courses-grid">
            {recommendedCourses.map(course => (
              <CourseCard key={course.id} course={course} />
            ))}
          </div>
        </section>
      )}

      {/* Quick Links / Highlights */}
      <section className="quick-links-panel">
        <div className="quick-link-box">
          <Layers className="quick-link-icon" size={24} />
          <h4>Dynamic Course Details</h4>
          <p>Click on any course like <Link to="/course/cs-101" className="inline-link">CS 101</Link> or <Link to="/course/web-205" className="inline-link">WEB 205</Link> to inspect full syllabus schedules and prerequisites.</p>
        </div>
        <div className="quick-link-box">
          <GraduationCap className="quick-link-icon" size={24} />
          <h4>Global Context Sharing</h4>
          <p>Any enrollment or drop action is synchronized immediately across your Navbar, Home Dashboard, and Catalog via React Context API.</p>
        </div>
      </section>
    </div>
  );
};

import React from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { 
  BookOpen, 
  Clock, 
  MapPin, 
  User, 
  Mail, 
  Award, 
  CheckCircle2, 
  PlusCircle, 
  MinusCircle, 
  ArrowLeft, 
  Star, 
  Calendar, 
  FileText, 
  CheckSquare, 
  AlertCircle,
  HelpCircle,
  ExternalLink
} from 'lucide-react';
import { COURSES_DATA } from '../data/coursesData';
import { useStudent } from '../context/StudentContext';

export const CourseDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const { isEnrolled, enrollCourse, dropCourse, student, totalEnrolledCredits } = useStudent();

  // Find course matching the dynamic URL parameter :id
  const course = COURSES_DATA.find(c => c.id === id);

  if (!course) {
    return (
      <div className="course-not-found-container animate-fade-in">
        <div className="not-found-card">
          <AlertCircle size={48} className="not-found-icon text-amber" />
          <h2>Course Not Found</h2>
          <p>
            The course with identifier <code>"{id}"</code> does not exist in the active curriculum catalog.
          </p>
          <div className="not-found-actions">
            <Link to="/courses" className="btn-primary">
              <ArrowLeft size={16} />
              <span>Back to Course Catalog</span>
            </Link>
          </div>
        </div>
      </div>
    );
  }

  const enrolled = isEnrolled(course.id);
  const spotsLeft = course.capacity - course.enrolledCount - (enrolled ? 1 : 0);

  // Other dynamic courses for quick switching
  const otherCourses = COURSES_DATA.filter(c => c.id !== course.id);

  const handleEnrollmentToggle = () => {
    if (enrolled) {
      dropCourse(course.id);
    } else {
      enrollCourse(course.id);
    }
  };

  return (
    <div className="page-course-details animate-fade-in">
      {/* Breadcrumb Navigation */}
      <div className="breadcrumb-nav">
        <Link to="/" className="breadcrumb-item">Home</Link>
        <span className="breadcrumb-separator">/</span>
        <Link to="/courses" className="breadcrumb-item">Courses</Link>
        <span className="breadcrumb-separator">/</span>
        <span className="breadcrumb-current">{course.code}</span>
      </div>

      {/* Course Hero Banner */}
      <div className="course-detail-hero">
        <div className="course-hero-main">
          <div className="hero-tags">
            <span className="badge-code-large">{course.code}</span>
            <span className="badge-dept">{course.department}</span>
            <span className={`badge-level ${course.level.toLowerCase()}`}>{course.level}</span>
          </div>

          <h1 className="course-detail-title">{course.title}</h1>
          <p className="course-detail-summary">{course.shortDescription}</p>

          <div className="hero-quick-meta">
            <div className="quick-meta-item">
              <Star size={16} className="text-amber" />
              <span><strong>{course.rating}</strong> ({course.reviewsCount} student evaluations)</span>
            </div>
            <div className="quick-meta-item">
              <Award size={16} className="text-indigo" />
              <span><strong>{course.credits}</strong> Academic Credits</span>
            </div>
            <div className="quick-meta-item">
              <Clock size={16} className="text-blue" />
              <span>{course.schedule}</span>
            </div>
          </div>
        </div>

        {/* Dynamic Route Info Pill */}
        <div className="route-info-badge">
          <span>Active Dynamic Route:</span>
          <code>/course/{course.id}</code>
        </div>
      </div>

      {/* Main Grid: Content & Sidebar */}
      <div className="course-detail-layout">
        {/* Left Column: Syllabus & Academic Details */}
        <div className="course-detail-content">
          {/* Overview Section */}
          <section className="detail-section">
            <h2 className="detail-section-title">
              <BookOpen size={20} className="section-icon" />
              <span>Course Description</span>
            </h2>
            <p className="course-full-description">{course.description}</p>
          </section>

          {/* Learning Outcomes */}
          <section className="detail-section">
            <h2 className="detail-section-title">
              <CheckSquare size={20} className="section-icon" />
              <span>Expected Learning Outcomes</span>
            </h2>
            <div className="outcomes-list">
              {course.learningOutcomes.map((outcome, idx) => (
                <div key={idx} className="outcome-item">
                  <CheckCircle2 size={18} className="outcome-icon" />
                  <span>{outcome}</span>
                </div>
              ))}
            </div>
          </section>

          {/* 8-Week Syllabus Breakdown */}
          <section className="detail-section">
            <h2 className="detail-section-title">
              <Calendar size={20} className="section-icon" />
              <span>Weekly Syllabus & Curriculum Breakdown</span>
            </h2>
            <div className="syllabus-timeline">
              {course.syllabus.map((item) => (
                <div key={item.week} className="syllabus-card">
                  <div className="syllabus-week-indicator">
                    <span className="week-label">WEEK</span>
                    <span className="week-number">{item.week}</span>
                  </div>
                  <div className="syllabus-content">
                    <h4 className="syllabus-topic-title">{item.topic}</h4>
                    <p className="syllabus-subtext">Lecture sessions, interactive problem sets, and guided laboratory work.</p>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* Explore Other Dynamic Course Routes */}
          <section className="detail-section quick-switch-section">
            <h3 className="sub-section-title">Switch to Another Dynamic Course Route:</h3>
            <p className="subtext">Click any course to test dynamic route parameters (e.g. <code>/course/:id</code>):</p>
            <div className="dynamic-routes-pills">
              {otherCourses.map(c => (
                <Link 
                  key={c.id} 
                  to={`/course/${c.id}`} 
                  className={`route-pill-link ${isEnrolled(c.id) ? 'is-enrolled-pill' : ''}`}
                >
                  <span className="pill-code">{c.code}</span>
                  <span className="pill-title">{c.title}</span>
                  {isEnrolled(c.id) && <span className="pill-status-dot">● Enrolled</span>}
                </Link>
              ))}
            </div>
          </section>
        </div>

        {/* Right Sidebar: Registration Card & Logistics */}
        <aside className="course-detail-sidebar">
          {/* Enrollment Card */}
          <div className="sidebar-card enrollment-action-box">
            <div className="enrollment-status-badge">
              {enrolled ? (
                <div className="status-indicator enrolled">
                  <CheckCircle2 size={18} />
                  <span>You are Enrolled in this Course</span>
                </div>
              ) : (
                <div className="status-indicator not-enrolled">
                  <PlusCircle size={18} />
                  <span>Open for Registration</span>
                </div>
              )}
            </div>

            <div className="sidebar-price-row">
              <div>
                <span className="credits-number">{course.credits}</span>
                <span className="credits-label">Credit Hours</span>
              </div>
              <span className="tuition-pill">Standard Tuition</span>
            </div>

            <p className="enrollment-context-note">
              Active Student: <strong>{student.name}</strong> ({student.id})<br />
              Current Load: <strong>{totalEnrolledCredits} / {student.maxCredits} credits</strong>
            </p>

            <button
              onClick={handleEnrollmentToggle}
              className={`btn-registration ${enrolled ? 'btn-drop-course' : 'btn-enroll-course'}`}
            >
              {enrolled ? (
                <>
                  <MinusCircle size={18} />
                  <span>Drop this Course</span>
                </>
              ) : (
                <>
                  <PlusCircle size={18} />
                  <span>Enroll in Course</span>
                </>
              )}
            </button>

            <div className="capacity-bar-container">
              <div className="capacity-text-row">
                <span>Class Capacity</span>
                <span>{course.enrolledCount + (enrolled ? 1 : 0)} / {course.capacity} enrolled</span>
              </div>
              <div className="capacity-track">
                <div 
                  className="capacity-fill"
                  style={{ width: `${Math.min(100, Math.round(((course.enrolledCount + (enrolled ? 1 : 0)) / course.capacity) * 100))}%` }}
                ></div>
              </div>
              <span className="capacity-remaining">{spotsLeft} seats remaining</span>
            </div>
          </div>

          {/* Logistics & Meeting Times */}
          <div className="sidebar-card logistics-card">
            <h3 className="sidebar-card-title">Course Logistics</h3>
            <ul className="logistics-list">
              <li className="logistics-item">
                <Clock size={18} className="logistics-icon text-blue" />
                <div>
                  <strong>Meeting Schedule</strong>
                  <p>{course.schedule}</p>
                </div>
              </li>
              <li className="logistics-item">
                <MapPin size={18} className="logistics-icon text-indigo" />
                <div>
                  <strong>Campus Location</strong>
                  <p>{course.location}</p>
                </div>
              </li>
              <li className="logistics-item">
                <FileText size={18} className="logistics-icon text-emerald" />
                <div>
                  <strong>Prerequisites</strong>
                  <p>{course.prerequisites}</p>
                </div>
              </li>
            </ul>
          </div>

          {/* Instructor Information */}
          <div className="sidebar-card instructor-card">
            <h3 className="sidebar-card-title">Faculty Instructor</h3>
            <div className="instructor-profile">
              <div className="instructor-avatar-circle">
                <User size={24} />
              </div>
              <div>
                <h4 className="instructor-name">{course.instructor.name}</h4>
                <p className="instructor-title">{course.instructor.title}</p>
              </div>
            </div>

            <div className="instructor-details">
              <div className="inst-meta">
                <Mail size={15} />
                <a href={`mailto:${course.instructor.email}`}>{course.instructor.email}</a>
              </div>
              <div className="inst-meta">
                <MapPin size={15} />
                <span>{course.instructor.office}</span>
              </div>
            </div>
          </div>
        </aside>
      </div>
    </div>
  );
};

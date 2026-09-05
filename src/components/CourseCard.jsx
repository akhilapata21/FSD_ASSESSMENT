import React from 'react';
import { Link } from 'react-router-dom';
import { 
  Clock, 
  User, 
  Award, 
  CheckCircle2, 
  PlusCircle, 
  MinusCircle, 
  Star, 
  ArrowRight 
} from 'lucide-react';
import { useStudent } from '../context/StudentContext';

export const CourseCard = ({ course, variant = 'default' }) => {
  const { isEnrolled, enrollCourse, dropCourse } = useStudent();
  const enrolled = isEnrolled(course.id);

  const handleEnrollToggle = (e) => {
    e.preventDefault();
    if (enrolled) {
      dropCourse(course.id);
    } else {
      enrollCourse(course.id);
    }
  };

  const getLevelBadgeClass = (level) => {
    switch (level.toLowerCase()) {
      case 'beginner':
        return 'badge-level beginner';
      case 'intermediate':
        return 'badge-level intermediate';
      case 'advanced':
        return 'badge-level advanced';
      default:
        return 'badge-level';
    }
  };

  return (
    <div className={`course-card ${enrolled ? 'is-enrolled-border' : ''}`}>
      <div className="course-card-header">
        <div className="course-card-badges">
          <span className="badge-code">{course.code}</span>
          <span className={getLevelBadgeClass(course.level)}>{course.level}</span>
        </div>
        {enrolled && (
          <span className="badge-enrolled-pill">
            <CheckCircle2 size={13} />
            <span>Enrolled</span>
          </span>
        )}
      </div>

      <div className="course-card-body">
        <span className="course-department">{course.department}</span>
        <h3 className="course-title">
          <Link to={`/course/${course.id}`} className="course-title-link">
            {course.title}
          </Link>
        </h3>
        <p className="course-short-desc">{course.shortDescription}</p>

        <div className="course-metadata-grid">
          <div className="meta-item">
            <User size={15} className="meta-icon" />
            <span className="meta-text">{course.instructor.name}</span>
          </div>
          <div className="meta-item">
            <Clock size={15} className="meta-icon" />
            <span className="meta-text">{course.schedule}</span>
          </div>
          <div className="meta-item">
            <Award size={15} className="meta-icon" />
            <span className="meta-text">{course.credits} Credits</span>
          </div>
          <div className="meta-item">
            <Star size={15} className="meta-icon star-icon" />
            <span className="meta-text">{course.rating} ({course.reviewsCount})</span>
          </div>
        </div>
      </div>

      <div className="course-card-footer">
        <Link 
          to={`/course/${course.id}`} 
          className="btn-card-details"
        >
          <span>Course Details</span>
          <ArrowRight size={15} />
        </Link>

        <button 
          onClick={handleEnrollToggle}
          className={`btn-card-action ${enrolled ? 'btn-drop' : 'btn-enroll'}`}
          title={enrolled ? 'Drop this course' : 'Enroll in this course'}
        >
          {enrolled ? (
            <>
              <MinusCircle size={16} />
              <span>Drop</span>
            </>
          ) : (
            <>
              <PlusCircle size={16} />
              <span>Enroll</span>
            </>
          )}
        </button>
      </div>
    </div>
  );
};

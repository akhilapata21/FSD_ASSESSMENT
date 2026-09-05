import React from 'react';

/**
 * Functional component to display an individual student's profile.
 * Accepts three props: name, course, and college.
 */
function Student({ name, course, college }) {
  return (
    <div className="student-card">
      <div className="student-avatar">
        {name ? name.charAt(0).toUpperCase() : 'S'}
      </div>
      <div className="student-info">
        <h2 className="student-name">{name}</h2>
        <p className="student-detail">
          <span className="label">Course:</span>
          <span className="value">{course}</span>
        </p>
        <p className="student-detail">
          <span className="label">College:</span>
          <span className="value">{college}</span>
        </p>
      </div>
    </div>
  );
}

export default Student;

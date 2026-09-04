import React from 'react';

function Student({ name, course, college, avatar }) {
  return (
    <div className="student-card">
      <div className="student-avatar" style={avatar ? { padding: 0, overflow: 'hidden' } : {}}>
        {avatar ? (
          <img src={avatar} alt={name} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
        ) : (
          name ? name.charAt(0).toUpperCase() : 'S'
        )}
      </div>
      <div className="student-details">
        <h2 className="student-name">{name}</h2>
        <p className="student-info">
          <span className="label">Course:</span> {course}
        </p>
        <p className="student-info">
          <span className="label">College:</span> {college}
        </p>
      </div>
    </div>
  );
}

export default Student;

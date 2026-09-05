import React, { useState } from 'react';
import styles from './StudentCard.module.css';

export default function StudentCard({
  latestStudent,
  allStudents = [],
  onClearLatest,
  onDeleteStudent,
  onClearAll,
}) {
  const [copied, setCopied] = useState(false);

  if (!latestStudent) {
    return null;
  }

  // Get initials for avatar (e.g. "John Doe" -> "JD")
  const getInitials = (name) => {
    if (!name) return 'ST';
    const parts = name.trim().split(/\s+/);
    if (parts.length === 1) return parts[0].substring(0, 2).toUpperCase();
    return (parts[0][0] + parts[parts.length - 1][0]).toUpperCase();
  };

  const handleCopyDetails = () => {
    const textToCopy = `Student Registration Details:\nName: ${latestStudent.name}\nEmail: ${latestStudent.email}\nCourse: ${latestStudent.course}\nID: ${latestStudent.id}`;
    navigator.clipboard?.writeText(textToCopy);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section className={styles.outputSection} aria-label="Registered Student Output Details">
      {/* Success Notification Banner */}
      <div className={styles.successBanner}>
        <div className={styles.bannerContent}>
          <span className={styles.successIcon}>
            <svg
              width="16"
              height="16"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="3"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <polyline points="20 6 9 17 4 12" />
            </svg>
          </span>
          <div className={styles.bannerText}>
            <h3>Registration Successful!</h3>
            <p>The student record has been generated and verified.</p>
          </div>
        </div>
        <button
          type="button"
          onClick={onClearLatest}
          className={styles.clearBtn}
          title="Dismiss this card"
        >
          Dismiss
        </button>
      </div>

      {/* Latest Student Details Card */}
      <div className={styles.card}>
        <div className={styles.cardHeader}>
          <div className={styles.studentProfile}>
            <div className={styles.avatar}>
              {getInitials(latestStudent.name)}
            </div>
            <div className={styles.studentMeta}>
              <h4>{latestStudent.name}</h4>
              <span className={styles.regId}>ID: {latestStudent.id}</span>
            </div>
          </div>
          <div className={styles.statusBadge}>
            <span className={styles.statusDot}></span>
            Enrolled
          </div>
        </div>

        <div className={styles.detailsGrid}>
          {/* Student Name */}
          <div className={styles.detailItem}>
            <span className={styles.detailLabel}>Full Name</span>
            <span className={styles.detailValue}>
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" />
                <circle cx="12" cy="7" r="4" />
              </svg>
              {latestStudent.name}
            </span>
          </div>

          {/* Student Email */}
          <div className={styles.detailItem}>
            <span className={styles.detailLabel}>Email Address</span>
            <span className={styles.detailValue}>
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <rect width="20" height="16" x="2" y="4" rx="2" />
                <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
              </svg>
              <a href={`mailto:${latestStudent.email}`} className={styles.emailLink}>
                {latestStudent.email}
              </a>
            </span>
          </div>

          {/* Enrolled Course */}
          <div className={styles.detailItem}>
            <span className={styles.detailLabel}>Enrolled Course</span>
            <div>
              <span className={styles.courseBadge}>
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M22 10v6M2 10l10-5 10 5-10 5z" />
                  <path d="M6 12v5c3 3 9 3 12 0v-5" />
                </svg>
                {latestStudent.course}
              </span>
            </div>
          </div>
        </div>

        <div className={styles.cardFooter}>
          <div className={styles.registeredTime}>
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <circle cx="12" cy="12" r="10" />
              <polyline points="12 6 12 12 16 14" />
            </svg>
            Registered on {latestStudent.timestamp}
          </div>

          <div className={styles.cardActions}>
            <button
              type="button"
              onClick={handleCopyDetails}
              className={styles.clearBtn}
              title="Copy student registration details"
            >
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <rect width="14" height="14" x="8" y="8" rx="2" ry="2" />
                <path d="M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2" />
              </svg>
              {copied ? 'Copied!' : 'Copy Info'}
            </button>
          </div>
        </div>
      </div>

      {/* Roster / Log of All Registered Students */}
      {allStudents.length > 0 && (
        <div className={styles.recordsSection}>
          <div className={styles.recordsHeader}>
            <h3 className={styles.recordsTitle}>
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
                <circle cx="9" cy="7" r="4" />
                <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
                <path d="M16 3.13a4 4 0 0 1 0 7.75" />
              </svg>
              Registered Students Directory
              <span className={styles.recordsCount}>{allStudents.length}</span>
            </h3>
            {allStudents.length > 1 && (
              <button
                type="button"
                onClick={onClearAll}
                className={styles.clearBtn}
                title="Clear all records"
              >
                Clear All
              </button>
            )}
          </div>

          <div className={styles.tableWrapper}>
            <table className={styles.recordsTable}>
              <thead>
                <tr>
                  <th>#ID</th>
                  <th>Student Name</th>
                  <th>Email</th>
                  <th>Course</th>
                  <th>Registered At</th>
                  <th>Action</th>
                </tr>
              </thead>
              <tbody>
                {allStudents.map((student) => (
                  <tr key={student.id}>
                    <td>
                      <code style={{ fontSize: '0.8rem', color: '#6366f1' }}>{student.id}</code>
                    </td>
                    <td><strong>{student.name}</strong></td>
                    <td>
                      <a href={`mailto:${student.email}`} className={styles.emailLink}>
                        {student.email}
                      </a>
                    </td>
                    <td>
                      <span className={styles.courseBadge} style={{ padding: '0.2rem 0.6rem', fontSize: '0.8rem' }}>
                        {student.course}
                      </span>
                    </td>
                    <td style={{ color: 'var(--text-muted)', fontSize: '0.8rem' }}>
                      {student.timestamp}
                    </td>
                    <td>
                      <button
                        type="button"
                        onClick={() => onDeleteStudent(student.id)}
                        className={styles.deleteIconBtn}
                        title="Delete this record"
                      >
                        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                          <polyline points="3 6 5 6 21 6" />
                          <path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2" />
                        </svg>
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      )}
    </section>
  );
}

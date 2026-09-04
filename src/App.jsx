import React, { useState } from 'react';
import RegistrationForm from './components/RegistrationForm';
import StudentCard from './components/StudentCard';
import styles from './App.module.css';

export default function App() {
  // State to store all registered students
  const [students, setStudents] = useState([]);
  
  // State to store the most recently submitted student details
  const [latestStudent, setLatestStudent] = useState(null);

  // Handle new student registration from the form
  const handleRegister = (newStudentData) => {
    const newRecord = {
      ...newStudentData,
      id: `STU-${Math.floor(1000 + Math.random() * 9000)}`,
      timestamp: new Date().toLocaleTimeString([], {
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit',
        day: '2-digit',
        month: 'short',
        year: 'numeric',
      }),
    };

    // Update the latest submitted student to show directly below form
    setLatestStudent(newRecord);

    // Also append to the registered students history roster
    setStudents((prev) => [newRecord, ...prev]);
  };

  // Clear the latest student preview card
  const handleClearLatest = () => {
    setLatestStudent(null);
  };

  // Delete a specific student from the directory
  const handleDeleteStudent = (id) => {
    setStudents((prev) => prev.filter((s) => s.id !== id));
    if (latestStudent && latestStudent.id === id) {
      setLatestStudent(null);
    }
  };

  // Clear all registered student records
  const handleClearAll = () => {
    if (window.confirm('Are you sure you want to clear all registered student records?')) {
      setStudents([]);
      setLatestStudent(null);
    }
  };

  return (
    <div className={styles.appWrapper}>
      <main className={styles.container}>
        {/* Header Section */}
        <header className={styles.header}>
          <div className={styles.brandBadge}>
            <span className={styles.badgeIcon}>
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                <path d="M22 10v6M2 10l10-5 10 5-10 5z" />
                <path d="M6 12v5c3 3 9 3 12 0v-5" />
              </svg>
            </span>
            Academic Portal
          </div>

          <h1 className={styles.title}>
            Student <span className={styles.titleHighlight}>Registration</span> Form
          </h1>

          <p className={styles.subtitle}>
            Manage student enrollments using controlled form components and React state hooks.
          </p>

          <div className={styles.tagsRow}>
            <span className={styles.tag}>React useState</span>
            <span className={styles.tag}>Controlled Components</span>
            <span className={styles.tag}>CSS Modules</span>
            <span className={styles.tag}>Form Validation</span>
          </div>
        </header>

        {/* Form Component (Controlled via useState) */}
        <RegistrationForm onSubmit={handleRegister} />

        {/* Output Section: Display entered student details below the form */}
        {latestStudent ? (
          <StudentCard
            latestStudent={latestStudent}
            allStudents={students}
            onClearLatest={handleClearLatest}
            onDeleteStudent={handleDeleteStudent}
            onClearAll={handleClearAll}
          />
        ) : (
          <div className={styles.emptyState}>
            <div className={styles.emptyStateIcon}>
              <svg
                width="28"
                height="28"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.8"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
                <polyline points="14 2 14 8 20 8" />
                <line x1="16" y1="13" x2="8" y2="13" />
                <line x1="16" y1="17" x2="8" y2="17" />
                <polyline points="10 9 9 9 8 9" />
              </svg>
            </div>
            <h3 className={styles.emptyStateTitle}>No Student Details Submitted Yet</h3>
            <p className={styles.emptyStateDesc}>
              Complete the form above with Name, Email, and Course, then click <strong>Register Student</strong> to display the details here.
            </p>
          </div>
        )}

        {/* Footer */}
        <footer className={styles.footer}>
          <p>© 2026 Student Registration System • Full Stack Development (FSD)</p>
          <span className={styles.footerNote}>
            Built with React, Vite &amp; CSS Modules
          </span>
        </footer>
      </main>
    </div>
  );
}

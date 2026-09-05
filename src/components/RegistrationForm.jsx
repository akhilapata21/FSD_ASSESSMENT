import React, { useState } from 'react';
import styles from './RegistrationForm.module.css';

const COURSE_OPTIONS = [
  'Computer Science & Engineering',
  'Information Technology',
  'Data Science & Artificial Intelligence',
  'Electronics & Communication Engineering',
  'Cyber Security & Digital Forensics',
  'Mechanical Engineering',
  'Civil Engineering',
  'Business Administration (BBA/MBA)',
];

export default function RegistrationForm({ onSubmit }) {
  // useState hook to manage controlled form input values
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    course: '',
  });

  // State for form validation errors
  const [errors, setErrors] = useState({});

  // Controlled component input change handler
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));

    // Clear field-specific error as user types
    if (errors[name]) {
      setErrors((prev) => ({
        ...prev,
        [name]: '',
      }));
    }
  };

  // Validate form inputs
  const validate = () => {
    const newErrors = {};

    if (!formData.name.trim()) {
      newErrors.name = 'Full name is required';
    } else if (formData.name.trim().length < 2) {
      newErrors.name = 'Name must be at least 2 characters long';
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!formData.email.trim()) {
      newErrors.email = 'Email address is required';
    } else if (!emailRegex.test(formData.email.trim())) {
      newErrors.email = 'Please enter a valid email address';
    }

    if (!formData.course) {
      newErrors.course = 'Please select a course to enroll in';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();

    if (validate()) {
      // Pass the submitted data to parent component
      onSubmit({
        name: formData.name.trim(),
        email: formData.email.trim(),
        course: formData.course,
      });

      // Clear input fields after successful registration
      setFormData({
        name: '',
        email: '',
        course: '',
      });
      setErrors({});
    }
  };

  // Reset form inputs
  const handleReset = () => {
    setFormData({
      name: '',
      email: '',
      course: '',
    });
    setErrors({});
  };

  return (
    <div className={styles.formContainer}>
      <div className={styles.formHeader}>
        <h2 className={styles.formTitle}>
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2.2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
            <circle cx="9" cy="7" r="4" />
            <line x1="19" y1="8" x2="19" y2="14" />
            <line x1="22" y1="11" x2="16" y2="11" />
          </svg>
          Student Registration
        </h2>
        <p className={styles.formSubtitle}>
          Fill out the details below to register a new student.
        </p>
      </div>

      <form onSubmit={handleSubmit} className={styles.form} noValidate>
        {/* Name Field - Controlled Component */}
        <div className={styles.formGroup}>
          <label htmlFor="student-name" className={styles.label}>
            Student Name <span className={styles.requiredAsterisk}>*</span>
          </label>
          <div className={styles.inputWrapper}>
            <input
              id="student-name"
              type="text"
              name="name"
              placeholder="e.g. Alexander Mitchell"
              value={formData.name}
              onChange={handleChange}
              className={`${styles.input} ${errors.name ? styles.inputError : ''}`}
            />
            <span className={styles.fieldIcon}>
              <svg
                width="18"
                height="18"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" />
                <circle cx="12" cy="7" r="4" />
              </svg>
            </span>
          </div>
          {errors.name && (
            <span className={styles.errorMessage}>
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <circle cx="12" cy="12" r="10" />
                <line x1="12" y1="8" x2="12" y2="12" />
                <line x1="12" y1="16" x2="12.01" y2="16" />
              </svg>
              {errors.name}
            </span>
          )}
        </div>

        {/* Email Field - Controlled Component */}
        <div className={styles.formGroup}>
          <label htmlFor="student-email" className={styles.label}>
            Email Address <span className={styles.requiredAsterisk}>*</span>
          </label>
          <div className={styles.inputWrapper}>
            <input
              id="student-email"
              type="email"
              name="email"
              placeholder="e.g. alexander@university.edu"
              value={formData.email}
              onChange={handleChange}
              className={`${styles.input} ${errors.email ? styles.inputError : ''}`}
            />
            <span className={styles.fieldIcon}>
              <svg
                width="18"
                height="18"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <rect width="20" height="16" x="2" y="4" rx="2" />
                <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
              </svg>
            </span>
          </div>
          {errors.email && (
            <span className={styles.errorMessage}>
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <circle cx="12" cy="12" r="10" />
                <line x1="12" y1="8" x2="12" y2="12" />
                <line x1="12" y1="16" x2="12.01" y2="16" />
              </svg>
              {errors.email}
            </span>
          )}
        </div>

        {/* Course Field - Controlled Component */}
        <div className={styles.formGroup}>
          <label htmlFor="student-course" className={styles.label}>
            Select Course <span className={styles.requiredAsterisk}>*</span>
          </label>
          <div className={styles.inputWrapper}>
            <select
              id="student-course"
              name="course"
              value={formData.course}
              onChange={handleChange}
              className={`${styles.select} ${errors.course ? styles.inputError : ''}`}
            >
              <option value="" disabled>
                -- Choose an Academic Course --
              </option>
              {COURSE_OPTIONS.map((courseOption) => (
                <option key={courseOption} value={courseOption}>
                  {courseOption}
                </option>
              ))}
            </select>
            <span className={styles.fieldIcon}>
              <svg
                width="18"
                height="18"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M22 10v6M2 10l10-5 10 5-10 5z" />
                <path d="M6 12v5c3 3 9 3 12 0v-5" />
              </svg>
            </span>
          </div>
          {errors.course && (
            <span className={styles.errorMessage}>
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <circle cx="12" cy="12" r="10" />
                <line x1="12" y1="8" x2="12" y2="12" />
                <line x1="12" y1="16" x2="12.01" y2="16" />
              </svg>
              {errors.course}
            </span>
          )}
        </div>

        {/* Action Buttons */}
        <div className={styles.actions}>
          <button type="submit" className={styles.submitBtn}>
            <svg
              width="18"
              height="18"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <polyline points="20 6 9 17 4 12" />
            </svg>
            Register Student
          </button>
          <button
            type="button"
            onClick={handleReset}
            className={styles.resetBtn}
            title="Clear all fields"
          >
            <svg
              width="16"
              height="16"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M3 12a9 9 0 1 0 9-9 9.75 9.75 0 0 0-6.74 2.74L3 8" />
              <path d="M3 3v5h5" />
            </svg>
            Reset
          </button>
        </div>
      </form>
    </div>
  );
}

import React, { createContext, useContext, useState, useEffect, useMemo } from 'react';
import { COURSES_DATA, INITIAL_STUDENT_PROFILE } from '../data/coursesData';

const StudentContext = createContext();

export const StudentProvider = ({ children }) => {
  // Load initial enrolled courses from localStorage or default to 2 courses
  const [enrolledCourseIds, setEnrolledCourseIds] = useState(() => {
    try {
      const saved = localStorage.getItem('edutrack_enrolled_courses');
      if (saved) return JSON.parse(saved);
    } catch (e) {
      console.error('Failed to parse saved courses from localStorage', e);
    }
    return ['cs-101', 'web-205']; // Default 2 enrolled courses
  });

  // Student Profile state
  const [student, setStudent] = useState(() => {
    try {
      const saved = localStorage.getItem('edutrack_student_profile');
      if (saved) {
        const parsed = JSON.parse(saved);
        // If the saved profile is from an older template (e.g. Alex) or has outdated data
        if (
          !parsed.name ||
          parsed.name.toLowerCase().includes('alex') ||
          parsed.id !== INITIAL_STUDENT_PROFILE.id ||
          !parsed.avatar ||
          parsed.avatar.includes('unsplash.com')
        ) {
          localStorage.setItem('edutrack_student_profile', JSON.stringify(INITIAL_STUDENT_PROFILE));
          return INITIAL_STUDENT_PROFILE;
        }
        return { ...INITIAL_STUDENT_PROFILE, ...parsed };
      }
    } catch (e) {
      console.error('Failed to parse saved student profile', e);
    }
    return INITIAL_STUDENT_PROFILE;
  });

  // Live notification banner/toast
  const [toast, setToast] = useState(null);

  // Sync to localStorage
  useEffect(() => {
    try {
      localStorage.setItem('edutrack_enrolled_courses', JSON.stringify(enrolledCourseIds));
    } catch (e) {
      console.error('Failed to persist enrolled courses', e);
    }
  }, [enrolledCourseIds]);

  useEffect(() => {
    try {
      localStorage.setItem('edutrack_student_profile', JSON.stringify(student));
    } catch (e) {
      console.error('Failed to persist student profile', e);
    }
  }, [student]);

  const showToast = (message, type = 'success') => {
    setToast({ message, type, id: Date.now() });
    setTimeout(() => {
      setToast(null);
    }, 4000);
  };

  const isEnrolled = (courseId) => {
    return enrolledCourseIds.includes(courseId);
  };

  // Compute full enrolled course objects
  const enrolledCourses = useMemo(() => {
    return COURSES_DATA.filter(course => enrolledCourseIds.includes(course.id));
  }, [enrolledCourseIds]);

  // Compute total credits
  const totalEnrolledCredits = useMemo(() => {
    return enrolledCourses.reduce((sum, course) => sum + (course.credits || 0), 0);
  }, [enrolledCourses]);

  const enrollCourse = (courseId) => {
    if (enrolledCourseIds.includes(courseId)) {
      showToast('You are already enrolled in this course!', 'warning');
      return { success: false, message: 'Already enrolled' };
    }

    const courseToEnroll = COURSES_DATA.find(c => c.id === courseId);
    if (!courseToEnroll) {
      showToast('Course not found.', 'error');
      return { success: false, message: 'Course not found' };
    }

    if (totalEnrolledCredits + courseToEnroll.credits > student.maxCredits) {
      showToast(`Cannot enroll: Exceeds semester maximum of ${student.maxCredits} credits.`, 'error');
      return { success: false, message: 'Credit limit exceeded' };
    }

    setEnrolledCourseIds(prev => [...prev, courseId]);
    showToast(`Successfully enrolled in ${courseToEnroll.code}: ${courseToEnroll.title}!`, 'success');
    return { success: true, message: 'Enrolled successfully' };
  };

  const dropCourse = (courseId) => {
    const courseToDrop = COURSES_DATA.find(c => c.id === courseId);
    setEnrolledCourseIds(prev => prev.filter(id => id !== courseId));
    showToast(`Dropped course: ${courseToDrop ? courseToDrop.code : courseId}`, 'info');
    return { success: true, message: 'Course dropped' };
  };

  const updateStudentProfile = (updatedFields) => {
    setStudent(prev => ({ ...prev, ...updatedFields }));
    showToast('Student profile updated successfully!', 'success');
  };

  const resetProfile = () => {
    setStudent(INITIAL_STUDENT_PROFILE);
    try {
      localStorage.setItem('edutrack_student_profile', JSON.stringify(INITIAL_STUDENT_PROFILE));
    } catch (e) {
      console.error('Failed to reset profile in localStorage', e);
    }
    showToast('Profile reset to default: Akhil Apata', 'info');
  };

  return (
    <StudentContext.Provider
      value={{
        student,
        enrolledCourseIds,
        enrolledCourses,
        totalEnrolledCredits,
        isEnrolled,
        enrollCourse,
        dropCourse,
        updateStudentProfile,
        resetProfile,
        toast,
        dismissToast: () => setToast(null)
      }}
    >
      {children}
    </StudentContext.Provider>
  );
};

export const useStudent = () => {
  const context = useContext(StudentContext);
  if (!context) {
    throw new Error('useStudent must be used within a StudentProvider');
  }
  return context;
};

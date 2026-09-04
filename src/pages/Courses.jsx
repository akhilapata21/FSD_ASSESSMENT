import React, { useState, useMemo } from 'react';
import { 
  Search, 
  Filter, 
  BookOpen, 
  CheckCircle2, 
  RotateCcw,
  Sparkles,
  Layers
} from 'lucide-react';
import { COURSES_DATA } from '../data/coursesData';
import { CourseCard } from '../components/CourseCard';
import { useStudent } from '../context/StudentContext';

export const Courses = () => {
  const { enrolledCourseIds, totalEnrolledCredits, student } = useStudent();

  const [searchQuery, setSearchQuery] = useState('');
  const [selectedDepartment, setSelectedDepartment] = useState('All');
  const [selectedLevel, setSelectedLevel] = useState('All');

  // Extract unique departments for filter buttons
  const departments = useMemo(() => {
    const list = ['All', ...new Set(COURSES_DATA.map(c => c.department))];
    return list;
  }, []);

  const levels = ['All', 'Beginner', 'Intermediate', 'Advanced'];

  // Filtered courses based on search & filters
  const filteredCourses = useMemo(() => {
    return COURSES_DATA.filter(course => {
      const matchesSearch = 
        course.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        course.code.toLowerCase().includes(searchQuery.toLowerCase()) ||
        course.instructor.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        course.shortDescription.toLowerCase().includes(searchQuery.toLowerCase());

      const matchesDept = selectedDepartment === 'All' || course.department === selectedDepartment;
      const matchesLevel = selectedLevel === 'All' || course.level === selectedLevel;

      return matchesSearch && matchesDept && matchesLevel;
    });
  }, [searchQuery, selectedDepartment, selectedLevel]);

  const handleResetFilters = () => {
    setSearchQuery('');
    setSelectedDepartment('All');
    setSelectedLevel('All');
  };

  return (
    <div className="page-courses animate-fade-in">
      {/* Catalog Header */}
      <div className="catalog-header">
        <div className="catalog-title-group">
          <div className="catalog-badge">
            <BookOpen size={16} />
            <span>Curriculum Directory</span>
          </div>
          <h1 className="page-title">Course Catalog</h1>
          <p className="page-subtitle">
            Explore academic offerings, review syllabus structures, and register for courses. You are currently enrolled in <strong>{enrolledCourseIds.length} courses</strong> ({totalEnrolledCredits} of {student.maxCredits} credits used).
          </p>
        </div>

        {/* Live Enrollment Status Box */}
        <div className="catalog-status-box">
          <div className="status-box-header">
            <span className="status-title">Your Enrollment Status</span>
            <span className="status-pill">{student.semester}</span>
          </div>
          <div className="status-metrics">
            <div className="status-metric-col">
              <span className="metric-big">{enrolledCourseIds.length}</span>
              <span className="metric-desc">Enrolled</span>
            </div>
            <div className="status-metric-divider"></div>
            <div className="status-metric-col">
              <span className="metric-big">{totalEnrolledCredits}</span>
              <span className="metric-desc">Credit Hours</span>
            </div>
            <div className="status-metric-divider"></div>
            <div className="status-metric-col">
              <span className="metric-big">{student.maxCredits - totalEnrolledCredits}</span>
              <span className="metric-desc">Available</span>
            </div>
          </div>
        </div>
      </div>

      {/* Search & Filter Controls */}
      <div className="filters-container">
        <div className="search-bar-wrapper">
          <Search size={18} className="search-icon" />
          <input 
            type="text" 
            placeholder="Search by course title, code (e.g., CS 101), instructor, or keywords..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="search-input"
          />
          {searchQuery && (
            <button 
              onClick={() => setSearchQuery('')}
              className="search-clear-btn"
              aria-label="Clear search"
            >
              ×
            </button>
          )}
        </div>

        <div className="filters-row">
          {/* Department Pills */}
          <div className="filter-group">
            <span className="filter-label">Department:</span>
            <div className="filter-pills">
              {departments.map(dept => (
                <button
                  key={dept}
                  onClick={() => setSelectedDepartment(dept)}
                  className={`filter-pill ${selectedDepartment === dept ? 'active' : ''}`}
                >
                  {dept}
                </button>
              ))}
            </div>
          </div>

          {/* Level Filter */}
          <div className="filter-group level-group">
            <span className="filter-label">Level:</span>
            <div className="filter-pills">
              {levels.map(lvl => (
                <button
                  key={lvl}
                  onClick={() => setSelectedLevel(lvl)}
                  className={`filter-pill ${selectedLevel === lvl ? 'active' : ''}`}
                >
                  {lvl}
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Catalog Results Bar */}
      <div className="results-meta-bar">
        <span className="results-count">
          Showing <strong>{filteredCourses.length}</strong> of {COURSES_DATA.length} courses
        </span>
        {(searchQuery || selectedDepartment !== 'All' || selectedLevel !== 'All') && (
          <button onClick={handleResetFilters} className="btn-reset-filters">
            <RotateCcw size={14} />
            <span>Reset Filters</span>
          </button>
        )}
      </div>

      {/* Courses Grid */}
      {filteredCourses.length > 0 ? (
        <div className="courses-grid">
          {filteredCourses.map(course => (
            <CourseCard key={course.id} course={course} />
          ))}
        </div>
      ) : (
        <div className="empty-results-box">
          <Layers size={40} className="empty-icon" />
          <h3>No courses found</h3>
          <p>We couldn't find any courses matching your current search and filter criteria.</p>
          <button onClick={handleResetFilters} className="btn-primary">
            <RotateCcw size={16} />
            <span>Reset All Filters</span>
          </button>
        </div>
      )}
    </div>
  );
};

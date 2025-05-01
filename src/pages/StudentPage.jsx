import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

function StudentPage() {
  const [availableCourses, setAvailableCourses] = useState([]);
  const [studentCourses, setStudentCourses] = useState([]);
  const navigate = useNavigate();

  const addCourse = (course) => {
    if (!studentCourses.find((c) => c.id === course.id)) {
      setStudentCourses([...studentCourses, course]);
      alert(`The course you added is: ${course.id} !`);
    }
  };

  const dropCourse = (id) => {
    setStudentCourses(studentCourses.filter((course) => course.id !== id));
  };

  const goToCart = () => {
    navigate('/cart', { state: { selectedCourses: studentCourses } });
  };

  return (
    <div className="student-page">
      <h2>Available Courses</h2>
      <ul>
        {availableCourses.map((course) => (
          <li key={course._id}>
            <strong>{course.name}</strong> - {course.credits} credits
            <br />
            <button onClick={() => addCourse(course)}>Add the Course</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default StudentPage;

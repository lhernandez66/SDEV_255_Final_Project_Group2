import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const StudentPage = ({ studentCourses, setStudentCourses }) => {
  const [availableCourses, setAvailableCourses] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    fetch('https://webappfinal.glitch.me/courses')
      .then((response) => response.json())
      .then((data) => setAvailableCourses(data))
      .catch((error) => console.error('Error fetching courses:', error));
  }, []);

  const addCourse = (course) => {
    if (!studentCourses.find((c) => c._id === course._id)) {
      setStudentCourses([...studentCourses, course]);
      alert(`The course you added is: ${course.name}!`);
    } else {
      alert("Course already added.");
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
      <button onClick={goToCart}>Go to Cart</button>
    </div>
  );
};

export default StudentPage;

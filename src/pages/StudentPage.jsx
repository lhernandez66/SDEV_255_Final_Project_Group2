import React, { useState, useEffect } from 'react';

const StudentPage = ({ addCourse }) => {
  const [availableCourses, setAvailableCourses] = useState([]);

  useEffect(() => {
    fetch('https://webappfinal.glitch.me/courses') // Replace with your Glitch app URL
      .then((response) => response.json())
      .then((data) => setAvailableCourses(data))
      .catch((error) => console.error('Error fetching courses:', error));
  }, []);

  return (
    <div className="student-page">
      <h2>Available Courses</h2>
      <ul>
        {availableCourses.map((course) => (
          <li key={course._id}>
            <strong>{course.name}</strong> - {course.credits} credits
            <button onClick={() => addCourse(course)}>Add Course</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default StudentPage;

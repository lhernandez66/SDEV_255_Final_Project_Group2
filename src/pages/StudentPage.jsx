import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const availableCourses = [
  {
    id: 1,
    name: "SDEV 245 - Security and Secure Coding",
    credits: 3,
  },
  {
    id: 2,
    name: "SDEV 148 - Intro to Game Development",
    credits: 3,
  },
  {
    id: 3,
    name: "SVAD 150 - Cloud Foundations",
    credits: 3,
  },
  {
    id: 4,
    name: "INFM 109 - Informatics Fundamentals",
    credits: 3,
  },
  {
    id: 5,
    name: "CSCI 101 - Computer Science One",
    credits: 3,
  },
  {
    id: 6,
    name: "INFM 209 - Informatics and Human-Computer Interaction",
    credits: 3,
  },
];

function StudentPage() {
  const [studentCourses, setStudentCourses] = useState([]);
  const navigate = useNavigate();

  const addCourse = (course) => {
    if (!studentCourses.find((c) => c.id === course.id)) {
      setStudentCourses([...studentCourses, course]);
      alert(`The course you added is: ${course.id} !`)
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
      <h2 style={{ textAlign: 'center' }}>Available Courses</h2>
      <ul>
        {availableCourses.map((course) => (
          <li key={course.id}>
            <strong>{course.name}</strong> - {course.credits} credits
            <br />
            <button onClick={() => addCourse(course)}>Add the Course</button>
          </li>
        ))}
      </ul>

      <h2 style={{ textAlign: 'center' }}>Your Courses</h2>
      {studentCourses.length === 0 ? (
        <p style={{ textAlign: 'center' }}>You haven't added any courses yet.</p>
      ) : (
        <ul>
          {studentCourses.map((course) => (
            <li key={course.id}>
              <strong>{course.name}</strong>
              <br />
              <button onClick={() => dropCourse(course.id)}>Drop</button>
            </li>
          ))}
        </ul>
      )}

      
      <button style={{ marginTop: '20px', display: 'block', marginLeft: 'auto', marginRight: 'auto',}} onClick={goToCart}>
        Go to Cart
      </button>
    </div>
  );
}

export default StudentPage;

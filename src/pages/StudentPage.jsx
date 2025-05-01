import React, { useState, useEffect } from 'react';

const StudentPage = ({ addCourse }) => {
  const [availableCourses, setAvailableCourses] = useState([]);

<<<<<<< HEAD
  useEffect(() => {
    fetch('https://webappfinal.glitch.me/courses') // Replace with your Glitch app URL
      .then((response) => response.json())
      .then((data) => setAvailableCourses(data))
      .catch((error) => console.error('Error fetching courses:', error));
  }, []);
=======
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
>>>>>>> 33d036be7bb27c6f9417775184db8e7a252d1985

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
};

export default StudentPage;

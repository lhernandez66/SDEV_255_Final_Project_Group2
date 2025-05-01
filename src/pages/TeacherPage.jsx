import React, { useState, useEffect } from 'react';
import './TeacherPage.css';

const TeacherPage = () => {
  const [newCourse, setNewCourse] = useState({
    name: '',
    description: '',
    credits: 3,
  });
  const [courses, setCourses] = useState([]);

  useEffect(() => {
    // Fetch the courses when the page loads
    fetch('https://webappfinal.glitch.me/courses') // Replace with your Glitch app URL
      .then((response) => response.json())
      .then((data) => setCourses(data))
      .catch((error) => console.error('Error fetching courses:', error));
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setNewCourse((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Use fetch to send a POST request to the backend
    fetch('https://webappfinal.glitch.me/courses', { // Replace with your Glitch app URL
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(newCourse),
    })
      .then((response) => response.json())
      .then((data) => {
        alert('Course added successfully!');
        setCourses((prevCourses) => [...prevCourses, data]);
        setNewCourse({ name: '', description: '', credits: 3 });
      })
      .catch((error) => {
        console.error('Error adding course:', error);
      });
  };

  // Function to delete a course
  const handleDelete = (courseId) => {
    fetch(`https://webappfinal.glitch.me/courses/${courseId}`, { // Replace with your Glitch app URL
      method: 'DELETE',
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error('Error deleting course');
        }
        setCourses((prevCourses) => prevCourses.filter(course => course._id !== courseId));
      })
      .catch((error) => {
        console.error('Error deleting course:', error);
      });
  };

  return (
    <div className="teacher-page">
      <h2>Add a New Course</h2>
      <form onSubmit={handleSubmit} className="course-form">
        <label>
          Course Name:
          <input
            type="text"
            name="name"
            value={newCourse.name}
            onChange={handleChange}
            required
          />
        </label>
        <label>
          Description:
          <textarea
            name="description"
            value={newCourse.description}
            onChange={handleChange}
            required
          />
        </label>
        <label>
          Credits:
          <input
            type="number"
            name="credits"
            value={newCourse.credits}
            onChange={handleChange}
            required
          />
        </label>
        <button type="submit">Add Course</button>
      </form>

      <h2>Existing Courses</h2>
      <ul>
        {courses.map((course) => (
          <li key={course._id}>
            <strong>{course.name}</strong> - {course.credits} credits
            <button onClick={() => handleDelete(course._id)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TeacherPage;

import React, { useState, useEffect } from 'react';

const HomePage = () => {
  const [courses, setCourses] = useState([]);
  const [loading, setLoading] = useState(true); 
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch('https://webappfinal.glitch.me/courses')
      .then((response) => {
        if (!response.ok) {
          throw new Error('Error fetching courses');
        }
        return response.json();
      })
      .then((data) => {
        setCourses(data);
        setLoading(false);
      })
      .catch((error) => {
        setError(error.message);
        setLoading(false);
      });
  }, []);

  if (loading) return <div>Loading courses...</div>;
  if (error) return <div>{error}</div>;

  return (
    <div className="home-page">
      <h2 style={{ textAlign: 'center', marginBottom: '20px' }}>All Available Courses</h2>
      <ul>
        {courses.map((course) => (
          <li key={course._id}>
            <strong>{course.name}</strong> - {course.credits} credits
            <p>{course.description}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default HomePage;

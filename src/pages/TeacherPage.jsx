import React, { useState } from 'react';

export default function TeacherPage() {
  const [courses, setCourses] = useState([]);
  const [newCourse, setNewCourse] = useState('');
  const [dropCourse, setDropCourse] = useState('');

  const handleAddCourse = (e) => {
    e.preventDefault();
    if (newCourse.trim()) {
      setCourses([...courses, newCourse.trim()]);
      setNewCourse('');
    }
  };

  const handleDropCourse = (e) => {
    e.preventDefault();
    setCourses(courses.filter(course => course !== dropCourse.trim()));
    setDropCourse('');
  };

  return (
    <div>

      <form onSubmit={handleAddCourse}>
        <label>Add Course:</label>
        <input
          type="text"
          value={newCourse}
          onChange={(e) => setNewCourse(e.target.value)}
        />
        <button type="submit">Add</button>
      </form>

      <form onSubmit={handleDropCourse} style={{ marginTop: '1rem' }}>
        <label>Drop Course:</label>
        <input
          type="text"
          value={dropCourse}
          onChange={(e) => setDropCourse(e.target.value)}
        />
        <button type="submit">Drop</button>
      </form>

      <h3>Course List:</h3>
      <ul>
        {courses.map((course, index) => (
          <li key={index}>{course}</li>
        ))}
      </ul>
    </div>
  );
}

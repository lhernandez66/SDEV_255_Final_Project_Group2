import React, { useState } from 'react';
import { HashRouter as Router, Routes, Route, Link } from "react-router-dom";
import './App.css';

import HomePage from './pages/HomePage';
import TeacherPage from './pages/TeacherPage';
import StudentPage from './pages/StudentPage';
import CartPage from './pages/CartPage';

function Navbar() {
  return (
    <nav>
      <ul>
        <li><Link to="/">Courses</Link></li>
        <li><Link to="/teacher">Teacher</Link></li>
        <li><Link to="/student">Student</Link></li>
        <li><Link to="/cart">Cart</Link></li>
      </ul>
    </nav>
  );
}

function App() {
  const [studentCourses, setStudentCourses] = useState([]);

  const addCourse = (course) => {
    if (!studentCourses.find((c) => c._id === course._id)) {
      setStudentCourses([...studentCourses, course]);
    }
  };

  const dropCourse = (id) => {
    setStudentCourses(studentCourses.filter((course) => course._id !== id));
  };

  return (
    <Router>
      <div>
        <h1 className="title">Course Tracker</h1>
        <Navbar />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/teacher" element={<TeacherPage />} />
          <Route
            path="/student"
            element={<StudentPage addCourse={addCourse} />}
          />
          <Route
            path="/cart"
            element={<CartPage studentCourses={studentCourses} dropCourse={dropCourse} />}
          />
        </Routes>
      </div>
    </Router>
  );
}

export default App;


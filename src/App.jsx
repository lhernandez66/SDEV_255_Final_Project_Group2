import React, { useState } from 'react';
import { HashRouter as Router, Routes, Route, Link, Navigate } from "react-router-dom";
import './App.css';

import HomePage from './pages/HomePage';
import TeacherPage from './pages/TeacherPage';
import StudentPage from './pages/StudentPage';
import CartPage from './pages/CartPage';
import LoginPage from './pages/LoginPage';

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
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [userRole, setUserRole] = useState(''); 
  const [studentCourses, setStudentCourses] = useState([]);


  const dropCourse = (id) => {
    setStudentCourses(studentCourses.filter((course) => course._id !== id));
  };

  const handleLogin = (role) => {
    setIsAuthenticated(true);
    setUserRole(role); 
  };

  return (
    <Router>
      <div>
        <h1 className="title">Course Tracker</h1>
        <Navbar />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route
            path="/teacher"
            element={isAuthenticated && userRole === 'teacher' ? <TeacherPage /> : <Navigate to="/login?role=teacher" />}
          />
          <Route
            path="/student"
            element={isAuthenticated && userRole === 'student' ? (
              <StudentPage studentCourses={studentCourses} setStudentCourses={setStudentCourses} />
            ) : (
              <Navigate to="/login?role=student" />
            )}
          />
          <Route
            path="/cart"
            element={<CartPage studentCourses={studentCourses} dropCourse={dropCourse} />}
          />
          <Route
            path="/login"
            element={<LoginPage onLogin={handleLogin} />}
          />
        </Routes>
      </div>
    </Router>
  );
}

export default App;



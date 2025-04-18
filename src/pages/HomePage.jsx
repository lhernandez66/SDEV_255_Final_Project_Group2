// src/pages/HomePage.jsx
import React, { useState } from 'react';
import './HomePage.css'; // This should match the file path of HomePage.css



export default function HomePage() {
  const [expandedIndex, setExpandedIndex] = useState(null);

  const courses = [
    {
      name: "SDEV 245- Security and Secure Coding -3 Credits",
      description: "This course covers secure software development practices, including secure coding, threat mitigation, security testing, and cryptography fundamentals using mathematical and theoretical approaches."
    },
    {
      name: "SDEV 148- Intro to Game Development -3 Credits",
      description: "This course introduces the fundamentals of game design and development, covering key topics like game theory, development tools, genres, and industry careers, while guiding students through creating a game using an industry-standard platform.",
    },
    {
      name: "SVAD 150- Cloud Foundations -3 Credits",
      description: "This course provides a comprehensive overview of cloud computing concepts, covering core services, security, architecture, pricing, and support for students of all technical backgrounds.",
    },
    {
      name: "INFM 109- Informatics Fundamentals -3 Credits",
      description: "This course introduces key concepts and skills in information systems, covering topics like computing history, operating systems, databases, security, and cloud technologies, while emphasizing technical writing and presentation through a research project.",
    },
    {
      name: "CSCI 101- Computer Science One -3 Credits",
      description: "This course introduces the basics of procedural programming, including data types, control structures, functions, and arrays, while also exploring the history and social context of computing and the field of computer science.",
    },
    {
      name: "INFM209- Informatics and Human-Computer Interaction -3 Credits",
      description: "This course explores the principles of Human-Computer Interaction (HCI), focusing on the design and evaluation of user interfaces, human factors, data visualization, and the evolving relationship between humans and computing systems.",
    },
  ];


  const toggleDescription = (index) => {
    setExpandedIndex(expandedIndex === index ? null : index);
  };

  return (
    <div className="home-page">
      <ul className="course-list">
        {courses.map((course, index) => (
          <li key={index} className="course-item">
            <div className="course-header" onClick={() => toggleDescription(index)}>
              <strong>{course.name}</strong>
              <button className="toggle-btn">
                {expandedIndex === index ? "Hide" : "Show"} Description
              </button>
            </div>
            {expandedIndex === index && (
              <p className="course-description">{course.description}</p>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
}

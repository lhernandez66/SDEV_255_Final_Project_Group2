import React from 'react';

const CartPage = ({ studentCourses, dropCourse }) => {
  return (
    <div className="cart-page">
      <h2 style={{ textAlign: 'center', marginBottom: '20px' }}>Your Selected Courses</h2>
      {studentCourses.length === 0 ? (
        <p style={{ textAlign: 'center' }}>No courses added yet.</p>
      ) : (
        <ul>
          {studentCourses.map((course) => (
            <li key={course._id}>
              <strong>{course.name}</strong> - {course.credits} credits
              <button onClick={() => dropCourse(course._id)}>Drop Course</button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default CartPage;

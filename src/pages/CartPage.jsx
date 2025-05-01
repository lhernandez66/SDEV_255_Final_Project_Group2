import React from 'react';

const CartPage = ({ studentCourses, dropCourse }) => {
  return (
    <div className="cart-page">
      <h2>Your Selected Courses</h2>
      {studentCourses.length === 0 ? (
        <p>No courses added yet.</p>
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

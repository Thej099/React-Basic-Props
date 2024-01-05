import React from "react";
import PropTypes from "prop-types";

export default function Student(props) {
  return (
    <div className="student">
      <h5>
        <p>Name : {props.name}</p>
        <p>Age : {props.age} </p>
        <p>Student : {props.isStudent ? "Yes" : "No"} </p>
        {props.children}
      </h5>
    </div>
  );
}

Student.propTypes = {
  name: PropTypes.string,
  age: PropTypes.number,
  isStudent: PropTypes.bool,
};

Student.defaultProps = {
  name: "Guest",
  age: 0,
  isStudent: false,
};

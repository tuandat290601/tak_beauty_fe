import React from "react";

import "./Course.sass";
import Banner from "./Banner/Banner";
import Commitment from "./Commitment/Commitment";
import CourseList from "./CourseList/CourseList";

const Course = () => {
  return (
    <div id="course" className="course">
      <Banner />
      <Commitment />
      <CourseList />
    </div>
  );
};

export default Course;

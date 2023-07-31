import React from "react";

import "./CourseList.sass";
import { courses } from "../../../helpers/data";
import CourseItem from "../CourseItem/CourseItem";

const CourseList = () => {
  return (
    <div className="container">
      {courses.map((item, index) => {
        return (
          <CourseItem {...item} isRightSide={index % 2 != 0} key={index} />
        );
      })}
    </div>
  );
};

export default CourseList;

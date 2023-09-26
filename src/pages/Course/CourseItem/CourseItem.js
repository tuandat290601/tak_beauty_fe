import React from "react";

import "./CourseItem.sass";

const CourseItem = (props) => {
  const { isRightSide, name, image, content } = props;
  return (
    <div className="course-item w-100">
      <div
        className={`row ${isRightSide && "justify-content-end"
          } position-relative`}
      >
        <div className="col-7">
          <div className="course-item-image">
            <img src={image} alt={name} className="rounded-3" />
          </div>
        </div>
        <div
          className={`course-item-info ${isRightSide && "course-item-info-left"
            } position-absolute rounded-3`}
        >
          <h1>{name}</h1>
          <p>{content}</p>
          <button className="btn custom-btn">Đăng ký ngay</button>
        </div>
      </div>
    </div>
  );
};

export default CourseItem;

import React, { useEffect, useState } from "react";

import "./Training.sass";
import { CustomLink, SectionTitle } from "../../../components";
import { createSetting } from "../../../helpers/SlickSettings";
import Slider from "react-slick";
import { courses } from "../../../helpers/data";

const TrainingCourse = (props) => {
  const { name, icon } = props;
  return (
    <div className="p-3 h-100">
      <div className="training-course">
        <div className="training-course-img">
          <img src={icon} alt={name} />
        </div>
        <h1>{name}</h1>
      </div>
    </div>
  );
};

const Training = () => {
  const [setting, setSetting] = useState(null);
  const [show, setShow] = useState(null);

  useEffect(() => {
    createSetting(6, 3).then((x) => setSetting(x));
    setShow(courses[0]);
  }, []);

  return (
    <section id="training">
      <SectionTitle title="Đào tạo khóa học" />
      <div className="container">
        <div className="py-5">
          <Slider {...setting}>
            {courses.map((item, index) => {
              return (
                <div
                  className="h-100"
                  key={index}
                  onClick={() => setShow(item)}
                >
                  <TrainingCourse {...item} />
                </div>
              );
            })}
          </Slider>
        </div>
        {show && (
          <div className="training py-5">
            <div className="row">
              <div className="col-6">
                <div className="training-img">
                  <img src={show.image} alt={show.name} />
                </div>
              </div>
              <div className="col-6">
                <h1>{show.name}</h1>
                <p>{show.content}</p>
                <div className="d-flex mt-3">
                  <CustomLink path="" text="Xem thêm" />
                  <CustomLink path="" text="Đăng ký ngay" />
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default Training;

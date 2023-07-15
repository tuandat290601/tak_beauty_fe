import React, { useEffect, useState } from "react";
import { SectionTitle } from "../../../components";

import { createSetting } from "../../../helpers/SlickSettings";
import Slider from "react-slick";
import { feedbacks } from "../../../helpers/data";
import { useForm } from "react-hook-form";

import "./Feedback.sass";

const FeedbackItem = (props) => {
  const { title, content, img } = props;
  return (
    <div className="feedback-item">
      <div className="feedback-item-img">
        <img src={img} alt="Feedback" />
      </div>
      <h5>{title}</h5>
      <p>{content}</p>
    </div>
  );
};

const Feedback = () => {
  const [setting, setSetting] = useState(null);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  useEffect(() => {
    createSetting(1, 1).then((x) => setSetting(x));
  }, []);

  return (
    <section id="feedback" className="feedback pb-5">
      <SectionTitle title="Feedback kháng hàng" />
      <div className="container py-5">
        <div className="row">
          <div className="col-12 col-lg-6">
            <Slider {...setting}>
              {feedbacks.map((item, index) => {
                return (
                  <div className="p-5" key={index}>
                    <FeedbackItem {...item} />
                  </div>
                );
              })}
            </Slider>
          </div>
          <div className="col-12 col-lg-6 px-3">
            <form
              className="form py-5 px-4 rounded-3"
              onSubmit={handleSubmit((data) => console.log(data))}
            >
              <h5 className="text-center mb-3">Đăng ký tư vấn</h5>
              <div className="row">
                <div className="col-6">
                  <input
                    className="form-control"
                    {...register("name")}
                    placeholder="Tên"
                  />
                </div>
                <div className="col-6">
                  <div className="form-container">
                    <input
                      className="form-control shadow-none"
                      {...register("phone", { required: true })}
                      placeholder="Số điện thoại*"
                    />
                    {errors.phone && errors.phone.type === "required" && (
                      <span>Vui lòng nhập số điện thoại</span>
                    )}
                  </div>
                </div>
              </div>
              <div className="row">
                <div className="col-6">
                  <input
                    className="form-control"
                    {...register("email")}
                    type="email"
                    placeholder="Email"
                  />
                </div>
                <div className="col-6">
                  <input
                    className="form-control"
                    {...register("dob")}
                    type="date"
                  />
                </div>
              </div>
              <div className="row">
                <div className="col-12">
                  <input
                    className="form-control"
                    {...register("service")}
                    type="text"
                    placeholder="Dịch vụ"
                  />
                </div>
              </div>
              <div className="row">
                <div className="col-12">
                  <textarea
                    className="form-control"
                    {...register("note")}
                    type="text"
                    placeholder="Ghi chú"
                  />
                </div>
              </div>
              <button type="submit" className="btn py-3 w-100">
                ĐĂNG KÝ
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Feedback;

/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useState } from "react";
import { BasicTextBox } from "../../../../components";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { BasicEditor } from "../../../../components/Editor/BasicEditor";
import { ADD_PRODUCT_OBJ } from "../../../../helpers/schema-obj";

const Tab = ({ control, errors, getValues }) => {
  const [index, setIndex] = useState(0);
  return (
    <div className="bg-white w-full  rounded-md">
      <ul className="nav nav-tabs  rounded-md">
        <li
          className="nav-item mx-[1px]"
          onClick={() => {
            if (index !== 0) setIndex(0);
          }}
        >
          <a
            className={`nav-link ${index === 0 && "active"}`}
            aria-current="page"
            href="#"
          >
            Tiếng Việt
          </a>
        </li>
        <li
          className="nav-item "
          onClick={() => {
            // if (index !== 1) setIndex(1);
          }}
        >
          <a
            className={`nav-link cursor-no-drop ${index === 1 && "active"}`}
            href="#"
          >
            Liên kết
          </a>
        </li>
      </ul>
      {!!index ? (
        <OtherLink control={control} errors={errors} />
      ) : (
        <Content control={control} errors={errors} getValues={getValues} />
      )}
    </div>
  );
};
const Content = ({ control, errors, getValues }) => {
  return (
    <div className="py-3 px-[10px] flex flex-col gap-1">
      <BasicTextBox
        wrapperClass="m-0"
        control={control}
        name={ADD_PRODUCT_OBJ.TITLE}
        errMsg={errors["title"] ? errors["title"]?.message : null}
        label={"Tiêu đề"}
        subtitle="Tiêu đề được lấy làm thẻ H1"
        hideSubtitle={false}
      />
      <BasicEditor
        control={control}
        name={ADD_PRODUCT_OBJ.DESCRIPTION}
        title="Tóm tắt"
        className="quill-summary"
        value={getValues(ADD_PRODUCT_OBJ.DESCRIPTION)}
      ></BasicEditor>
      <BasicEditor
        control={control}
        name={ADD_PRODUCT_OBJ.DETAIL}
        title="Nội dung"
        className="quill-content"
        value={getValues(ADD_PRODUCT_OBJ.DETAIL)}
      ></BasicEditor>
    </div>
  );
};
const OtherLink = ({ control, errors }) => {
  return (
    <div className="pb-3 pt-2 px-[10px]">
      <BasicTextBox
        wrapperClass="m-0"
        control={control}
        name={"selling"}
        errMsg={errors["selling"] ? errors["selling"]?.message : null}
        label={"Sản phẩm bán chạy"}
        hideSubtitle
      />
      <BasicTextBox
        wrapperClass="m-0"
        control={control}
        name={"related_product"}
        errMsg={
          errors["related_product"] ? errors["related_product"]?.message : null
        }
        label={"Sản phẩm bán chạy"}
        subtitle="Nếu không chọn sản phẩm liên quan sẽ được lấy từ sản phẩm cùng danh mục."
        hideSubtitle={false}
      />
      <BasicTextBox
        wrapperClass="m-0"
        control={control}
        name={"related_post"}
        errMsg={errors["related_post"] ? errors["related_post"]?.message : null}
        label={"Tin tức liên quan"}
        hideSubtitle
      />
    </div>
  );
};

export default Tab;

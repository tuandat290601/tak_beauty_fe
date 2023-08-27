import React from "react";
import { BasicTextBox, ImageTextBox } from "../../../components";
import { ADD_CATEGORY_OBJ } from "../../../helpers/schema-obj";
import BasicButton from "../../../components/Button/BasicButton";
import { FaImage, FaSave } from "react-icons/fa";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { addCategorySchema } from "../../../helpers/form-schema";

const ShortCategoryForm = () => {
  const {
    handleSubmit,
    control,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(addCategorySchema),
    defaultValues: {
      [ADD_CATEGORY_OBJ.TITLE]: "",
      [ADD_CATEGORY_OBJ.PARENT_ID]: "",
      [ADD_CATEGORY_OBJ.IMAGE]: "",
    },
    mode: "onChange",
  });

  async function onSubmit(data) {
    console.log(data);
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="w-[40%] bg-white p-3">
      <hr className="text-slate-400" />

      {/* Fields */}
      <div className="p-2">
        <BasicTextBox
          control={control}
          name={ADD_CATEGORY_OBJ.TITLE}
          errMsg={
            errors[ADD_CATEGORY_OBJ.TITLE]
              ? errors[ADD_CATEGORY_OBJ.TITLE]?.message
              : null
          }
          label={"Tiêu đề"}
          subtitle="Tiêu đề được lấy làm thẻ H1"
          hideSubtitle={false}
          wrapperClass="mb-3"
        />
        <BasicTextBox
          control={control}
          name={ADD_CATEGORY_OBJ.PARENT_ID}
          errMsg={
            errors[ADD_CATEGORY_OBJ.PARENT_ID]
              ? errors[ADD_CATEGORY_OBJ.PARENT_ID]?.message
              : null
          }
          label={"Danh mục"}
        />
        <ImageTextBox
          control={control}
          name={ADD_CATEGORY_OBJ.IMAGE}
          onBtnClick={() => console.log("image")}
          errMsg={
            errors[ADD_CATEGORY_OBJ.IMAGE]
              ? errors[ADD_CATEGORY_OBJ.IMAGE]?.message
              : null
          }
          label={"Hình ảnh"}
          btnTitle="Chọn ảnh"
          btnClassName={"!bg-blue-500"}
          btnIcon={<FaImage />}
        />
      </div>

      <BasicButton
        title="Lưu"
        icon={<FaSave />}
        type="submit"
        className="green-btn"
      />
    </form>
  );
};

export default ShortCategoryForm;

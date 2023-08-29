import React from "react";
import { BasicDropdown, BasicTextBox, ImageTextBox } from "../../../components";
import { ADD_CATEGORY_OBJ } from "../../../helpers/schema-obj";
import BasicButton from "../../../components/Button/BasicButton";
import { FaImage, FaSave } from "react-icons/fa";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { addCategorySchema } from "../../../helpers/form-schema";
import useCategories from "../../../hooks/Categories/useCategories";
import { categoryApi } from "../../../api";
import { RESP_MSG } from "../../../configuration/respMsg";

const ShortCategoryForm = () => {
  // Category list util
  const { tempFilterCategory, createCategoryListDropdown, isLoading } =
    useCategories({ defCategoryTitle: "Chọn danh mục" });

  const {
    handleSubmit,
    control,
    setValue,
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
    console.log("onSubmit", data);

    try {
      const resp = await categoryApi.postCategory(data);
      console.log(
        "🚀 ~ file: ShortCategoryForm.js:35 ~ onSubmit ~ resp:",
        resp
      );

      if (resp.response.status === RESP_MSG.SUCCESS) {
        console.log("Add category success");
      }
    } catch (error) {
      console.error(
        "🚀 ~ file: ShortCategoryForm.js:42 ~ onSubmit ~ error:",
        error
      );
    }
  }

  React.useEffect(() => {
    setValue(ADD_CATEGORY_OBJ.PARENT_ID, tempFilterCategory.id);

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [tempFilterCategory]);

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="w-[40%] bg-white p-3 rounded-md"
    >
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
        {/* <BasicTextBox
          control={control}
          name={ADD_CATEGORY_OBJ.PARENT_ID}
          errMsg={
            errors[ADD_CATEGORY_OBJ.PARENT_ID]
              ? errors[ADD_CATEGORY_OBJ.PARENT_ID]?.message
              : null
          }
          label={"Danh mục"}
        /> */}

        <div className="mb-2">
          <label className="font-medium text-black mb-1 text-sm">
            Danh mục
          </label>
          <BasicDropdown
            className="border-none bg-white"
            classNameTitle="select-none"
            highlightClass="!bg-blue-500 rounded-md !text-white"
            itemClass="hover:!bg-blue-500 hover:!text-white rounded-md"
            dropdownClass=""
            title={tempFilterCategory.title}
            noTooltip={true}
            items={createCategoryListDropdown()}
            disabled={isLoading}
            titleWrapperClass="!px-2"
          />
        </div>

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

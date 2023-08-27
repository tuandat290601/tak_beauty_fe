import React from "react";
import HeaderMainPage from "../Header/HeaderMainPage";
import { FaImage, FaPlusCircle, FaSave } from "react-icons/fa";
import BasicButton from "../../../components/Button/BasicButton";
import { useQuery } from "@tanstack/react-query";
import { categoryApi } from "../../../api";

// Form
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { BasicTextBox, ImageTextBox } from "../../../components";
import { addCategorySchema } from "../../../helpers/form-schema";
import { ADD_CATEGORY_OBJ } from "../../../helpers/schema-obj";

const ProductsCategories = () => {
  const { data, isLoading } = useQuery({
    queryKey: ["getCategories"],
    queryFn: async () => await categoryApi.getCategories(),
  });
  console.log(
    "🚀 ~ file: ProductsCategories.js:13 ~ ProductsCategories ~ data:",
    data
  );

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
    <div className="page-body">
      {/* Header */}
      <HeaderMainPage>
        <div className="flex justify-end ui-layout gap-x-2">
          <BasicButton icon={<FaPlusCircle />} title="Thêm Mới (F3)" />
          <BasicButton
            icon={<FaPlusCircle />}
            title="Thêm nhanh (CTRL + F3)"
            onClick={() => console.log("run")}
          />
        </div>
      </HeaderMainPage>

      {/* Content */}
      <div className="flex gap-x-4 ui-layout">
        {/* Category form */}
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="w-[40%] bg-white p-3"
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

          <BasicButton title="Lưu" icon={<FaSave />} type="submit" />
        </form>

        {/* Category list */}
        <div className="w-[60%] bg-white h-40"></div>
      </div>
    </div>
  );
};

export default ProductsCategories;

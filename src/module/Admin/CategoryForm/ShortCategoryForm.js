import React from "react";
import { BasicDropdown, BasicTextBox, ImageTextBox } from "../../../components";
import { ADD_CATEGORY_OBJ } from "../../../helpers/schema-obj";
import BasicButton from "../../../components/Button/BasicButton";
import { FaImage, FaSave } from "react-icons/fa";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { addCategorySchema } from "../../../helpers/form-schema";
import useCategories from "../../../hooks/Categories/useCategories";
import CircleSpinLoading from "../../../components/Loading/CircleSpinLoading";

const ShortCategoryForm = () => {
  // Category list util
  const {
    tempFilterCategory,
    createCategoryListDropdown,
    addCategory,
    isProccessing,
  } = useCategories({ defCategoryTitle: "Chọn danh mục" });

  const [selectedImage, setSelectedImage] = React.useState(null);

  const {
    handleSubmit,
    control,
    setValue,
    formState: { errors },
    reset,
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
    await addCategory(data, reset());
  }

  React.useEffect(() => {
    setValue(ADD_CATEGORY_OBJ.PARENT_ID, tempFilterCategory.id);

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [tempFilterCategory]);

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="w-[40%] bg-white p-3 rounded-md relative"
    >
      {/* Adding category */}
      {isProccessing ? (
        <div
          className="absolute w-full h-full z-10 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-black 
        bg-opacity-70 flex justify-center items-center rounded-md cursor-wait"
        >
          <CircleSpinLoading className="!w-14 !h-14" />
        </div>
      ) : null}

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
            disabled={isProccessing}
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
          haveLabel={true}
          selectedImage={selectedImage}
          setSelectedImage={setSelectedImage}
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

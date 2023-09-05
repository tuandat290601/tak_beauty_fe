import React from "react";
import { FaImage, FaSave } from "react-icons/fa";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import useCategories from "../../../../hooks/Categories/useCategories";
import { addCategorySchema } from "../../../../helpers/form-schema";
import { ADD_CATEGORY_OBJ } from "../../../../helpers/schema-obj";
import useUpload from "../../../../hooks/useUpload";
import CircleSpinLoading from "../../../../components/Loading/CircleSpinLoading";
import BasicTextBox from "../../../../components/Input/BasicTextBox";
import BasicDropdown from "../../../../components/Dropdown/BasicDropdown";
import { ImageTextBox } from "../../../../components";
import BasicButton from "../../../../components/Button/BasicButton";

const AddCategoryForm = () => {
  // Category list util
  const { selectedCategory, categoryDropdown, addCategory, isProccessing } =
    useCategories({ placeholderCategoryTitle: "Chọn danh mục" });

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
    mode: "onSubmit",
  });

  const { uploadImage } = useUpload();

  async function onSubmit(data) {
    try {
      const image = await uploadImage(selectedImage);
      const submitData = { ...data, image };
      console.log("onSubmit", submitData);
      await addCategory(submitData, resetForm());
    } catch (error) {
      console.error(error);
    }
  }

  function resetForm(params) {
    reset();
    setSelectedImage(null);
  }

  React.useEffect(() => {
    setValue(ADD_CATEGORY_OBJ.PARENT_ID, selectedCategory.id);

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [selectedCategory]);

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
            title={selectedCategory.title}
            noTooltip={true}
            items={categoryDropdown}
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
        className="green-btn btn text-xs text-white"
      />
    </form>
  );
};

export default AddCategoryForm;

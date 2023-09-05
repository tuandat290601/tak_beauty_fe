import React from "react";
import HeaderMainPage from "../Header/HeaderMainPage";
import BasicButton from "../../../components/Button/BasicButton";
import { AiFillSave } from "react-icons/ai";
import { useNavigate, useParams } from "react-router-dom";
import { FaPlusCircle, FaReply } from "react-icons/fa";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { addCategorySchema } from "../../../helpers/form-schema";
import { ADD_CATEGORY_OBJ } from "../../../helpers/schema-obj";
import { BasicDropdown, BasicTextBox, ImageTextBox } from "../../../components";
import useCategories from "../../../hooks/Categories/useCategories";
import useUpload from "../../../hooks/useUpload";

const CategoryEdit = () => {
  const { id } = useParams();

  const {
    categoryList,
    selectedCategory,
    setSelectedCategory,
    isProccessing,
    categoryDropdown,
    updateCategory,
    isSuccess,
  } = useCategories({
    placeholderCategoryTitle: "Chọn danh mục cha",
  });

  const [defaultValues, setDefaultValues] = React.useState({});

  const navigate = useNavigate();

  const [selectedImage, setSelectedImage] = React.useState(null);

  const {
    handleSubmit,
    control,
    formState: { errors },
    reset,
    setValue,
    watch,
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
      await updateCategory(id, submitData);
    } catch (error) {
      console.error("error");
    }
  }

  const cardClass = "rounded-md shadow-sm p-3";

  // Get default value from category list
  React.useEffect(() => {
    if (isSuccess) {
      setDefaultValues(
        categoryList?.responseData?.rows?.find((item) => item.id === id)
      );
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isSuccess, categoryList]);

  // Set default value for form
  React.useEffect(() => {
    if (defaultValues?.id) {
      reset({
        [ADD_CATEGORY_OBJ.TITLE]: defaultValues.title,
        [ADD_CATEGORY_OBJ.PARENT_ID]: defaultValues.parentId || "",
        [ADD_CATEGORY_OBJ.IMAGE]: defaultValues.image || "",
      });
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [defaultValues]);

  // On category dropdown change
  React.useEffect(() => {
    if (selectedCategory) {
      setValue(ADD_CATEGORY_OBJ.PARENT_ID, selectedCategory.id);
    }

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [selectedCategory]);

  // Set parent category
  React.useEffect(() => {
    if (defaultValues?.parentId) {
      setSelectedCategory(
        categoryDropdown.find((item) => item.id === defaultValues.parentId)
      );
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [categoryDropdown, defaultValues]);

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="page-body">
      <HeaderMainPage>
        <div className="flex gap-x-2 justify-end ui-layout">
          <BasicButton
            disabled={false}
            icon={<AiFillSave />}
            className="btn text-white green-btn rounded-md text-xs !px-5 !py-[7px]"
            title="Lưu"
            type="submit"
          />
          <BasicButton
            icon={<FaPlusCircle />}
            title="Thêm mới"
            className="btn blue-btn !px-5 !py-[7px] text-xs text-white"
          />
          <BasicButton
            icon={<FaReply />}
            className="btn blue-btn text-white rounded-md text-xs !px-5 !py-[7px]"
            title="Quay lại"
            onClick={() => {
              navigate("../");
            }}
          />
        </div>
      </HeaderMainPage>

      <div className="ui-layout ui-title-bar">
        <h2 className="text-2xl font-medium py-[25px]">
          {defaultValues?.title}
        </h2>

        <div className="w-full flex gap-x-10 items-start">
          <div className={`bg-white w-2/3 ${cardClass}`}>
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
            />
          </div>
          <div className="flex-1">
            <div className={`bg-white ${cardClass}`}>
              <label className="font-medium text-black mb-1 text-sm">
                Danh mục cha
              </label>
              <BasicDropdown
                className="border-none bg-white"
                classNameTitle="select-none"
                highlightClass="!bg-blue-500 rounded-md !text-white"
                itemClass="hover:!bg-blue-500 hover:!text-white rounded-md"
                dropdownClass=""
                title={selectedCategory?.title}
                noTooltip={true}
                items={categoryDropdown}
                disabled={isProccessing}
                titleWrapperClass="!px-2"
              />
            </div>
            <div className={`bg-white mt-2 ${cardClass}`}>
              <ImageTextBox
                control={control}
                onBtnClick={() => console.log("image")}
                label={"Hình ảnh"}
                btnTitle="Chọn ảnh"
                btnClassName={"!bg-blue-500"}
                haveLabel={true}
                selectedImage={selectedImage}
                setSelectedImage={setSelectedImage}
                initImage={watch(ADD_CATEGORY_OBJ.IMAGE)}
              />
            </div>
          </div>
        </div>
      </div>
    </form>
  );
};

export default CategoryEdit;

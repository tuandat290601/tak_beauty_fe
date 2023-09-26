import React from "react";
import { AiFillSave } from "react-icons/ai";
import { useNavigate, useParams } from "react-router-dom";
import { FaReply } from "react-icons/fa";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import useCategories from "../../../../hooks/Categories/useCategories";
import { addCategorySchema } from "../../../../helpers/form-schema";
import { ADD_CATEGORY_OBJ } from "../../../../helpers/schema-obj";
import useUpload from "../../../../hooks/useUpload";
import HeaderMainPage from "../../Header/HeaderMainPage";
import BasicButton from "../../../../components/Button/BasicButton";
import {
  BasicDropdown,
  BasicTextBox,
  ImageTextBox,
} from "../../../../components";
import { toast } from "react-toastify";
import LoadingOverlay from "../../../../components/Loading/LoadingOverlay/LoadingOverlay";

const CategoryEdit = () => {
  const { id } = useParams();

  const {
    categoryList,
    selectedCategory,
    setSelectedCategory,
    isProccessing,
    isLoading,
    categoryDropdown,
    updateCategory,
    isSuccess,
  } = useCategories({
    placeholderCategoryTitle: "Chọn danh mục cha",
  });

  const [defaultValues, setDefaultValues] = React.useState({});

  const navigate = useNavigate();

  const [selectedImage, setSelectedImage] = React.useState(null);
  // const [footerWidth, setFooterWidth] = React.useState(0);

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
      if (data.parentId === id) {
        toast.error(
          "Không thể cập nhật đối tượng này thành cha của đối tượng này"
        );
        return;
      }

      let image = "";
      let submitData = { ...data };

      // Update image when needed
      if (selectedImage?.name) {
        image = await uploadImage(selectedImage);
        submitData = { ...data, image };
      }

      await updateCategory(id, submitData);
      navigate("../");
    } catch (error) {
      console.error("error");
    }
  }

  const cardClass = "rounded-md shadow-sm p-3";
  const pagePadding = "px-[10px]";

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

  const contentRef = React.useRef(null);

  // Get edit width
  // React.useEffect(() => {
  //   if (contentRef.current) setFooterWidth(contentRef.current.offsetWidth);
  //   function handleResize() {
  //     if (contentRef.current) {
  //       setFooterWidth(contentRef.current.offsetWidth);
  //     }
  //   }

  //   window.addEventListener("resize", handleResize);

  //   return () => {
  //     window.removeEventListener("resize", handleResize);
  //   };
  // }, []);

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="page-body">
      <LoadingOverlay show={isProccessing || isLoading} />

      <HeaderMainPage>
        <div
          className={`flex gap-[10px] mr-[10px] justify-end py-2 bg-white ${pagePadding}`}
        >
          <BasicButton
            disabled={isProccessing || isLoading}
            icon={<AiFillSave />}
            className="btn text-white green-btn rounded-md text-xs !px-5 !py-[7px]"
            title="Lưu"
            type="submit"
          />
          {/* <BasicButton
            icon={<FaPlusCircle />}
            title="Thêm mới"
            className="btn blue-btn !px-5 !py-[7px] text-xs text-white"
          /> */}
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

      <div className={`ui-title-bar ${pagePadding}`}>
        <h2 className="text-2xl font-medium py-[25px]">
          {defaultValues?.title}
        </h2>

        <div className={`w-full flex gap-x-[20px] items-start`}>
          <div ref={contentRef} className={`w-2/3 bg-white ${cardClass}`}>
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
                dropdownClass="max-h-[400px] overflow-y-scroll"
                isSearch={true}
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
      {/* <CategoryEditFooter width={footerWidth} isProccessing={isProccessing} /> */}
    </form>
  );
};

// const CategoryEditFooter = ({ width = 0, isProccessing = false }) => {
//   const ref = React.useRef(null);

//   React.useEffect(() => {
//     if (ref?.current) {
//       ref.current.style.width = `${width}px`;
//     }
//   }, [width]);

//   return (
//     <>
//       <HeaderMainPage
//         isBottom
//         className={`bottom-0 border rounded-md w-fit mx-[10px]`}
//       >
//         <div className="px-3 py-2" ref={ref}>
//           <BasicButton
//             disabled={isProccessing}
//             icon={<AiFillSave />}
//             className="btn ml-auto text-white green-btn rounded-md text-xs"
//             title="Lưu"
//             type="submit"
//           />
//         </div>
//       </HeaderMainPage>
//     </>
//   );
// };

export default CategoryEdit;

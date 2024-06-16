import React from "react";
import BasicModal from "../../../../components/Popup/BasicModal";
import BasicTextBox from "../../../../components/Input/BasicTextBox";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import { ADD_MULTI_CATEGORY_OBJ } from "../../../../helpers/schema-obj";
import useCategories from "../../../../hooks/Categories/useCategories";
import BasicDropdown from "../../../../components/Dropdown/BasicDropdown";
import BasicButton from "../../../../components/Button/BasicButton";
import { FaSave } from "react-icons/fa";
import { addMultiCategorySchema } from "../../../../helpers/form-schema";

const QuickAddCategories = ({ isOpen = false, closeQuickAdd = () => { } }) => {
  const {
    handleSubmit,
    control,
    setValue,
    formState: { errors },
    reset,
  } = useForm({
    resolver: yupResolver(addMultiCategorySchema),
    defaultValues: {
      [ADD_MULTI_CATEGORY_OBJ.TITLE_LIST]: "",
      [ADD_MULTI_CATEGORY_OBJ.PARENT_ID]: "",
    },
    mode: "onSubmit",
  });

  const {
    addMultiCategory,
    categoryDropdown,
    selectedCategory,
    isProccessing,
    resetCategoryDropdown,
  } = useCategories({ placeholderCategoryTitle: "Chọn danh mục" });

  async function onSubmit(data) {
    try {
      const submitData = {
        title: data[ADD_MULTI_CATEGORY_OBJ.TITLE_LIST].split("\n"),
        parentId: data.parentId,
      };
      await addMultiCategory(submitData, onCloseForm());
    } catch (error) {
      console.error(error);
    }
  }

  function onCloseForm() {
    reset();
    resetCategoryDropdown();
    closeQuickAdd();
  }

  React.useEffect(() => {
    setValue(ADD_MULTI_CATEGORY_OBJ.PARENT_ID, selectedCategory.id);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [selectedCategory]);

  return (
    <BasicModal
      open={isOpen}
      handleClose={onCloseForm}
      fullWidth={true}
      clickOutside={() => { }}
      haveCloseBtn={true}
    >
      <h4 className="text-2xl font-medium">Thêm danh mục</h4>
      <hr className="my-3" />

      <form onSubmit={handleSubmit(onSubmit)}>
        <label className="font-medium text-black mb-1 text-sm">
          Danh mục cha
        </label>
        <BasicDropdown
          className="border-none bg-white"
          classNameTitle="select-none"
          highlightClass="!bg-blue-500 rounded-md !text-white"
          itemClass="hover:!bg-blue-500 hover:!text-white rounded-md"
          dropdownClass="max-h-[300px] overflow-y-scroll"
          isSearch={true}
          title={selectedCategory.title}
          noTooltip={true}
          items={categoryDropdown}
          disabled={isProccessing}
          titleWrapperClass="!px-2"
        />
        <BasicTextBox
          control={control}
          type="textArea"
          rows={10}
          name={ADD_MULTI_CATEGORY_OBJ.TITLE_LIST}
          errMsg={
            errors[ADD_MULTI_CATEGORY_OBJ.TITLE_LIST]
              ? errors[ADD_MULTI_CATEGORY_OBJ.TITLE_LIST]?.message
              : null
          }
          placeholder="Nhập danh sách danh mục muốn thêm mới"
          subtitle="Mỗi danh mục nhập trên một dòng, mỗi lần nhập tối đa 50 tên danh mục"
          hideSubtitle={false}
          wrapperClass="my-2"
        />

        <div className="flex justify-end gap-x-2 mt-3">
          <BasicButton
            onClick={onCloseForm}
            disabled={isProccessing}
            className="!px-8 !py-1 !rounded-lg !font-bold border !border-gray-400 hover:bg-black 
            hover:text-white btn"
            type="button"
            title={"Đóng"}
          />
          <BasicButton
            type="submit"
            disabled={isProccessing}
            icon={<FaSave />}
            className={` !text-white !px-8 !py-1 !rounded-lg btn blue-btn`}
            title={"Lưu"}
          />
        </div>
      </form>
    </BasicModal>
  );
};

export default QuickAddCategories;

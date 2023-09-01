import React from "react";
import HeaderMainPage from "../Header/HeaderMainPage";
import BasicButton from "../../../components/Button/BasicButton";
import { AiFillSave } from "react-icons/ai";
import { useNavigate } from "react-router-dom";
import { FaPlusCircle, FaReply } from "react-icons/fa";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { addCategorySchema } from "../../../helpers/form-schema";
import { ADD_CATEGORY_OBJ } from "../../../helpers/schema-obj";
import { BasicTextBox } from "../../../components";

const CategoryEdit = () => {
  const navigate = useNavigate();

  const {
    handleSubmit,
    control,
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

  function onSubmit(data) {
    console.log(data);
  }

  return (
    <div className="page-body">
      <HeaderMainPage>
        <div className="flex gap-x-2 justify-end ui-layout">
          <BasicButton
            disabled={false}
            icon={<AiFillSave />}
            className="btn text-white bg-[#08E783] rounded-md text-xs !px-5 !py-[7px]"
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
            className="btn bg-[#416DEA] text-white rounded-md text-xs !px-5 !py-[7px]"
            title="Quay lại"
            onClick={() => {
              navigate("../");
            }}
          />
        </div>
      </HeaderMainPage>

      <div className="ui-layout ui-title-bar">
        <h2 className="text-2xl font-medium py-[25px]">dasdsads</h2>

        <form
          onSubmit={handleSubmit(onSubmit)}
          className="w-full flex gap-x-10"
        >
          <div className="bg-white w-2/3 h-40 rounded-md shadow-sm p-3">
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
          </div>
          <div className="bg-white flex-1 h-40 rounded-md shadow-sm"></div>
        </form>
      </div>
    </div>
  );
};

export default CategoryEdit;

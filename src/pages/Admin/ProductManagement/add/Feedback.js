import React, { useState } from "react";
import { BasicTextBox } from "../../../../components";
import { useFieldArray } from "react-hook-form";
import { Close } from "@mui/icons-material";
import { AddCircle } from "@mui/icons-material";
import { MenuItem, Select } from "@mui/material";

const Feedback = ({
  control,
  getValues = () => {},
  setValue = () => {},
  errors,
}) => {
  const { fields, append, remove } = useFieldArray({
    control,
    name: "feedback",
  });

  function handleRemoveSet(index) {
    remove(index);
  }
  function handleAddSet() {
    append({ username: "", rating: "", content: "" });
  }

  return (
    <div className="px-[10px] py-4 rounded-md bg-[#f9fafb] mt-2">
      <h3 className="font-medium text-black mb-2 text-sm">Feedback</h3>

      {fields.map((item, index) => {
        return (
          <div key={item.id}>
            <div className="flex gap-x-2 items-center justify-center relative mb-1">
              <BasicTextBox
                setValue={setValue}
                index={index}
                control={control}
                name={`feedback[${index}].username`}
                autoComplete="off"
                errors={
                  errors.feedback
                    ? errors.feedback[index]?.content?.message
                    : null
                }
                className="w-full px-10 py-2 !pr-10 outline-none border rounded-md border-slate-400
                focus:border-black focus:font-medium focus:text-black transition-all"
                wrapperClass="w-full"
                placeHolder={"Tên người dùng"}
              />
              <BasicTextBox
                setValue={setValue}
                index={index}
                control={control}
                name={`feedback[${index}].content`}
                autoComplete="off"
                errors={
                  errors.feedback
                    ? errors.feedback[index]?.content?.message
                    : null
                }
                className="w-full px-10 py-2 !pr-10 outline-none border rounded-md border-slate-400
                focus:border-black focus:font-medium focus:text-black transition-all"
                wrapperClass="w-full"
                placeHolder={"Đánh giá sao trên thang 5"}
              />
              <BasicTextBox
                setValue={setValue}
                index={index}
                control={control}
                name={`feedback[${index}].rating`}
                autoComplete="off"
                errors={
                  errors.feedback
                    ? errors.feedback[index]?.content?.message
                    : null
                }
                className="w-full px-10 py-2 !pr-10 outline-none border rounded-md border-slate-400
                focus:border-black focus:font-medium focus:text-black transition-all"
                wrapperClass="w-full"
                placeHolder={"Bình luận"}
              />

              <button
                type="button"
                onClick={() => handleRemoveSet(index)}
                className={`absolute top-2 right-2 `}
              >
                <Close />
              </button>
            </div>
            {errors?.feedback && errors?.feedback[index] && (
              <p className="text-red-600 mb-2">
                {errors?.feedback[index].content.message}
              </p>
            )}
          </div>
        );
      })}

      <button
        type="button"
        onClick={handleAddSet}
        className={`mb-4 p-2  rounded-md w-full flex items-center 
          justify-center gap-x-1 text-white bg-blue-500 hover:bg-blue-600`}
      >
        <AddCircle />
        <span>Thêm phản hồi</span>
      </button>
    </div>
  );
};

export default Feedback;

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
    append({ content: "", type: "RATING" });
  }

  return (
    <div className="px-[10px] py-4 rounded-md bg-[#f9fafb] mt-2">
      <h3 className="font-medium text-black mb-2 text-sm">Feedback</h3>

      {fields.map((item, index) => {
        return (
          <div key={item.id}>
            <div className="flex gap-x-2 items-center justify-center relative mb-1">
              <SelectType
                setValue={setValue}
                index={index}
                control={control}
                defaultLabel={getValues(`feedback[${index}].type`) || "RATING"}
              />
              <BasicTextBox
                control={control}
                name={`feedback[${index}].content`}
                autoComplete="off"
                errors={
                  errors.feedback
                    ? errors.feedback[index]?.content?.message
                    : null
                }
                defaultValue={getValues(`feedback[${index}].content`)}
                className="w-full px-10 py-2 outline-none border rounded-md border-slate-400
                focus:border-black focus:font-medium focus:text-black transition-all"
                wrapperClass="w-full"
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
const SelectType = ({
  index = 0,
  control,
  setValue = () => {},
  defaultLabel = "RATING",
}) => {
  const [type, setType] = useState(defaultLabel || "RATING");
  return (
    <Select
      labelId="demo-select-small-label"
      id="demo-select-small"
      value={type}
      label="Loại"
      className="h-10 bg-white "
      control={control}
      onChange={(e) => {
        setValue(`feedback[${index}].type`, e.target.value);
        setType(e.target.value);
      }}
    >
      <MenuItem value={"RATING"}>Rating</MenuItem>
      <MenuItem value={"COMMENT"}>Comment</MenuItem>
    </Select>
  );
};

export default Feedback;

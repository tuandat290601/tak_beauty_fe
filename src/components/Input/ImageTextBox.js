import React from "react";
import { useController } from "react-hook-form";
import BasicButton from "../Button/BasicButton";

const ImageTextBox = ({
  name = "",
  defaultValue = "",
  type = "text",
  label,
  control,
  errMsg = null,
  className = "",
  labelClass = "",
  wrapperClass = "",
  hideErrMsg = false,
  btnTitle = "Chọn file",
  onBtnClick = () => {},
  btnClassName = "",
  btnIcon = <></>,
  ...props
}) => {
  const { field } = useController({
    control,
    name,
    defaultValue,
  });
  const errBorderClass = "!border-red-600";

  return (
    <div
      className={`${
        type === "hidden" ? "hidden" : "flex"
      } flex-col text-slate-400 ${wrapperClass}`}
    >
      <label className={`font-medium text-black text-sm ${labelClass}`}>
        {label}
      </label>
      <div className="flex">
        <input
          type={type}
          className={`focus:ring-0 rounded-md p-2 w-[80%] border !border-r-0 rounded-r-none flex-1
          ${className}
          ${errMsg ? errBorderClass : "border-slate-400"}`}
          {...props}
          {...field}
        />
        <BasicButton
          type="button"
          title={btnTitle}
          className={`border rounded-l-none rounded-md text-white bg-blue-500 !p-2 min-w-[90px] ${btnClassName}`}
          onClick={onBtnClick}
          icon={btnIcon}
        />
      </div>
      {!hideErrMsg ? <p className="text-red-600 mt-2">{errMsg}</p> : null}
    </div>
  );
};

export default ImageTextBox;

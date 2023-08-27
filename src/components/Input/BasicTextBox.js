import React from "react";
import { useController } from "react-hook-form";

const BasicTextBox = ({
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
  subtitle = null,
  hideSubtitle = true,
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
      <label className={`font-medium text-black mb-1 text-sm ${labelClass}`}>
        {label}
      </label>
      {type === "textArea" ? (
        <textarea
          className={`focus:ring-0
          ${className}
          ${errMsg ? errBorderClass : "border-slate-400"}`}
          {...props}
          {...field}
        />
      ) : (
        <input
          type={type}
          className={`focus:ring-0 border rounded-md p-2
          ${className}
          ${errMsg ? errBorderClass : "border-slate-400"}`}
          {...props}
          {...field}
        />
      )}
      {!hideSubtitle ? (
        <p className="text-slate-400 mt-1 text-sm">{subtitle}</p>
      ) : null}
      {!hideErrMsg ? <p className="text-red-600 mt-2">{errMsg}</p> : null}
    </div>
  );
};

export default BasicTextBox;

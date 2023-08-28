import React from "react";

const BasicCheckbox = ({ children, ...props }) => {
  return (
    <div className="flex items-center justify-center">
      <input
        type="checkbox"
        className="scale-150 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 focus:ring-2"
        {...props}
      />
      <label className="sr-only">{children}</label>
    </div>
  );
};

export default BasicCheckbox;

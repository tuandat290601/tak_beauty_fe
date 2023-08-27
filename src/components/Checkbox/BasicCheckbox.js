import React from "react";

const BasicCheckbox = ({ children, ...props }) => {
  return (
    <div className="flex items-center">
      <input
        type="checkbox"
        className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 focus:ring-2"
        {...props}
      />
      <label for="checkbox-table-1" className="sr-only">
        {children}
      </label>
    </div>
  );
};

export default BasicCheckbox;

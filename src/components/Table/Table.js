/* eslint-disable react/function-component-definition */
import React from "react";
import "./Table.scss";
const Table = ({ children, className }) => {
  return (
    <div className={`table-style ${className}`}>
      <table>{children}</table>
    </div>
  );
};
export default Table;

/* eslint-disable react/function-component-definition */
import React from "react";
import "./Table.scss";
const Table = ({ children }) => {
  return (
    <div className="table-style">
      <table>{children}</table>
    </div>
  );
};
export default Table;

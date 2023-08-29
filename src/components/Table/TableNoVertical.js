import React from "react";
import styled from "styled-components";
const TableStyles = styled.div`
  overflow-x: auto;
  background-color: white;
  border-radius: 10px;
  box-shadow: rgb(0 0 0 / 15%) 0px 1px 4px 0px;
  table {
    width: 100%;
  }
  thead {
    background-color: #f7f7f8;
  }
  th,
  td {
    vertical-align: middle;
  }
  th {
    padding: 20px 30px;
    font-weight: 600;
    text-align: left;
    white-space: nowrap;
  }
  td {
    padding: 15px 30px;
  }
  tbody {
  }
`;
const TableNoVertical = ({ children }) => {
  return (
    <TableStyles>
      <table>{children}</table>
    </TableStyles>
  );
};

export default TableNoVertical;

import React, { useEffect, useState } from "react";
import ReactPagination from "react-paginate";
import "./style.css";
export const Pagination = ({
  handlePageClick,
  pageCount,
  currentPage,
  pageRangeDisplayed = 3,
  marginPagesDisplayed = 3,
}) => {
  return (
    <ReactPagination
      className="pagination"
      pageClassName="cursor-pointer"
      pageLinkClassName="p-2 text-black"
      activeClassName="active"
      activeLinkClassName="text-white"
      breakLabel="..."
      nextLabel="&raquo;"
      onPageChange={handlePageClick}
      pageRangeDisplayed={pageRangeDisplayed}
      marginPagesDisplayed={marginPagesDisplayed}
      pageCount={pageCount}
      previousLabel="&laquo;"
      renderOnZeroPageCount={null}
      forcePage={currentPage ? currentPage - 1 : undefined}
    ></ReactPagination>
  );
};

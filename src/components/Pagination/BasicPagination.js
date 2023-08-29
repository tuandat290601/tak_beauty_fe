import * as React from "react";
import { Pagination } from "./Pagination";

export default function BasicPagination({
  pageCount,
  handlePageClick,
  children,
  currentPage,
  isEmpty = false,
}) {
  return (
    <>
      {children}
      {!isEmpty && (
        <div className="flex justify-end">
          <Pagination
            handlePageClick={handlePageClick}
            pageCount={pageCount}
            currentPage={currentPage}
          ></Pagination>
        </div>
      )}
    </>
  );
}

import React, { useState } from "react";
import useClickOutside from "../../hooks/useClickOutSide";
import { removeVietnameseTones } from "../../helpers/StringUtil";

import { IoIosArrowUp, IoIosArrowDown } from "react-icons/io";
import CircleSpinLoading from "../Loading/CircleSpinLoading";

const BasicDropdown = ({
  items = [],
  title = "",
  className = "",
  classNameTitle = "",
  dropdownClass = "",
  noTooltip = false,
  toolTipContent = title,
  labelClass = "",
  label = "",
  highlightClass = "",
  isSort = false,
  setAsc = () => {},
  setDesc = () => {},
  disabled = false,
  isAscDefault = true,
  loading = false,
  isSearch = false,
}) => {
  const [isAsc, setIsAsc] = useState(isAscDefault);
  const [search, setSearch] = useState("");
  const { show, setShow, nodeRef } = useClickOutside();
  const handleClick = () => {
    setShow(!show);
  };

  return (
    <div
      ref={nodeRef}
      onClick={handleClick}
      className={`relative flex items-center border w-full border-gray-200 rounded-lg cursor-pointer 
      ${label ? "bg-inherit" : ""} 
      ${className}
      ${!disabled ? "pointer-events-auto" : "pointer-events-none"}`}
    >
      {label ? (
        <label
          className={`absolute top-0 left-2 -translate-y-1/2 bg-inherit text-slate-500 text-[8pt] px-1 font-normal ${labelClass}`}
        >
          {label}
        </label>
      ) : null}
      <div className="flex justify-between items-center px-4 py-2 w-full gap-2">
        {/* <Tooltip title={!noTooltip ? toolTipContent : ""} placement="top" arrow>
          <span className={`text-one-line ${classNameTitle}`}>
            {title} {isSort && (isAsc ? "tăng dần" : "giảm dần")}
          </span>
        </Tooltip> */}
        <span className={`text-one-line ${classNameTitle}`}>
          {title} {isSort && (isAsc ? "tăng dần" : "giảm dần")}
        </span>
        {!isSort ? (
          <div>
            {show ? (
              <IoIosArrowUp
                onClick={(e) => {
                  e.stopPropagation();
                  handleClick();
                }}
                style={{
                  pointerEvents: !disabled ? "auto" : "none",
                  cursor: "pointer",
                }}
              />
            ) : (
              <IoIosArrowDown
                onClick={(e) => {
                  e.stopPropagation();
                  handleClick();
                }}
                style={{
                  pointerEvents: !disabled ? "auto" : "none",
                  cursor: "pointer",
                }}
              />
            )}
          </div>
        ) : (
          {
            /* <div>
            {isAsc ? (
              <Tooltip title="Tăng dần" placement="top">
                <img
                  src="/icons/sort/descending-sort.svg"
                  alt="sort-desc-icon"
                  onClick={(e) => {
                    e.stopPropagation();
                    setIsAsc(false);
                    setAsc();
                    setShow(false);
                  }}
                />
              </Tooltip>
            ) : (
              <Tooltip title="Giảm dần" placement="top">
                <img
                  onClick={(e) => {
                    e.stopPropagation();
                    setIsAsc(true);
                    setDesc();
                    setShow(false);
                  }}
                  src="/icons/sort/ascending-sort.svg"
                  alt="sort-asc-icon"
                />
              </Tooltip>
            )}
          </div> */
          }
        )}
      </div>

      {show && (items?.length > 0 || loading) && (
        <div
          className={`absolute top-[44px] bg-white left-0 shadow-lg p-2 w-full z-[9999] rounded-lg ${dropdownClass}`}
        >
          {!loading && isSearch && (
            <input
              type="text"
              value={search}
              onChange={(e) => {
                setSearch(e.target.value);
              }}
              onClick={(e) => e.stopPropagation()}
              placeholder="Tìm kiếm..."
              className="border border-gray-200 w-full mb-2 rounded-md p-2"
            />
          )}
          {loading && (
            <div className="flex justify-center">
              <CircleSpinLoading />
            </div>
          )}
          {!loading &&
            !search &&
            items?.map((item) => (
              <div
                key={Math.random()}
                onClick={() => {
                  setShow(false);
                  item?.onClick(isAsc);
                }}
                className={`p-2 text-sm text-one-line hover:bg-gray-100 border-b border-gray-200 ${
                  item?.title === title && `font-semibold ${highlightClass}`
                } last:border-none`}
              >
                {item?.title}
              </div>
            ))}
          {!loading &&
            search &&
            items
              ?.filter((item) =>
                removeVietnameseTones(item?.title?.toLowerCase()).includes(
                  removeVietnameseTones(search.toLowerCase())
                )
              )
              .map((item) => (
                <div
                  key={Math.random()}
                  onClick={() => {
                    setShow(false);
                    item?.onClick(isAsc);
                    setSearch("");
                  }}
                  className={`p-2 text-sm text-one-line hover:bg-gray-100 border-b border-gray-200 ${
                    item?.title === title && `font-semibold ${highlightClass}`
                  } last:border-none`}
                >
                  {item?.title}
                </div>
              ))}
        </div>
      )}
    </div>
  );
};

export default BasicDropdown;

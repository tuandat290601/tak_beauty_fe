import React from "react";
import { BasicDropdown } from "../../../components";
import BasicButton from "../../../components/Button/BasicButton";
import { BsSearch } from "react-icons/bs";
import CategoryTable from "./CategoryTable/CategoryTable";
import useCategories from "../../../hooks/Categories/useCategories";
import { removeVietnameseTones } from "../../../helpers/StringUtil";
import { FaTrash } from "react-icons/fa6";
import usePopup from "../../../hooks/usePopup";
import ConfirmPopup from "../../../components/Popup/ConfirmPopup";
import { useSearchParams } from "react-router-dom";

const CategoryList = () => {
  const searchTextbox = React.useRef("");

  const [searchParams, setSearchParams] = useSearchParams();
  const filterKeywordCategory = searchParams.get("keyword");
  const filterCategory = searchParams.get("category");

  // Category list util
  const {
    categoryList,
    selectedCategory,
    categoryDropdown,
    isLoading,
    delCategory,
    checkCategoryLevel,
    delMultiCategory,
  } = useCategories({});

  const [delItemsList, setDelItemsList] = React.useState([]);

  function closeDelBtnClick() {
    closeConfirmDelete();
  }

  const {
    open: isOpenConfirmDelete,
    handleClosePopup: closeConfirmDelete,
    handleOpenPopup: openConfirmDelete,
  } = usePopup();

  function startFilter() {
    // console.log("srch key", searchTextbox.current?.value);
    // console.log("filter", tempFilterCategory?.id);

    setSearchParams({
      keyword: searchTextbox.current?.value,
      category: selectedCategory?.id,
    });
  }

  function filterTitle(keyword, filterCategory) {
    const data = categoryList?.responseData?.rows;
    let filterData = data;

    if (filterCategory) {
      filterData = data.filter(
        (item) => item.id === filterCategory || item.parentId === filterCategory
      );
    }
    if (keyword) {
      filterData = data.filter((item) =>
        removeVietnameseTones(item?.title?.toLowerCase()).includes(
          removeVietnameseTones(keyword.toLowerCase())
        )
      );
    }
    return filterData;
  }

  return (
    <div className="w-[60%] bg-white rounded-md">
      {/* Filter bar */}
      <div className="filter-bar flex justify-between items-center py-3 px-2">
        <BasicButton
          icon={<FaTrash />}
          className={`red-btn !px-2 ${
            delItemsList?.length > 0 ? "visible" : "invisible"
          }`}
          disabled={isLoading}
          onClick={() => openConfirmDelete()}
        />

        <div className="flex justify-end gap-2">
          <input
            ref={searchTextbox}
            type="text"
            className="border border-slate-400 rounded-md p-2 bg-white disabled:cursor-not-allowed"
            placeholder="Từ khóa..."
            disabled={isLoading}
          />
          <BasicDropdown
            className="border-none !w-[180px] bg-white"
            classNameTitle="select-none"
            highlightClass="!bg-blue-500 rounded-md !text-white"
            itemClass="hover:!bg-blue-500 hover:!text-white rounded-md"
            dropdownClass=""
            title={selectedCategory.title}
            noTooltip={true}
            items={categoryDropdown}
            disabled={isLoading}
            titleWrapperClass="!px-2"
          />
          <BasicButton
            icon={<BsSearch />}
            className="bg-transparent border !text-black disabled:cursor-not-allowed"
            disabled={isLoading}
            onClick={() => startFilter()}
          />
        </div>
      </div>

      <div className="category-list mt-1">
        <CategoryTable
          isLoading={isLoading}
          categoryList={filterTitle(filterKeywordCategory, filterCategory)}
          delCategory={delCategory}
          checkCategoryLevel={checkCategoryLevel}
          delItemsList={delItemsList}
          setDelItemsList={setDelItemsList}
        />
      </div>

      {/* Modal */}
      <ConfirmPopup
        isOpen={isOpenConfirmDelete}
        handleClose={closeDelBtnClick}
        handleConfirm={() =>
          delMultiCategory(delItemsList, () => setDelItemsList([]))
        }
        btnWrapperClass="px-4 !py-4"
        yesBtnLabel="Đồng ý"
        noBtnLabel="Đóng"
        positionTop={true}
      >
        <h4 className="font-bold text-left text-xl mb-2">Xóa dữ liệu</h4>
        <p className="text-left text-sm mb-2">
          Bạn có chắc muốn xóa trường dữ liệu này ?
        </p>
      </ConfirmPopup>
    </div>
  );
};

export default CategoryList;

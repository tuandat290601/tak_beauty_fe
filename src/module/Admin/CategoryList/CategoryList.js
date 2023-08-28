import React from "react";
import { categoryApi } from "../../../api";
import { useQuery } from "@tanstack/react-query";
import { BasicDropdown } from "../../../components";
import BasicButton from "../../../components/Button/BasicButton";
import { BsSearch } from "react-icons/bs";
import CategoryTable from "./CategoryTable/CategoryTable";
import { reactQueryKey } from "../../../configuration/reactQueryKey";

const CategoryList = () => {
  const defCategory = {
    id: "",
    title: "Tất cả danh mục",
    onClick: () => {
      setTempFilterCategory(defCategory);
    },
  };
  const [tempFilterCategory, setTempFilterCategory] =
    React.useState(defCategory);
  const searchTextbox = React.useRef("");

  const [filterCategory, setFilterCategory] = React.useState("");
  const [filterKeywordCategory, setFilterKeywordCategory] = React.useState("");
  const { data, isLoading } = useQuery({
    queryKey: reactQueryKey.GET_CATEGORIES(
      filterCategory,
      filterKeywordCategory
    ),
    queryFn: async () =>
      await categoryApi.getCategories(filterCategory, filterKeywordCategory),
  });

  const CategoryListData = data?.responseData?.rows?.map((item) => ({
    id: item.id,
    title: item.title,
    onClick: () => {
      setTempFilterCategory(item);
    },
  }));
  CategoryListData?.unshift(defCategory);

  function startFilter() {
    console.log("srch key", searchTextbox.current?.value);
    console.log("filter", tempFilterCategory?.id);

    setFilterKeywordCategory(searchTextbox.current?.value);
    setFilterCategory(tempFilterCategory?.id);
  }

  return (
    <div className="w-[60%] bg-white rounded-md">
      {/* Filter bar */}
      <div className="filter-bar flex justify-end gap-2 p-3">
        <input
          ref={searchTextbox}
          type="text"
          className="border border-slate-400 rounded-md p-2 bg-white disabled:cursor-not-allowed"
          placeholder="Từ khóa..."
          disabled={isLoading}
        />
        <BasicDropdown
          className="border-none !w-[160px] bg-white"
          classNameTitle="select-none"
          highlightClass="!bg-blue-500 rounded-md !text-white"
          itemClass="hover:!bg-blue-500 hover:!text-white rounded-md"
          dropdownClass=""
          title={tempFilterCategory.title}
          noTooltip={true}
          items={CategoryListData}
          disabled={isLoading}
        />
        <BasicButton
          icon={<BsSearch />}
          className="bg-transparent border !text-black disabled:cursor-not-allowed"
          disabled={isLoading}
          onClick={() => startFilter()}
        />
      </div>

      <div className="category-list mt-1">
        <CategoryTable isLoading={isLoading} categoryList={data} />
      </div>
    </div>
  );
};

export default CategoryList;

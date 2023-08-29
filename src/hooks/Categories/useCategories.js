import React from "react";
import { reactQueryKey } from "../../configuration/reactQueryKey";
import { categoryApi } from "../../api";
import { useQuery } from "@tanstack/react-query";

const useCategories = ({ defCategoryTitle = "Tất cả danh mục" }) => {
  const defCategory = {
    id: "",
    title: defCategoryTitle,
    onClick: () => {
      setTempFilterCategory(defCategory);
    },
  };

  const [tempFilterCategory, setTempFilterCategory] =
    React.useState(defCategory);

  // Fetch
  const { data: categoryList, isLoading } = useQuery({
    queryKey: reactQueryKey.GET_CATEGORIES,
    queryFn: async () => await categoryApi.getCategories(),
  });

  function createCategoryListDropdown() {
    const categoryListData = categoryList?.responseData?.rows?.map((item) => ({
      id: item.id,
      title: item.title,
      onClick: () => {
        setTempFilterCategory(item);
      },
    }));
    categoryListData?.unshift(defCategory);

    return categoryListData;
  }

  return {
    tempFilterCategory,
    createCategoryListDropdown,
    categoryList,
    isLoading,
  };
};

export default useCategories;

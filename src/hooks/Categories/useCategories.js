import React from "react";
import { reactQueryKey } from "../../configuration/reactQueryKey";
import { categoryApi } from "../../api";
import { useQuery, useQueryClient } from "@tanstack/react-query";
import { toast } from "react-toastify";
import { CATEGORY_RESP_MSG } from "../../configuration/respMsg";

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
  const [isProccessing, setIsProccessing] = React.useState(false); // Deleting, updating,...
  const queryClient = useQueryClient();

  // Fetch
  const {
    data: categoryList,
    isLoading,
    isSuccess,
  } = useQuery({
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

  async function delCategory(categoryId) {
    try {
      setIsProccessing(true);
      const resp = await categoryApi.deleteCategoryById(categoryId);
      console.log("🚀 ~ file: useCategories.js:40 ~ delCategory ~ resp:", resp);

      if (resp.status === "success") {
        queryClient.invalidateQueries(reactQueryKey.GET_CATEGORIES);
        toast.success(CATEGORY_RESP_MSG.DELETE_SUCCESS);
      } else {
        toast.error(CATEGORY_RESP_MSG.DELETE_FAILED);
      }
    } catch (error) {
      console.error(error);
    } finally {
      setIsProccessing(false);
    }
  }

  async function addCategory({ title, parentId, image }, onSuccess = () => {}) {
    try {
      setIsProccessing(true);
      const data = { title, parentId, image };
      const resp = await categoryApi.postCategory(data);
      console.log("🚀 ~ file: useCategories.js:65 ~ addCategory ~ resp:", resp);

      if (resp.status === "success") {
        toast.success(CATEGORY_RESP_MSG.ADD_SUCCESS);
        onSuccess();
        setTempFilterCategory(defCategory);
        queryClient.invalidateQueries(reactQueryKey.GET_CATEGORIES);
      } else {
        toast.error(CATEGORY_RESP_MSG.ADD_FAILED);
      }
    } catch (error) {
      console.error(
        "🚀 ~ file: useCategories.js:75 ~ addCategory ~ error:",
        error
      );
      toast.error(CATEGORY_RESP_MSG.ADD_FAILED);
    } finally {
      setIsProccessing(false);
    }
  }

  return {
    tempFilterCategory,
    createCategoryListDropdown,
    categoryList,
    isSuccess,
    isLoading:
      isLoading ||
      isProccessing ||
      queryClient.isFetching({ queryKey: reactQueryKey.GET_CATEGORIES }),
    delCategory,
    addCategory,
  };
};

export default useCategories;

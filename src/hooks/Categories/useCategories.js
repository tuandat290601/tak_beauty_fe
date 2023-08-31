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

  // Util
  function makeTree(data, root) {
    var r = [],
      o = {};
    data.forEach(function (a) {
      o[a.id] = { data: a, children: o[a.id] && o[a.id].children };
      if (a.parentId === root) {
        r.push(o[a.id]);
      } else {
        o[a.parentId] = o[a.parentId] || {};
        o[a.parentId].children = o[a.parentId].children || [];
        o[a.parentId].children.push(o[a.id]);
      }
    });
    return r;
  }

  function sortCategory() {
    if (isSuccess) {
      const data = categoryList?.responseData?.rows;
      // const newData = _(data).sortBy("title").value();
      var tree = makeTree(data, null);
      var sorted = tree.reduce(function traverse(r, a) {
        return r.concat(a.data, (a.children || []).reduce(traverse, []));
      }, []);

      return sorted;
    } else {
      return [];
    }
  }

  function checkCategoryLevel(category) {
    if (!sortedCategoryList || category?.parentId === null) return 0;

    let level = 0;
    let curCategory = { ...category };
    let curParent = sortedCategoryList.find(
      (item) => item.id === curCategory.parentId
    );

    do {
      if (curCategory?.parentId === null || !curCategory) {
        break;
      }
      curCategory = curParent;

      curParent = sortedCategoryList.find(
        (item) => item.id === curCategory.parentId
      );

      // console.log("🚀 After while:", curParent, curCategory);

      level++;
    } while (true);

    return level;
  }

  // Fetch
  const {
    data: categoryList,
    isLoading,
    isSuccess,
  } = useQuery({
    queryKey: reactQueryKey.GET_CATEGORIES,
    queryFn: async () => await categoryApi.getCategories(),
  });

  const sortedCategoryList = isSuccess ? sortCategory() : categoryList;

  function createCategoryListDropdown() {
    const categoryListData = sortedCategoryList?.map((item) => {
      const levelTitle =
        Array(checkCategoryLevel(item)).fill("|---").join("") + item.title;

      return {
        id: item.id,
        title: levelTitle,
        onClick: () => {
          setTempFilterCategory({ ...item, title: levelTitle });
        },
      };
    });
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

  async function delMultiCategory(categoryIdList, onSuccess = () => {}) {
    try {
      setIsProccessing(true);
      const categoryIds = categoryIdList.join("|");
      const resp = await categoryApi.deleteCategoryById(categoryIds);
      console.log(
        "🚀 ~ file: useCategories.js:135 ~ delMultiCategory ~ resp:",
        resp
      );

      if (resp.status === "success") {
        queryClient.invalidateQueries(reactQueryKey.GET_CATEGORIES);
        toast.success(CATEGORY_RESP_MSG.DELETE_SUCCESS);
        onSuccess();
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
    categoryList: categoryList
      ? {
          ...categoryList,
          responseData: {
            ...categoryList?.responseData,
            rows: sortedCategoryList,
          },
        }
      : null,
    isSuccess,
    isLoading:
      isLoading ||
      queryClient.isFetching({ queryKey: reactQueryKey.GET_CATEGORIES }),
    isProccessing,
    delCategory,
    addCategory,
    checkCategoryLevel,
    delMultiCategory,
  };
};

export default useCategories;

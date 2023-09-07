import React from "react";
import { reactQueryKey } from "../../configuration/reactQueryKey";
import { categoryApi } from "../../api";
import { useQuery, useQueryClient } from "@tanstack/react-query";
import { toast } from "react-toastify";
import { CATEGORY_RESP_MSG } from "../../configuration/respMsg";
import { SUBMIT_STATUS } from "../../common/constant";
import { emptyStringToNull } from "../../helpers/ObjectUtil";

const useCategories = ({
  placeholderCategoryTitle = "Tất cả danh mục",
  defCategoryId = "",
}) => {
  // ======= Fetch =======
  const {
    data: categoryList,
    isLoading,
    isSuccess,
  } = useQuery({
    queryKey: reactQueryKey.GET_CATEGORIES,
    queryFn: async () => await categoryApi.getCategories(),
  });
  const [sortedCategoryList, setSortedCategoryList] = React.useState(null);
  const [isProccessing, setIsProccessing] = React.useState(false); // Deleting, updating,...
  const queryClient = useQueryClient();

  // ======= Default values =======
  const placeholderCategory = {
    id: "",
    title: placeholderCategoryTitle,
    onClick: () => {
      setSelectedCategory(placeholderCategory);
    },
  };

  const [selectedCategory, setSelectedCategory] =
    React.useState(placeholderCategory);
  const [categoryDropdown, setCategoryDropdown] = React.useState([]);

  // ======= Util =======
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
      const data = categoryList?.responseData?.rows?.sort((a, b) =>
        a?.title?.localeCompare(b?.title)
      );
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

  function createCategoryListDropdown() {
    if (!sortedCategoryList) return [];

    const categoryListData = sortedCategoryList?.map((item) => {
      const levelTitle =
        Array(checkCategoryLevel(item)).fill("|---").join("") + item.title;

      return {
        id: item.id,
        title: levelTitle,
        onClick: () => {
          setSelectedCategory({ ...item, title: levelTitle });
        },
      };
    });
    categoryListData?.unshift(placeholderCategory);

    return categoryListData;
  }

  function resetCategoryDropdown() {
    setSelectedCategory(placeholderCategory);
  }

  // ======= CRUD =======
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
      const data = [emptyStringToNull({ title, parentId, image })];
      const resp = await categoryApi.postCategory(data);
      console.log("🚀 ~ file: useCategories.js:65 ~ addCategory ~ resp:", resp);

      if (resp.status === "success") {
        toast.success(CATEGORY_RESP_MSG.ADD_SUCCESS);
        onSuccess();
        setSelectedCategory(placeholderCategory);
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

  async function addMultiCategory(
    { title = [], parentId },
    onSuccess = () => {}
  ) {
    try {
      setIsProccessing(true);
      const data = title.map((item) =>
        emptyStringToNull({ title: item, parentId })
      );
      const resp = await categoryApi.postCategory(data);
      console.log("🚀 ~ file: useCategories.js:197 ~ resp:", resp);

      if (resp.status === SUBMIT_STATUS.SUCCESS) {
        toast.success(CATEGORY_RESP_MSG.ADD_SUCCESS);
        onSuccess();
        setSelectedCategory(placeholderCategory);
        queryClient.invalidateQueries(reactQueryKey.GET_CATEGORIES);
      } else {
        toast.error(CATEGORY_RESP_MSG.ADD_FAILED);
      }
    } catch (error) {
      console.error("🚀 ~ file: useCategories.js:208 ~ error:", error);
      toast.error(CATEGORY_RESP_MSG.ADD_FAILED);
    } finally {
      setIsProccessing(false);
    }
  }

  async function updateCategory(id, { title, parentId, image }) {
    try {
      setIsProccessing(true);
      const data = {
        title,
        parentId: parentId || null,
        image: image || null,
      };
      const resp = await categoryApi.updateCategoryById({ id, data });
      console.log(
        "🚀 ~ file: useCategories.js:193 ~ updateCategory ~ resp:",
        resp
      );

      if (resp.status === SUBMIT_STATUS.SUCCESS) {
        toast.success(CATEGORY_RESP_MSG.UPDATE_SUCCESS);
        queryClient.invalidateQueries(reactQueryKey.GET_CATEGORIES);
      } else {
        toast.error(CATEGORY_RESP_MSG.UPDATE_FAILED);
      }
    } catch (error) {
      console.error("🚀 ~ file: useCategories.js:209 ~ error:", error);
      toast.error(CATEGORY_RESP_MSG.UPDATE_FAILED);
    } finally {
      setIsProccessing(false);
    }
  }

  // Store dropdown in state
  React.useEffect(() => {
    if (sortedCategoryList?.length > 0) {
      const dropdown = createCategoryListDropdown();
      setCategoryDropdown(dropdown);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [sortedCategoryList]);

  // Store default selected dropdown
  React.useEffect(() => {
    if (categoryDropdown?.length > 0 && defCategoryId) {
      setSelectedCategory(
        categoryDropdown.find((item) => item.id === defCategoryId)
      );
    }
  }, [categoryDropdown, defCategoryId]);

  // Sort category by hierachy and store in state
  React.useEffect(() => {
    if (categoryList) {
      setSortedCategoryList(sortCategory());
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [categoryList]);

  return {
    tempFilterCategory: selectedCategory,
    selectedCategory,
    setSelectedCategory,
    createCategoryListDropdown,
    categoryList:
      categoryList && sortedCategoryList
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
    // Crud
    delCategory,
    addCategory,
    delMultiCategory,
    updateCategory,
    addMultiCategory,
    checkCategoryLevel,
    categoryDropdown,
    resetCategoryDropdown,
  };
};

export default useCategories;

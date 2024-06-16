import React from "react";
import CategoryHeader from "./Header/CategoryHeader";
import AddCategoryForm from "./Add/AddCategoryForm";
import CategoryList from "./CategoryList/CategoryList";

const ProductsCategories = () => {
  return (
    <div className="page-body">
      {/* Header */}
      <CategoryHeader />

      {/* Content */}
      <div className="flex gap-x-4 ui-layout items-start">
        {/* Category form */}
        <AddCategoryForm />

        {/* Category list */}
        <CategoryList />
      </div>
    </div>
  );
};

export default ProductsCategories;

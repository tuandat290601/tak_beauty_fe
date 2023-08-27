import React from "react";
import CircleSpinLoading from "../../../../components/Loading/CircleSpinLoading";
import BasicCheckbox from "../../../../components/Checkbox/BasicCheckbox";

const CategoryTable = ({ isLoading, categoryList }) => {
  console.log(
    "🚀 ~ file: CategoryTable.js:5 ~ CategoryTable ~ categoryList:",
    categoryList
  );
  const headerList = [
    {
      title: "Tiêu đề",
    },
    {
      title: "Nổi bật",
    },
    {
      title: "Thứ tự",
    },
    {
      title: "Hiển thị",
    },
    {
      title: "Hành động",
    },
  ];

  return (
    <>
      {isLoading ? (
        <CircleSpinLoading />
      ) : (
        <table className="w-full text-sm text-left text-gray-500">
          <thead className="text-xs text-gray-700 uppercase bg-gray-100">
            <tr>
              <th scope="col" className="px-4 py-3">
                <div className="flex items-center">
                  <input
                    id="checkbox-all"
                    type="checkbox"
                    className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                  />
                  <label for="checkbox-all" className="sr-only">
                    checkbox
                  </label>
                </div>
              </th>
              {headerList.map((item) => (
                <th
                  key={item.title}
                  scope="col"
                  className="px-6 py-3 uppercase"
                >
                  {item.title}
                </th>
              ))}
            </tr>
          </thead>

          <tbody>
            <tr className="bg-white border-b hover:bg-gray-50">
              <td className="w-4 p-4">
                <BasicCheckbox />
              </td>
              <th
                scope="row"
                className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap"
              >
                Apple MacBook Pro 17
              </th>
              <td className="px-6 py-4">
                <BasicCheckbox />
              </td>
              <td className="px-6 py-4">Laptop</td>
              <td className="px-6 py-4">
                <BasicCheckbox />
              </td>
              <td className="px-6 py-4">
                <a
                  href="#"
                  className="font-medium text-blue-600 dark:text-blue-500 hover:underline"
                >
                  Edit
                </a>
              </td>
            </tr>
            <tr className="bg-white border-b hover:bg-gray-50">
              <td className="w-4 p-4">
                <div className="flex items-center">
                  <input
                    id="checkbox-table-2"
                    type="checkbox"
                    className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                  />
                  <label for="checkbox-table-2" className="sr-only">
                    checkbox
                  </label>
                </div>
              </td>
              <th
                scope="row"
                className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
              >
                Microsoft Surface Pro
              </th>
              <td className="px-6 py-4">White</td>
              <td className="px-6 py-4">Laptop PC</td>
              <td className="px-6 py-4">$1999</td>
              <td className="px-6 py-4">
                <a
                  href="#"
                  className="font-medium text-blue-600 dark:text-blue-500 hover:underline"
                >
                  Edit
                </a>
              </td>
            </tr>
          </tbody>
        </table>
      )}
    </>
  );
};

export default CategoryTable;

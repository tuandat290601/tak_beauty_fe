import React from "react";
import CircleSpinLoading from "../../../../components/Loading/CircleSpinLoading";
import BasicCheckbox from "../../../../components/Checkbox/BasicCheckbox";
import { useNavigate } from "react-router-dom";
import { FaPencilAlt, FaTrash } from "react-icons/fa";
import BasicButton from "../../../../components/Button/BasicButton";
import Table from "../../../../components/Table/Table";
import { FaEye } from "react-icons/fa6";
import ConfirmPopup from "../../../../components/Popup/ConfirmPopup";
import usePopup from "../../../../hooks/usePopup";

const CategoryTable = ({
  isLoading = false,
  categoryList = [],
  delCategory = () => {},
  checkCategoryLevel = () => {},
}) => {
  const titleClass = "";
  const actionClass = "w-[130px]";
  const checkboxClass = "p-3 w-12 z-[1]";

  const headerList = [
    {
      title: "Tiêu đề",
      className: titleClass,
    },
    {
      title: "Hành động",
      className: actionClass,
    },
  ];

  const navigate = useNavigate();

  const [delItem, setDelItem] = React.useState({});

  function delBtnClick(item) {
    setDelItem(item);
    openConfirmDelete();
  }

  function closeDelBtnClick() {
    setDelItem({});
    closeConfirmDelete();
  }

  const {
    open: isOpenConfirmDelete,
    handleClosePopup: closeConfirmDelete,
    handleOpenPopup: openConfirmDelete,
  } = usePopup();

  return (
    <>
      <Table className="!rounded-t-none">
        {/* <table className="w-full text-sm text-left text-gray-500 table-fixed"> */}
        <thead className="text-xs text-gray-700 uppercase bg-gray-300">
          <tr>
            <th scope="col" className={checkboxClass}>
              <BasicCheckbox />
            </th>
            {headerList.map((item) => (
              <th
                key={item.title}
                scope="col"
                className={`px-6 py-3 uppercase ${item.className}`}
              >
                {item.title}
              </th>
            ))}
          </tr>
        </thead>

        {isLoading ? null : (
          <tbody>
            {categoryList?.responseData?.count > 0
              ? categoryList?.responseData?.rows?.map((item) => (
                  <tr
                    key={item.id}
                    className="hover:!bg-gray-200 odd:!bg-gray-100 group"
                  >
                    <td className={checkboxClass}>
                      <BasicCheckbox />
                    </td>
                    <td className={`px-6 py-3 text-gray-900 ${titleClass}`}>
                      <div className="flex gap-x-1">
                        {item.img ? (
                          <img
                            src={item.img}
                            alt="category-img"
                            className="h-[30px] object-cover"
                          />
                        ) : null}

                        <div className="max-w-[90%]">
                          <p className="truncate">
                            {[...Array(checkCategoryLevel(item))].map(
                              () => "|---"
                            )}
                            {item.title}
                          </p>
                          <div className="text-sm flex items-center gap-x-2 invisible group-hover:!visible">
                            <span className="text-slate-400 border-r-2 border-gray-400 pr-2">
                              ID: {item.id}
                            </span>
                            <BasicButton
                              icon={<FaEye />}
                              className="!p-0 text-blue-500 hover:opacity-80"
                              onClick={() => {
                                console.log(`navigate to product ${item.id}`);
                              }}
                            />
                          </div>
                        </div>
                      </div>
                    </td>
                    <td className={`px-6 py-3 w-4 ${actionClass}`}>
                      <div className="flex gap-x-1">
                        <BasicButton
                          icon={<FaTrash className="w-4 h-4" />}
                          className="border !p-2 red-btn"
                          // onClick={() => delCategory(item.id)}
                          onClick={() => delBtnClick(item)}
                        />
                        <BasicButton
                          icon={<FaPencilAlt className="w-4 h-4" />}
                          className="border !p-2 blue-btn"
                          onClick={() =>
                            navigate(
                              `/admin/products/products-categories/${item.id}/edit`
                            )
                          }
                        />
                      </div>
                    </td>
                  </tr>
                ))
              : "Empty"}
          </tbody>
        )}
        {/* </table> */}
      </Table>

      {/* Loading table */}
      {isLoading ? (
        <div className="bg-gray-100 flex justify-center items-center py-20">
          <CircleSpinLoading className="!w-20 !h-20" />
        </div>
      ) : null}

      {/* Modal */}
      <ConfirmPopup
        isOpen={isOpenConfirmDelete}
        handleClose={closeDelBtnClick}
        handleConfirm={() => delCategory(delItem?.id)}
        btnWrapperClass="px-4 !py-4"
        yesBtnLabel="Đồng ý"
        noBtnLabel="Đóng"
        positionTop={true}
      >
        <h4 className="font-bold text-left text-xl mb-2">Xóa dữ liệu</h4>
        <p className="text-left text-sm mb-2">
          Bạn có chắc muốn xóa{" "}
          <span className="font-bold">{delItem?.title}</span> ?
        </p>
      </ConfirmPopup>
    </>
  );
};

export default CategoryTable;

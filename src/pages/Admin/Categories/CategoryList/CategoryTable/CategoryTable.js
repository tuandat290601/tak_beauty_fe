import React from "react";
import { useNavigate } from "react-router-dom";
import { FaPencilAlt, FaTrash } from "react-icons/fa";
import { FaEye } from "react-icons/fa6";
import usePopup from "../../../../../hooks/usePopup";
import Table from "../../../../../components/Table/Table";
import BasicCheckbox from "../../../../../components/Checkbox/BasicCheckbox";
import Config from "../../../../../configuration";
import { IMG_PATH } from "../../../../../configuration/imagePath";
import BasicButton from "../../../../../components/Button/BasicButton";
import { PAGE_PATH } from "../../../../../configuration/routeConfig";
import CircleSpinLoading from "../../../../../components/Loading/CircleSpinLoading";
import ConfirmPopup from "../../../../../components/Popup/ConfirmPopup";

const CategoryTable = ({
  isLoading = false,
  categoryList = [],
  delCategory = () => {},
  checkCategoryLevel = () => {},
  delItemsList = [],
  setDelItemsList = () => {},
}) => {
  console.log("🚀 ~ file: CategoryTable.js:23 ~ categoryList:", categoryList);
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

  const [isCheckAll, setIsCheckAll] = React.useState(false);

  function onChangeCheckAll(e) {
    const { checked } = e.target;

    if (checked) {
      checkAll();
    } else {
      unCheckAll();
    }

    setIsCheckAll((prv) => !prv);
  }
  function checkAll() {
    setDelItemsList(categoryList.map((item) => item.id));
  }
  function unCheckAll() {
    setDelItemsList([]);
  }

  function onChangeCheckBox(e) {
    const { value, checked } = e.target;

    if (checked) {
      setDelItemsList((prv) => [...prv, value]);
    } else {
      setDelItemsList((prv) => [...prv.filter((item) => item !== value)]);
    }
  }

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

  React.useEffect(() => {
    if (
      categoryList.length > 0 &&
      delItemsList.length === categoryList.length
    ) {
      setIsCheckAll(true);
    } else {
      setIsCheckAll(false);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [delItemsList.length]);

  return (
    <>
      <Table className="!rounded-t-none">
        {/* <table className="w-full text-sm text-left text-gray-500 table-fixed"> */}
        <thead className="text-xs text-gray-700 uppercase bg-gray-300">
          <tr>
            <th scope="col" className={checkboxClass}>
              <BasicCheckbox onChange={onChangeCheckAll} checked={isCheckAll} />
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
            {categoryList?.length > 0
              ? categoryList?.map((item) => (
                  <tr
                    key={item.id}
                    className="hover:!bg-gray-200 odd:!bg-gray-100 group"
                  >
                    <td className={checkboxClass}>
                      <BasicCheckbox
                        onChange={onChangeCheckBox}
                        value={item.id}
                        checked={delItemsList.includes(item.id)}
                      />
                    </td>
                    <td className={`px-6 py-3 text-gray-900 ${titleClass}`}>
                      <div className="flex gap-x-1">
                        <img
                          src={
                            item.image
                              ? Config.apiConfig.imageEndPoint + item?.image
                              : IMG_PATH.NO_IMG
                          }
                          alt="category-img"
                          className="h-[30px] w-[30px] object-cover"
                        />

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
                          className="btn text-white !p-2 red-btn"
                          // onClick={() => delCategory(item.id)}
                          onClick={() => delBtnClick(item)}
                        />
                        <BasicButton
                          icon={<FaPencilAlt className="w-4 h-4" />}
                          className="btn text-white !p-2 blue-btn"
                          onClick={() => {
                            navigate(
                              `${PAGE_PATH.PRODUCTS_CATEGORIES.EDIT_CATEGORIES(
                                item.id
                              )}`
                            );
                          }}
                        />
                      </div>
                    </td>
                  </tr>
                ))
              : null}
          </tbody>
        )}
        {/* </table> */}
      </Table>

      {/* Empty */}
      {!isLoading && categoryList?.length === 0 ? (
        <div className="flex flex-col items-center justify-center my-10 gap-y-10">
          <img src={IMG_PATH.EMPTY_BOX} alt="Empty img" className="w-40" />
          <h4 className="font-medium text-2xl">Không tìm thấy kết quả nào</h4>
        </div>
      ) : null}

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

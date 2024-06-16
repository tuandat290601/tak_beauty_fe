import { AiOutlineCheck, AiOutlineClose } from "react-icons/ai";
import { MdEdit, MdCancel } from "react-icons/md";
import useClickOutside from "../../hooks/useClickOutSide";
import { useEffect, useRef, useState } from "react";
import CurrencyInput, { formatValue } from "react-currency-input-field";
import BasicIconButton from "../Button/BasicIconButton";
import { toVNDCurrency } from "../../helpers/CurrencyUtil";
import { SUBMIT_STATUS } from "../../common/constant";

export const BasicEditablePopup = ({
  initValue = 0,
  handleSubmitEditPrice,
  submitStatus,
}) => {
  const { show, setShow, nodeRef } = useClickOutside();
  const [editValue, setEditValue] = useState(initValue);
  const handleShowEditPopup = () => {
    setShow(true);
  };
  const handleOnClosePopup = () => {
    setEditValue(initValue);
    setShow(false);
  };
  // const handleClearInput = () => {
  //   setEditValue(0);
  // };
  useEffect(() => {
    setEditValue(initValue);
  }, [initValue]);
  return (
    <div ref={nodeRef} className="relative">
      <h4 className="editable-text text-center" onClick={handleShowEditPopup}>
        {toVNDCurrency(initValue)}
      </h4>
      {show && (
        <div className="absolute -top-[75px] -left-[120px] flex gap-2 w-fit bg-white px-3 py-3 border border-gray-500 rounded-md ">
          {/* <OutlinedInput
            value={editValue}
            onChange={(e) => setEditValue(e.target.value)}
            className="h-[40px] w-[190px]"
            endAdornment={
              editValue !== "" && (
                // <InputAdornment position="end">
                //   <IconButton
                //     size="small"
                //     onClick={handleClearInput}
                //     edge="end"
                //   >
                //     <MdCancel></MdCancel>
                //   </IconButton>
                // </InputAdornment>
              
              )
            }
          /> */}
          <CurrencyInput
            placeholder="Nhập số tiền"
            intlConfig={{ locale: "vi", currency: "VND" }}
            value={editValue}
            onValueChange={(value) => {
              setEditValue(value);
            }}
            onKeyDown={(evt) =>
              ["e", "E", "+", "-", "."].includes(evt.key) &&
              evt.preventDefault()
            }
            className="px-2 rounded-md border border-gray-500"
          />
          <BasicIconButton
            disabled={submitStatus === SUBMIT_STATUS.LOADING}
            className="!bg-blue-500 rounded-md border-2 !border-black"
            handleOnClick={() => {
              handleSubmitEditPrice(editValue);
              handleOnClosePopup();
            }}
          >
            <AiOutlineCheck></AiOutlineCheck>
          </BasicIconButton>
          <BasicIconButton
            className="rounded-md"
            handleOnClick={handleOnClosePopup}
          >
            <AiOutlineClose></AiOutlineClose>
          </BasicIconButton>
        </div>
      )}
    </div>
  );
};

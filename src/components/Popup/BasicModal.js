import { Dialog } from "@mui/material";
import React from "react";
import Transition from "./Transition";
import CloseIcon from "@mui/icons-material/Close";
import ConfirmPopup from "./ConfirmPopup";
import usePopup from "../../hooks/usePopup";

const BasicModal = ({
  open,
  handleClose = () => {},
  clickOutside = handleClose,
  fullWidth = false,
  maxWidth = "600px",
  padding = "40px",
  haveCloseBtn = false,
  handleCloseBtnClick = handleClose,
  haveCloseConfirm = false,
  closeConfirmMsg = "Bạn có chắc muốn đóng",
  wrapperClassName,
  closeBtnClass = "",
  children,
}) => {
  const {
    open: isOpenConfirmClose,
    handleClosePopup: closeConfirmClose,
    handleOpenPopup: openConfirmClose,
  } = usePopup();

  return (
    <Dialog
      open={open}
      TransitionComponent={Transition}
      keepMounted
      onClose={haveCloseConfirm ? openConfirmClose : clickOutside}
      fullWidth={fullWidth}
      maxWidth="lg"
      PaperProps={{
        style: {
          zIndex: 7,
          position: "relative",
          boxShadow: "none",
          padding: padding,
          maxWidth: maxWidth,
          // overflowX: "hidden",
        },
      }}
    >
      <div className="relative bg-inherit">
        {haveCloseBtn ? (
          // <IconButton
          //   type="button"
          //   className="bg-green-500 absolute -right-2 -top-2 !rounded-full hover:!bg-gray-100 hover:!text-white"
          //   handleOnClick={
          //     haveCloseConfirm ? openConfirmClose : handleCloseBtnClick
          //   }
          // >
          //   <CloseIcon />
          // </IconButton>
          <div
            className={`p-2 rounded-full absolute -top-2 -right-2 cursor-pointer hover:bg-gray-100 ${closeBtnClass}`}
            onClick={haveCloseConfirm ? openConfirmClose : handleCloseBtnClick}
          >
            <CloseIcon />
          </div>
        ) : null}

        {haveCloseBtn ? (
          <div className={`mt-6 ${wrapperClassName}`}>{children}</div>
        ) : (
          children
        )}

        {haveCloseConfirm ? (
          <ConfirmPopup
            isOpen={isOpenConfirmClose}
            handleClose={closeConfirmClose}
            handleConfirm={handleClose}
            yesBtnLabel="Có"
          >
            {closeConfirmMsg}
          </ConfirmPopup>
        ) : null}
      </div>
    </Dialog>
  );
};

export default BasicModal;

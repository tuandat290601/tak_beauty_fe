import { Dialog } from "@mui/material";
import React from "react";
import Transition from "./Transition";
import ConfirmPopup from "./ConfirmPopup";
import usePopup from "../../hooks/usePopup";
import BasicButton from "../Button/BasicButton";
import { FaWindowClose } from "react-icons/fa";

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
  wrapperClassName = "",
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
          <BasicButton
            type="button"
            icon={<FaWindowClose className="text-xl" />}
            className="!p-0 absolute -top-0 -right-0 text-gray-400 hover:opacity-50"
            onClick={haveCloseConfirm ? openConfirmClose : handleCloseBtnClick}
          />
        ) : null}

        {haveCloseBtn ? (
          <div className={`mt-4 ${wrapperClassName}`}>{children}</div>
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

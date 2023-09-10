import React, { useState } from "react";

import { Checkbox } from "@mui/material";
import DeleteOutlineIcon from "@mui/icons-material/DeleteOutline";
import DoneAllIcon from "@mui/icons-material/DoneAll";
const label = { inputProps: { "aria-label": "Checkbox demo" } };
const MultipleImageTextBox = ({
  name = "upload",
  setSelectedImage = () => {},
  selectedImage = [],
  setPathName = () => {},
  label = null,
  haveLabel = false,
  btnTitle = "Thêm ảnh",
  initImage,
  ...props
}) => {
  // const [selectedImage, setSelectedImage] = useState([]);
  const [checked, setChecked] = useState([]);

  const files = Array.from(selectedImage);
  const onDelete = () => {
    const filter = files.filter((item) => !checked.includes(item.name));
    setSelectedImage(filter);
    setChecked([]);
  };
  const selectAll = () => {
    if (checked.length < files.length) {
      const filenames = files.map((item) => item.name);
      setChecked(filenames);
    } else setChecked([]);
  };
  return (
    <div>
      <div className="flex justify-between items-center mb-2">
        <label className="font-medium text-sm mb-1">{label}</label>
        <div className="flex items-center gap-2">
          {checked.length > 0 && (
            <button
              className="text-white bg-red-500 hover:bg-red-600 text-sm rounded-md px-2 py-1 flex items-center gap-2"
              type="button"
              onClick={onDelete}
            >
              <DeleteOutlineIcon className="w-5 h-5" /> Xóa hết
            </button>
          )}
          {files.length > 0 && (
            <button
              type="button"
              className="text-white bg-blue-500 hover:bg-blue-600 text-sm rounded-md px-2 py-1 flex items-center gap-2"
              onClick={selectAll}
            >
              <DoneAllIcon className="w-5 h-5" /> Chọn hết
            </button>
          )}
        </div>
      </div>
      <div className="grid grid-cols-5 gap-2">
        {files?.length > 0 &&
          files?.map((item) => (
            <ImageItem item={item} checked={checked} setChecked={setChecked} />
          ))}
        <label
          htmlFor={name}
          className="w-28 h-28 flex items-center justify-center flex-col bg-white rounded-lg border border-dashed border-neutral-400 text-neutral-400 text-sm cursor-pointer"
        >
          <img className="w-10" src="/images/upload.png" alt="img" />
          {btnTitle}
        </label>
      </div>
      <input
        id={name}
        className="hidden"
        type="file"
        name="myImage"
        multiple
        accept="image/*"
        onChange={(event) => {
          const filenames = files.map((item) => item.name);
          const newFiles = Array.from(event.target.files)?.filter(
            (item) => !filenames.includes(item.name)
          );
          setSelectedImage([...selectedImage, ...newFiles]);
          // event.target.value = null;
        }}
      />
    </div>
  );
};

const ImageItem = ({ item, checked = [], setChecked = () => {} }) => {
  const isChecked = checked.includes(item.name);
  const handleChange = (e) => {
    if (isChecked) {
      const newArr = checked.filter((img) => img !== item.name);
      setChecked(newArr);
    } else {
      const newArr = [...checked, item.name];
      setChecked(newArr);
    }
  };
  return (
    <div className="relative w-28 h-28 bg-white rounded-lg border border-dashed order-neutral-400 p-1">
      <Checkbox
        className="absolute -top-3 -right-3"
        {...label}
        checked={isChecked}
        onChange={handleChange}
      />
      <img
        alt="not found"
        className="object-contain w-full h-full rounded-lg"
        src={URL?.createObjectURL(item) || ""}
      />
    </div>
  );
};

export default MultipleImageTextBox;

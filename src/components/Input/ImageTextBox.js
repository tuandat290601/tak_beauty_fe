import React, { useState } from "react";
import { FaImage } from "react-icons/fa6";
import fileApi from "../../api/file";
import Config from "../../configuration";
const ImageTextBox = ({
  name = "upload",
  setSelectedImage = () => {},
  selectedImage = [],
  setPathName = () => {},
  label = null,
  haveLabel = false,
  btnTitle = "Chọn ảnh",
  initImage,
  ...props
}) => {
  return (
    <div>
      {haveLabel ? (
        <label className="font-medium text-sm">{label}</label>
      ) : null}
      <div className="flex gap-1 items-center">
        <input
          type="text"
          className="text-sm focus:ring-0 border bg-white rounded-md p-2 text-black w-full"
          disabled
          value={selectedImage?.name || ""}
          title={selectedImage?.name || ""}
        />
        <label
          htmlFor={name}
          className="w-32 bg-blue-500 text-white text-xs h-10 flex items-center rounded-md gap-1 justify-center hover:opacity-75 cursor-pointer"
        >
          <FaImage className="w-[12px] h-[12px] text-white" />
          {btnTitle}
        </label>
      </div>
      <input
        id={name}
        className="hidden"
        type="file"
        name="myImage"
        onChange={(event) => {
          console.log(event.target.files[0]);
          setSelectedImage(event.target.files[0]);
        }}
      />
      {selectedImage ? (
        <div className="my-2">
          <img
            alt="not found"
            className="object-contain max-w-36 max-h-36 rounded-md"
            src={URL.createObjectURL(selectedImage)}
          />
        </div>
      ) : (
        initImage &&
        initImage !== "" && (
          <div className="my-2">
            <img
              alt="not found"
              className="object-contain max-w-36 max-h-36 rounded-md"
              src={Config.apiConfig.imageEndPoint + initImage}
            />
          </div>
        )
      )}
      {/* <button onClick={onSubmit}>Test Upload Now</button> */}
    </div>
  );
};

export default ImageTextBox;

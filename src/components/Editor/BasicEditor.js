import React, { useState } from "react";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import hljs from "highlight.js";
import "highlight.js/styles/monokai-sublime.css";
import "./BasicEditor.scss";
import { fileApi } from "../../api";
import { SUBMIT_STATUS } from "../../common/constant";
import ImageUploader from "quill-image-uploader";
import { Quill } from "react-quill";
import Config from "../../configuration";
Quill.register("modules/imageUploader", ImageUploader);
export const BasicEditor = ({
  theme = "snow",
  handleChange = (html) => { },
  value,
  title,
  className = "",
  children,
  disabled = false,
  basicEditorRef,
  ...props
}) => {
  return (
    <div>
      {title && (
        <h3 className="font-medium mb-1 text-black text-sm ">{title}</h3>
      )}
      <ReactQuill
        ref={basicEditorRef}
        theme={theme}
        onChange={handleChange}
        value={value}
        modules={BasicEditor.modules}
        formats={BasicEditor.formats}
        bounds={".app"}
        className={`${disabled ? "bg-gray-100 text-gray-500" : ""
          } ${className}`}
        readOnly={disabled}
        onPaste={(e) => {
        }}
        {...props}
      />
    </div>
  );
};

BasicEditor.formats = [
  "header",
  "font",
  "size",
  "bold",
  "italic",
  "underline",
  "strike",
  "blockquote",
  "list",
  "bullet",
  "indent",
  "link",
  "color",
  "background",
  "image",
  "video",
  "code-block",
];
hljs.configure({
  languages: ["javascript", "ruby", "python"],
});
BasicEditor.modules = {
  toolbar: [
    [{ header: "1" }, { header: "2" }, { font: [] }],
    [{ size: [] }],
    ["bold", "italic", "underline", "strike", "blockquote"],
    [
      {
        color: [],
      },
    ],
    [
      {
        background: [],
      },
    ],
    [
      { list: "ordered" },
      { list: "bullet" },
      { indent: "-1" },
      { indent: "+1" },
    ],
    ["link", "image", "video"],
    ["clean"],
    ["code-block"],
  ],
  imageUploader: {
    // imgbbAPI
    upload: async (file) => {
      const formData = new FormData();
      formData.append("file", file);
      const res = await fileApi.uploadFile(formData);
      if ((res.status = SUBMIT_STATUS.SUCCESS)) {
        const { responseData } = res;
        return Config.apiConfig.imageEndPoint + responseData.path;
      } else {
        return "";
      }
    },
  },
  clipboard: {
    // toggle to add extra line breaks when pasting HTML:
    matchVisual: false,
  },
  syntax: {
    highlight: (text) => hljs.highlightAuto(text).value,
  },
};

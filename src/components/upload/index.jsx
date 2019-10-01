import React from "react";
import { Icon } from "antd";

export default function Upload() {
  return (
    <>
      <input type="file" id="imageUpload" style={{ display: "none" }} />
      <Icon
        onClick={() => document.querySelector("#imageUpload").click()}
        style={{
          fontSize: "50px",
          color: "#209CEE",
          position: "absolute",
          bottom: "30px",
          right: "30px",
          outline: "none"
        }}
        type="plus-circle"
      />
    </>
  );
}

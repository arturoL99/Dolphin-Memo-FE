import React from "react";
import load from "../../images/Loading.svg";

const Loading = () => {
  return (
    <div className="flex_center">
      <img src={load} alt="loading" />
    </div>
  );
};

export default Loading;

import React from "react";
import loading from "./Spinner.gif";
export default function spinner() {
  return (
    <div
      className="text-center
    "
    >
      <img src={loading} alt="loading-spinner" />
    </div>
  );
}

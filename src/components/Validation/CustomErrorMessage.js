import React from "react";
import { ErrorMessage } from "formik";
const CustomErrorMessage = ({ value }) => {
  return (
    <div style={{ color: "red" }}>
      <br />

      <ErrorMessage name={value} />
    </div>
  );
};

export default CustomErrorMessage;

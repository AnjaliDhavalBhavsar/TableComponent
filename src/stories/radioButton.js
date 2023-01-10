import { forwardRef } from "react";
import "./table.css";

const RadioButton = forwardRef(({ ...rest }, ref) => {
  return (
    <>
      <input type="radio" {...rest} />
    </>
  );
});

export default RadioButton;

import React from "react";
import classes from "./input.module.css";

const Input = React.forwardRef((props, ref) => {
  return (
    <div>
      <label htmlFor={props.input.id}>{props.label}</label>
      <input className={classes.numberIpnut} ref={ref} {...props.input}></input>
    </div>
  );
});

export default Input;

import classes from "./MealItemForm.module.css";
import React from "react";
import { useState, useRef } from "react";
import Input from "../../UI/Input";
const MealItemForm = (props) => {
  const amountInputRef = useRef();
  const [amountIsValid, setAmountIsValid] = useState(true);
  const submitFormHandler = (event) => {
    event.preventDefault();

    const enteredAmount = amountInputRef.current.value;
    const enteredAmountNumber = +enteredAmount;

    if (
      enteredAmount.trim().length === 0 ||
      enteredAmountNumber < 1 ||
      enteredAmountNumber > 5
    ) {
      setAmountIsValid(false);
      return;
    }
    props.onAddToCart(enteredAmountNumber);
  };

  return (
    <form className={classes.mealItemForm} onSubmit={submitFormHandler}>
      <Input
        ref={amountInputRef}
        label={"Amount:"}
        value={"1"}
        input={{
          id: "Amount",
          type: "number",
          min: "1",
          max: "5",
          defaultValue: 1,
        }}
      />
      <button className={classes.addButton}>+ Add</button>
      {!amountIsValid && <p>Please enter correct value. 1-5</p>}
    </form>
  );
};

export default MealItemForm;

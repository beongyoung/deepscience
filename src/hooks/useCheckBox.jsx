import { useState } from "react";

function useCheckBox() {
  const [checkedInputs, setCheckedInputs] = useState([]);

  const changeHandler = (e) => {
    const checkboxes = document.querySelectorAll("input[type=checkbox]");

    if (!checkedInputs.includes(e.target.name)) {
      if (
        e.target.name === "all" ||
        checkedInputs.length === checkboxes.length - 2
      ) {
        const arr = [];
        checkboxes.forEach((checkbox) => arr.push(checkbox.name));
        setCheckedInputs(arr);
      } else {
        setCheckedInputs([...checkedInputs, e.target.name]);
      }
    } else {
      if (e.target.name === "all") {
        setCheckedInputs([]);
      } else {
        setCheckedInputs(
          checkedInputs.filter((el) => el !== e.target.name && el !== "all")
        );
      }
    }
  };

  return [changeHandler, checkedInputs];
}

export default useCheckBox;

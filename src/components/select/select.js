import React from "react";
import "./select.css";
function Select(props) {
  const { name, label, value, onChange, options,defaultOption,defaultValue, error = null , ...other } = props;

  return (
    <div className="form-group d-flex flex-row">
      <label htmlFor={name}>{label}</label>
      <select
      {...other}
        id={name}
        name={name}
        value={value}
        className="form-select"
        onChange={onChange}
        aria-label="Default select example"
      >
        <option value={defaultValue}>{defaultOption}</option>
        {options.map((option, key) => {
          return (
            <option key={option.id} value={option.id}>
              {option.name}
            </option>
          );
        })}

        {/* {options.forEach(element => {
      <option>{element.name}</option>  
    })} */}
      </select>
    </div>
  );
}

export default Select;

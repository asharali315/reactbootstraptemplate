import React from "react";
import './input.css'
function Input(props) {
  const {
    name,
    label,
    value,
    placeholder,
    onChange,
    classStyle,
    errors = null,
    ...other
  } = props;


  return (
      <div className="form-group d-flex flex-row">
        <label htmlFor={name } className="form-label mr-3 mt-2" >{label}</label>
        <input
          id={name}
          className={classStyle}
          placeholder={placeholder}
          name={name}
          value={value}
          onChange={onChange}
          {...other}
          {...(errors && {errors:true ,helperText:errors})}
          
        />
      </div>



  );
}

export default Input;

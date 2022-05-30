import React from "react";
import './textField.css'
const TextField = (props) => {
    const {name,value,onChange,label,error=null,...other} = props
        
  return (
    <div className="form-outline">
      <label className="form-label" htmlFor={label}>
        {label}
      </label>
      <textarea
        className="form-control"
        name={name}
        value={value}
        onChange={onChange}
        id={label}
        rows="3"
        {...error && {error:true ,helperText:error}}
        {...other}

      ></textarea>
    </div>
  );
};

export default TextField;

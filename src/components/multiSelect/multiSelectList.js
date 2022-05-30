import "./multiSelectList.css";
import React, { useState } from "react";
import Multiselect from "multiselect-react-dropdown";

const MultiSelectList = (props) => {
  const { options, selectedValues, onSelect, onRemove, displayValue } = props;
  return (
    <div className="form-group">
      <Multiselect
        className="form-control"
        options={options} // Options to display in the dropdown
        selectedValues={selectedValues} // Preselected value to persist in dropdown
        onSelect={onSelect} // Function will trigger on select event
        onRemove={onRemove} // Function will trigger on remove event
        displayValue={displayValue} // Property name to display in the dropdown options
      />
    </div>
  );
};

export default MultiSelectList;

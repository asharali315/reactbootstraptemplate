import "./list.css";
import React from "react";

const List = (props) => {
    const { listItems } = props
  return (
    <div className="list-group">
      {listItems? listItems.map((item,key)=>  {
    return(<a href="#" key={item.id} className="list-group-item list-group-item-action list-group-item-list text-left">{item.name}</a> 
    )}) :
      <a href="#" className="list-group-item list-group-item-action list-group-item-list">No Data</a>}
       
    </div>
  );
};

export default List;

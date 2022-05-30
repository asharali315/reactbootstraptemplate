import "./App.css";
import React, { useState } from "react";
import { Provider } from "react-redux";
import { store } from "./store/store";
import Input from "./components/input/input";
import Select from "./components/select/select";
import Button from "./components/button/button";
import Form from "./layouts/form/form";
import TextField from "./components/textField/textField";
import List from "./components/list/list";
import Table from "./components/table/table";
import MultiSelectList from "./components/multiSelect/multiSelectList";
import SideNav from "./components/sideNav/sideNav";

const buttonStyle = "btn btn-primary";

const friend = {
  name: "",
  friendId: 0,
  description: "",
};


const options = [
  {
    id: 1,
    name: "Asher",
    actions:''
  },
  {
    id: 2,
    name: "haris",
    actions:""
  },
  {
    id: 3,
    name: "saad",
    actions:""
  },
  {
    id: 4,
    name: "yasir",
    actions:""
  },
  {
    id: 5,
    name: "ali",
    actions:""
  },
  {
    id: 6,
    name: "faizan",
    actions:""
  },
];

function App() {
  const [values, setValues] = useState(friend);
  


  const [selectedValues,setSelectedValues] = useState([])
  const onSelect = (selectedData) =>{
    setSelectedValues(selectedData)
  }
  
  const onRemove = (remainingData) =>{
    setSelectedValues(remainingData)
  }

  


  const handleChange = (e) => {
    const { name, value } = e.target;
    setValues({
      ...values,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(values);
  };

  const handleDelete = (data) =>{
    console.log("in delete",data)
  }

  const handleUpdate = (data)=>{
    console.log("in update",data)
  }

  return (
    <Provider store={store}>
      <div className="App">
     {/* <SideNav/> */}
        <Form>
          <MultiSelectList
          options={options} // Options to display in the dropdown
          selectedValues={selectedValues} // Preselected value to persist in dropdown
          onSelect={onSelect} // Function will trigger on select event
          onRemove={onRemove} // Function will trigger on remove event
          displayValue="name" 
          
          />
          
          <Input
            name="name"
            label="Name"
            placeholder="name"
            value={values.name}
            classStyle="form-control"
            onChange={handleChange}
          />

          <Select
            defaultValue={0}
            defaultOption={"Select Any"}
            options={options}
            label="Select"
            name="friendId"
            value={values.friendId}
            onChange={handleChange}
          />
          <TextField
            name="description"
            label="description"
            onChange={handleChange}
            value={values.description}
          />
        <List 
        listItems={options}
        />
          <Button classStyle={buttonStyle} name="Save" onClick={handleSubmit} />
        </Form>
        <Table
        tableData={options}
        onUpdate={handleUpdate}
        onDelete={handleDelete}
        />
      </div>
    </Provider>
  );
}


export default App;

import React, { useEffect, useState } from "react";
import Input from "../input/input";
import Pagination from "../pagination/pagination";
import Select from "../select/select";
import "./table.css";

const Table = (props) => {
  const { tableData, onUpdate, onDelete } = props;

  const [pageSize, setPageSize] = useState(10);
  const [totalNumberOfPages,setTotalNumberOfPages] = useState(2)
  const [listData, setListData] = useState([]);
  // const [tableData, setTableData] = useState([])
  const [searchText, setSearchText] = useState("");
  const [currentPageNumber,setCurrentPageNumber] = useState(1)
  const [totalRecords,setTotalRecords] = useState(0)
  
  
  const pageSizeOptions = [
    { id: 5, name: 5 },
    { id: 10, name: 10 },
    { id: 20, name: 20 },
  ];

  
  const handlePageSizeChange = (e) => {
    setPageSize(e.target.value);
  };

  //  to use it when page size is changed
  
  
  useEffect(() => {
    // setTotalNumberOfPages(Math.ceil((listData.length)/pageSize))
    
  }, [pageSize,currentPageNumber]);

  useEffect(() => {
    if (searchText !== "") {
      setListData(
        tableData.filter((data) => {
          let flag = false;
          Object.keys(data).forEach((item) => {
            if (
              data[item] &&
              data[item]
                .toString()
                .toLowerCase()
                .includes(searchText.toLowerCase())
            ) {
              flag = true;
            }
          });
          return flag;
        })
      );
    } else {
      setListData(tableData);
    }
  }, [searchText]);


  const goToNextPage= ()=> {
    if(totalNumberOfPages > currentPageNumber){
      setCurrentPageNumber((page) => page + 1);
    }
  }

  const goToPreviousPage  = () => {
    if(currentPageNumber>1){
      setCurrentPageNumber((page) => page - 1)
    }
  }

  const changePage = pageNumber => {
      setCurrentPageNumber(pageNumber);
  }



  

  const handleChange = (e) => {
    const { value } = e.target;
    setSearchText(value);
  };

  return (
    <div className="container">
      <div className="d-flex flex-row">
        <div className="flex-1"></div>
        <div className="col-sm-4">
          <Input
            name="filterData"
            placeholder="Search"
            value={searchText}
            classStyle="form-control"
            onChange={handleChange}
          />
        </div>
      </div>
      <table className="table responsive">
        <thead>
          <tr>
            {Object.keys(tableData[0]).map((header) => {
              return <td key={header}>{header.toUpperCase()}</td>;
            })}
          </tr>
        </thead>
        <tbody>
          {listData && listData.length > 0 ? (
            listData.map((data) => {
              return (
                <tr key={data.id}>
                  {Object.keys(tableData[0]).map((item) => {
                    return item === "actions" ? (
                      <td >
                        <button
                          className="btn btn-primary"
                          onClick={() => onUpdate(data)}
                        >
                          Update
                        </button>
                        <button
                          className="btn btn-secondary"
                          onClick={() => onDelete(data)}
                        >
                          Delete
                        </button>
                      </td>
                    ) : (
                      <td >{data[item]}</td>
                    );
                  })}
                </tr>
              );
            })
          ) : (
            <tr>
              {
                
                Object.keys(tableData[0]).map((item)=>{
                 return  item==="Id"?<td key={item.id} >No Data</td>:<td></td>
                })

              }
            </tr>
          )}
        </tbody>
      </table>
      <div className="d-flex flex-row flex-nowrap">
        <div className="flex-grow-1"></div>

        <div className="d-flex flex-row justify-space-around">
          <div >
            <Select
              defaultOption={"Select pagesize"}
              defaultValue={0}
              options={pageSizeOptions}
              name="pageSize"
              value={pageSize}
              onChange={handlePageSizeChange}
            />
          </div>
          <div>
            <Pagination 
            totalNumberOfPages={totalNumberOfPages}
            handleNextPage={goToNextPage}
            handlePageNumber={changePage}
            handlePreviousPage={goToPreviousPage}
             />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Table;

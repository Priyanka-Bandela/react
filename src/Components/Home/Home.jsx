import React, { useState } from "react";
import DataTable from "../DataTable";

function Home() {
  const [data, setData] = useState([]);
  const [originalData, setOriginalData] = useState([]);
  const [deleteData, setDeleteData] = useState([]);

  const browseData = () => {
    if (originalData && originalData.length) {
      setData(originalData);
    } else {
      const jsonData = require("./../../Data/sample.json");

      setData(jsonData.data);

      setOriginalData(jsonData.data);

      // console.log(jsonData);
    }
  };

  const handleFieldChange = (id, field, value) => {
    let tempData = data.map((r) => {
      if (r.id == id) {
        r = { ...r, [field]: value };
      }

      return r;
    });
    setData(tempData);
  };

  const handleDelete = (id, e) => {
    let deleteTemp = deleteData;
    if (e.target.checked) {
      deleteTemp.push(id);
    } else {
      debugger;
      deleteTemp.splice(deleteTemp.indexOf(id), 1);
    }

    console.log("deleteTemp", deleteTemp);
    setDeleteData(deleteTemp);
  };

  const onClickSave = () => {
    let dataT = data.filter((d) => !deleteData.includes(d.id));

    setData(dataT);
    setDeleteData([]);
  };

  return (
    <div>
      <div>
        <h1>Data Table</h1>
      </div>

      <button
        type="button"
        onClick={browseData}
        className="btn btn-primary ml-auto"
      >
        Browse
      </button>

      {data.length ? (
        <DataTable
          data={data}
          handleFieldChange={handleFieldChange}
          handleDelete={handleDelete}
          key={data.id}
        />
      ) : null}

      <div className="modal-footer">
        <button
          type="button"
          className="btn btn-primary ml-auto"
          onClick={onClickSave}
        >
          Save
        </button>
        <button type="button" className="btn btn-primary mr-auto">
          View
        </button>
      </div>
    </div>
  );
}

export default Home;

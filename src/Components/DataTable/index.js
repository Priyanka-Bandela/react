import React from "react";

function DataTable(props) {
  const { data } = props;
  //   console.log(data);

  return (
    <div className="container">
      <table className="table">
        <thead>
          <tr>
            <th>-</th>
            <th scope="col">Name</th>
            <th scope="col">Position</th>
            <th scope="col">Salary</th>
            <th scope="col">start_date</th>
            <th scope="col">office</th>
            <th scope="col">extn</th>
          </tr>
        </thead>
        <tbody>
          {data.map((r) => {
            return (
              <tr key={r.id}>
                <td>
                  <input
                    type="checkbox"
                    onChange={(e) => props.handleDelete(r.id, e)}
                  />
                </td>
                <td>
                  <input
                    type="text"
                    className="link"
                    value={r.name}
                    onChange={(e) =>
                      props.handleFieldChange(r.id, "name", e.target.value)
                    }
                  />
                </td>
                <td>
                  <input
                    type="text"
                    className="link"
                    value={r.position}
                    onChange={(e) =>
                      props.handleFieldChange(r.id, "position", e.target.value)
                    }
                  />
                </td>
                <td>
                  <input
                    type="text"
                    className="link"
                    value={r.salary}
                    onChange={(e) =>
                      props.handleFieldChange(r.id, "salary", e.target.value)
                    }
                  />
                </td>
                <td>
                  <input
                    type="text"
                    className="link"
                    value={r.start_date}
                    onChange={(e) =>
                      props.handleFieldChange(
                        r.id,
                        "start_date",
                        e.target.value
                      )
                    }
                  />
                </td>
                <td>
                  <input
                    type="text"
                    className="link"
                    value={r.office}
                    onChange={(e) =>
                      props.handleFieldChange(r.id, "office", e.target.value)
                    }
                  />
                </td>
                <td>
                  <input
                    type="text"
                    className="link"
                    value={r.extn}
                    onChange={(e) =>
                      props.handleFieldChange(r.id, "extn", e.target.value)
                    }
                  />
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}

export default DataTable;

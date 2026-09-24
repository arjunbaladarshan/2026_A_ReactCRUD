import React, { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";

function EditStudent() {
  const [data, setData] = useState({});
  const navigate = useNavigate();
  const { id } = useParams();
  const apiUrl = "https://62d6c51451e6e8f06f12bd5d.mockapi.io/students/" + id;

  useEffect(() => {
    fetch(apiUrl, { method: "GET" })
      .then((res) => res.json())
      .then((res) => setData(res));
  }, []);

  return (
    <div>
      <table>
        <tr>
          <td>Enter Student Name</td>
          <td>
            <input
              type="text"
              value={data.StudentName}
              onChange={(e) =>
                setData({ ...data, StudentName: e.target.value })
              }
            />
          </td>
        </tr>
        <tr>
          <td>Enter Student Image</td>
          <td>
            <input
              type="text"
              value={data.StudentImage}
              onChange={(e) =>
                setData({ ...data, StudentImage: e.target.value })
              }
            />
          </td>
        </tr>
        <tr>
          <td>Enter Student Roll No</td>
          <td>
            <input
              type="text"
              value={data.StudentRollNo}
              onChange={(e) =>
                setData({ ...data, StudentRollNo: e.target.value })
              }
            />
          </td>
        </tr>
        <tr>
          <td>Enter Student Mobile Number</td>
          <td>
            <input
              type="text"
              value={data.StudentMobileNumber}
              onChange={(e) =>
                setData({ ...data, StudentMobileNumber: e.target.value })
              }
            />
          </td>
        </tr>
        <tr>
          <td>Enter Student Mobile Number</td>
          <td>
            <input
              type="text"
              value={data.StudentDepartment}
              onChange={(e) =>
                setData({ ...data, StudentDepartment: e.target.value })
              }
            />
          </td>
        </tr>
        <tr>
          <td colSpan={2} align="center">
            <button
              onClick={() => {
                fetch(
                  "https://62d6c51451e6e8f06f12bd5d.mockapi.io/students/" + id,
                  {
                    method: "PUT",
                    body: JSON.stringify(data),
                    headers: {
                      "Content-Type": "application/json",
                    },
                  },
                )
                  .then((res) => res.json())
                  .then((res) => navigate("/students"));
              }}
              className="btn btn-primary"
            >
              Save
            </button>
            <Link to="/students" className="btn btn-secondary">
              Back
            </Link>
          </td>
        </tr>
      </table>
    </div>
  );
}

export default EditStudent;

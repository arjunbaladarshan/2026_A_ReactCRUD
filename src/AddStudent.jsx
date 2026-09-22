import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

function AddStudent() {
  const [data, setData] = useState({});
  const navigate = useNavigate();
  return (
    <div>
      <table>
        <tr>
          <td>Enter Student Name</td>
          <td>
            <input
              type="text"
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
              onChange={(e) =>
                setData({ ...data, StudentMobileNumber: e.target.value })
              }
            />
          </td>
        </tr>
        <tr>
          <td colSpan={2} align="center">
            <button
              onClick={() => {
                fetch("https://62d6c51451e6e8f06f12bd5d.mockapi.io/students", {
                  method: "POST",
                  body: JSON.stringify(data),
                  headers: {
                    "Content-Type": "application/json",
                  },
                })
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

export default AddStudent;

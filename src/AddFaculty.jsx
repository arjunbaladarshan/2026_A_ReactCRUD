import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

function AddFaculty() {
  const [data, setData] = useState({});
  const [msg, setMsg] = useState("");
  const navigate = useNavigate();
  return (
    <div>
      {msg.length > 0 && (
        <div class="alert alert-danger" role="alert">
          {msg}
        </div>
      )}
      <table>
        <tr>
          <td>Enter Faculty Name</td>
          <td>
            <input
              type="text"
              onChange={(e) => {
                setData({ ...data, facultyName: e.target.value });
              }}
            />
          </td>
        </tr>
        <tr>
          <td>Enter Faculty Code</td>
          <td>
            <input
              type="text"
              onChange={(e) => {
                setData({ ...data, facultyCode: e.target.value });
              }}
            />
          </td>
        </tr>
        <tr>
          <td>Enter Faculty Image</td>
          <td>
            <input
              type="text"
              onChange={(e) => {
                setData({ ...data, facultyImage: e.target.value });
              }}
            />
          </td>
        </tr>
        <tr>
          <td colSpan={2} align="center">
            <button
              onClick={() => {
                if (data?.facultyName?.length > 0) {
                  fetch(
                    "https://62d6c51451e6e8f06f12bd5d.mockapi.io/faculties",
                    {
                      method: "POST",
                      body: JSON.stringify(data),
                      headers: {
                        "Content-Type": "application/json",
                      },
                    },
                  )
                    .then((res) => res.json())
                    .then((res) => {
                      navigate("/faculties");
                    });
                } else {
                  setMsg("Please enter faculty name");
                }
              }}
              className="btn btn-primary"
            >
              Save
            </button>
            &nbsp;
            <Link to="/faculties" className="btn btn-secondary">
              Back
            </Link>
          </td>
        </tr>
      </table>
    </div>
  );
}

export default AddFaculty;

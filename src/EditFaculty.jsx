import React, { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";

function EditFaculty() {
  const { id } = useParams();
  const [data, setData] = useState({});
  const [msg, setMsg] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    fetch(import.meta.env.VITE_APIURL + "faculties/" + id, {
      method: "GET",
    })
      .then((res) => res.json())
      .then((res) => setData(res));
  }, []);

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
              value={data.facultyName}
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
              value={data.facultyCode}
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
              value={data.facultyImage}
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
                    "https://62d6c51451e6e8f06f12bd5d.mockapi.io/faculties/" +
                      id,
                    {
                      method: "PUT",
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

export default EditFaculty;

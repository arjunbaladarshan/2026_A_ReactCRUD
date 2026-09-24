import React, { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";

function DetailStudnet() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [data, setData] = useState({});
  const [isDeleting, setIsDeleting] = useState(false);
  const apiUrl = import.meta.env.VITE_APIURL + "students/" + id;

  useEffect(() => {
    fetch(apiUrl, { method: "GET" })
      .then((res) => res.json())
      .then((res) => setData(res));
  }, []);

  return (
    <div>
      <div className="container">
        <div className="row">
          <div className="col-3">
            <img src={data.StudentImage} className="img-fluid" />
          </div>
          <div className="col">
            <h1>Name: {data.StudentName}</h1>
            <h2>Roll : {data.StudentRollNo}</h2>
            <p>Mobile: {data.StudentMobileNumber}</p>
            <p>Semester: {data.StudentSemester}</p>
            <p>Age: {data.StudentAge}</p>
            <p>Dept: {data.StudentDepartment}</p>
            <p>Building: {data.StudentBuildingNumber}</p>
            <p>City: {data.StudentCity}</p>
            <p>State: {data.StudentState}</p>
            <button
              onClick={() => {
                setIsDeleting(true);
                fetch(apiUrl, { method: "DELETE" })
                  .then((res) => res.json())
                  .then((res) => navigate("/students"));
              }}
              className="btn btn-danger"
              disabled={isDeleting}
            >
              {!isDeleting && "Delete"}
              {isDeleting && (
                <div class="spinner-border text-info" role="status">
                  <span class="visually-hidden">Loading...</span>
                </div>
              )}
            </button>
            &nbsp;
            <Link to={"/students/edit/" + id} className="btn btn-warning">
              Edit
            </Link>
            &nbsp;
            <Link to="/students" className="btn btn-info">
              Back
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default DetailStudnet;

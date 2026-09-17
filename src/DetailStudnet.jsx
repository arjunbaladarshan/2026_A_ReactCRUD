import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";

function DetailStudnet() {
  const { id } = useParams();
  const [data, setData] = useState({});
  const apiUrl = "https://62d6c51451e6e8f06f12bd5d.mockapi.io/students/" + id;

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

import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

function ListStudents() {
  const apiUrl = "https://62d6c51451e6e8f06f12bd5d.mockapi.io/students";

  const [data, setData] = useState([]);

  useEffect(() => {
    fetch(apiUrl, { method: "GET" })
      .then((res) => res.json())
      .then((res) => setData(res));
  }, []);

  return (
    <>
      <h1>List of Students</h1>
      <div className="container">
        <div className="row">
          {data.map((stu) => {
            return (
              <div className="col-3 p-2">
                <div class="card">
                  <img src={stu.StudentImage} class="card-img-top" alt="..." />
                  <div class="card-body">
                    <h5 class="card-title">{stu.StudentName}</h5>
                    <p class="card-text">
                      Dept: {stu.StudentDepartment}
                      <br />
                      Roll: {stu.StudentRollNo}
                    </p>
                    <Link to={"/students/" + stu.id} class="btn btn-primary">
                      Detail
                    </Link>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
}

export default ListStudents;

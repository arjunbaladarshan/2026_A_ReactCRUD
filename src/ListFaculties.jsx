import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

function ListFaculties() {
  const apiUrl = "https://62d6c51451e6e8f06f12bd5d.mockapi.io/faculties";

  const [refresh, setRefresh] = useState(false);
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch(apiUrl, { method: "GET" })
      .then((res) => res.json())
      .then((res) => setData(res));
  }, [refresh]);

  return (
    <>
      <h1>List of Faculties</h1>
      <Link to="/faculties/add" className="btn btn-primary">
        Add New
      </Link>
      <div className="container">
        <div className="row">
          {data.map((fac) => {
            return (
              <div className="col-3 p-2">
                <div class="card">
                  <img src={fac.facultyImage} class="card-img-top" alt="..." />
                  <div class="card-body">
                    <h5 class="card-title">{fac.facultyName}</h5>
                    <p class="card-text">Code: {fac.facultyCode}</p>
                    <button
                      onClick={() => {
                        fetch(
                          "https://62d6c51451e6e8f06f12bd5d.mockapi.io/faculties/" +
                            fac.id,
                          {
                            method: "DELETE",
                          },
                        )
                          .then((res) => res.json())
                          .then((res) => setRefresh(!refresh));
                      }}
                      class="btn btn-danger"
                    >
                      Delete
                    </button>
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

export default ListFaculties;

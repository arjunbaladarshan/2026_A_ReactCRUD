import React, { useEffect, useState } from "react";

function ListFaculties() {
  const apiUrl = "https://62d6c51451e6e8f06f12bd5d.mockapi.io/faculties";

  const [data, setData] = useState([]);

  useEffect(() => {
    fetch(apiUrl, { method: "GET" })
      .then((res) => res.json())
      .then((res) => setData(res));
  }, []);

  return (
    <>
      <h1>List of Faculties</h1>
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
                    <a href="#" class="btn btn-primary">
                      Detail
                    </a>
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

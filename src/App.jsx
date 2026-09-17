import { useEffect, useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Layout from "./Layout";
import ListStudents from "./ListStudents";
import ListFaculties from "./ListFaculties";
import DetailStudnet from "./DetailStudnet";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route path="/students" element={<ListStudents />} />
            <Route path="/students/:id" element={<DetailStudnet />} />
            <Route path="/faculties" element={<ListFaculties />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;

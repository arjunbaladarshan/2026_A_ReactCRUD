import { useEffect, useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Layout from "./Layout";
import ListStudents from "./ListStudents";
import ListFaculties from "./ListFaculties";
import DetailStudnet from "./DetailStudnet";
import AddFaculty from "./AddFaculty";
import AddStudent from "./AddStudent";
import EditFaculty from "./EditFaculty";
import EditStudent from "./EditStudent";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route path="/students" element={<ListStudents />} />
            <Route path="/students/add" element={<AddStudent />} />
            <Route path="/students/edit/:id" element={<EditStudent />} />
            <Route path="/students/:id" element={<DetailStudnet />} />
            <Route path="/faculties" element={<ListFaculties />} />
            <Route path="/faculties/add" element={<AddFaculty />} />
            <Route path="/faculties/edit/:id" element={<EditFaculty />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;

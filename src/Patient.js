import React from "react";
import {PatientData} from "./Data";
import Navbar from "./Navbar";
import Sidebar from "./Sidebar";

export default function Patient() {
  return (
    <>
      <Navbar />
      <div className="row gx-0">
        <div className="col-sm-4 col-md-3 col-lg-2 bg-Main min-vh-100 Sidebar">
          <Sidebar />
        </div>
        <div className="col-sm-8 col-md-9 col-lg-10 p-64 W-100">
          <h3 className="mt-4 mb-3  ">Patients Record</h3>
          <div className="table-responsive">
            <table class="table bg-white">
              <thead>
                <tr>
                  <th scope="col">#</th>
                  <th scope="col">Name</th>
                  <th scope="col">Age</th>
                  <th scope="col">Disease</th>
                  <th scope="col">Appointment Date</th>
                  <th scope="col">File</th>
                </tr>
              </thead>

              {PatientData.map((i) => {
                const {id, name, age, disease, date, file} = i;
                return (
                  <tbody>
                    <tr>
                      <th scope="row">{id}</th>
                      <td>{name}</td>
                      <td>{age}</td>
                      <td>{disease}</td>
                      <td>{date}</td>
                      <td>{file}</td>
                    </tr>
                  </tbody>
                );
              })}
            </table>
          </div>
        </div>
      </div>
    </>
  );
}

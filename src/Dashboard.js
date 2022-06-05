import React from "react";
import {ContainerData} from "./Data";
import Navbar from "./Navbar";
import Sidebar from "./Sidebar";

export default function Dashboard() {
  return (
    <>
      <Navbar />
      <div className="row gx-0">
        <div className="col-sm-4 col-md-3 col-lg-2 bg-Main min-vh-100 Sidebar">
          <Sidebar />
        </div>
        <div className="col-sm-8 col-md-9 col-lg-10 p-64 W-100">
          <h2 className="mt-4 mb-3 M-Color ">Dashboard</h2>

          <div class="container">
            <div class="row gx-4 gy-4">
              {ContainerData.map((i) => {
                const {id, name, value, icon} = i;
                return (
                  <div class="col-sm-6 col-md-6 col-lg-4 mb-3">
                    <div key={id} class="p-3 border bg-white Containers">
                      <h5>{name}</h5>
                      <span className="icon">{icon}</span>
                      <h4>{value}</h4>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

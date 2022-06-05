import React from "react";

export default function Sidebar() {
  return (
    <>
      <div className="S-fixed">
        <div className="d-flex flex-column mt-4 p-20">
          <a className="a mb-3" href="dashboard">
            Dashboard
          </a>
          <a className="a mb-3" href="patient">
            Patient
          </a>
        </div>
      </div>
    </>
  );
}

import React from "react";

export default function Navbar() {
  return (
    <>
      <div className="P-fixed">
        <div className="row gx-0 B-bottom">
          <div className="col-sm-4 col-md-3 col-lg-2 bg-Main p-20 Navbar">
            <a href="dashboard" className="a fs-3">
              iDoctor
            </a>
          </div>
          <div className="col-sm-8 col-md-9 col-lg-10 W-100">
            <div className="d-flex justify-content-between p-64">
              <img src="logo.png" alt="logo" className="logo" />
              <a href="/" className="logout-btn">
                Logout
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

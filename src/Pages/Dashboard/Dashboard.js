import React, { useState } from "react";
import AddServices from "../AddServices/AddServices";
import MyBooking from "../MyBooking/MyBooking";
import ManageTours from "../ManageTours/ManageTours";
import ManageAllService from "../ManageAllService/ManageAllService";

const Dashboard = () => {
  const [control, setControl] = useState("myBooking");
  return (
    <div className="admin-container">
      <div className="dashboard">
        <div className="admin-box">
          <div className="row admin-container">
            <div className="col-md-3 h-100">
              <div className="admin-area p-1">
                <h6 className=" fs-3 text-warning fw-bold mt-4 ms-5">
                  Admin Dashboard
                </h6>
                <hr />
                <div className="all-menu mt-5">
                  <li
                    onClick={() => setControl("myBooking")}
                    className="admin-menu  ms-5 pb-3"
                  >
                    Manage My Booking
                  </li>

                  <li
                    onClick={() => setControl("manageTours")}
                    className="admin-menu  ms-5 pb-3 "
                  >
                    Manage All Booking
                  </li>
                 
                  <li
                    onClick={() => setControl("ManageAllService")}
                    className="admin-menu pb-3   ms-5 "
                  >
                    Manage All Packages
                  </li>
                   <li
                    onClick={() => setControl("AddServices")}
                    className="admin-menu  ms-5 "
                  >
                    Add New Package
                  </li>
                </div>
              </div>
            </div>
            <div className="col-md-9  ">
              {control === "myBooking" && <MyBooking></MyBooking>}
              {control === "manageTours" && <ManageTours></ManageTours>}
              {control === "AddServices" && <AddServices></AddServices>}
              {control === "ManageAllService" && <ManageAllService></ManageAllService> }
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;

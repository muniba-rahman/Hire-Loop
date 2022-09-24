import React from "react";
import { useEffect } from "react";
import { useSelector } from "react-redux";
import { Link, Outlet } from "react-router-dom";
import authServices from "../../axios/services/auth.service";

import "./Dashboard.css";

function Dashboard() {
  const pathName = window.location.pathname.split("/").pop();
  return (
    <div className="dashboard">
      <section className="banner">
        <div
          className="overlay"
          style={{ alignItems: "center", justifyContent: "center" }}
        >
          <h1>Dashboard</h1>
        </div>
        <div className="dash-nav">
          <div>
            <Link
              to={"create-blog"}
              className={pathName === "create-blog" ? "selected" : ""}
            >
              Write A Blog
            </Link>
          </div>
          <div>
            <Link
              to={"my-courses"}
              className={pathName === "my-courses" ? "selected" : ""}
            >
              My Courses
            </Link>
          </div>
          <div>
            <Link
              to={"account-settings"}
              className={pathName === "account-settings" ? "selected" : ""}
            >
              Account Settings
            </Link>
          </div>
        </div>
      </section>
      <Outlet />
    </div>
  );
}

export default Dashboard;

import React from "react";
import { useEffect } from "react";
import { useSelector } from "react-redux";
import { Link, Outlet } from "react-router-dom";
import authServices from "../../axios/services/auth.service";
import "./Dashboard.css";

function Dashboard() {
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
            <Link to={"create-blog"}>Write A Blog</Link>
          </div>
          <div>
            <Link to={"my-courses"}>My Courses</Link>
          </div>
          <div>
            <Link to={"account-settings"}>Account Settings</Link>
          </div>
        </div>
      </section>
      <Outlet />
    </div>
  );
}

export default Dashboard;

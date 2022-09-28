import React from "react";
import "./project_css.css";
import { NavLink, useLocation } from "react-router-dom";
import Banner from "../../components/banner/Banner.js"

function ProjectPage() {

  function ShowProject() {

    const location=useLocation();
    const state=location.state;
    console.log(state);

    return (
      <section className={"projectCard"} key={state.id}>
        <div className={"image"}>
          <img src={state.image} />
        </div>
        <div className={"proj-text"}>
          <h1>{state.title}</h1>
          <p><small>{state.dateOfCreation}</small></p>
          <p>{state.summary}</p>
          <NavLink to="/projects" className="btn btn-outline-dark">
            Go Back to Projects
          </NavLink>
        </div>
      </section>
    );
  }

  return (
    <div>
      {/* Banner */}
      <Banner title="Our Projects"/>

      {/* Project Card */}
      <ShowProject />
    </div>
  );
}
export default ProjectPage;

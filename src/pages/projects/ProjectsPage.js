import React from "react";
import { NavLink } from "react-router-dom";
import "./project_css.css";
import img1 from "../../images/ourProjects1.jpg";
import img2 from "../../images/ourProjects2.jpg";
import img3 from "../../images/ourProjects3.jpg";
import img4 from "../../images/ourProjects4.jpg";
import Banner from "../../components/banner/Banner.js";

const dummyData = {
  projects: [
    {
      image: img1,
      title: "Cow Detector",
      dateOfCreation: "April 19, 2021",
      summary:
        "Using the TensorFlow, Anaconda, and the Keras API, this application identifies both the presence and the orientation of cows in images. This app can be useful for farmers in the farm where they can monitor their animals (specifically cows) from a particular distance. Using the TensorFlow, Anaconda, and the Keras API, this application identifies both the presence and the orientation of cows in images. This app can be useful for farmers in the farm where they can monitor their animals (specifically cows) from a particular distance.",
      id: 1,
    },
    {
      image: img2,
      title: "Chatbot",
      dateOfCreation: "April 19, 2021",
      summary:
        "Built with ML Kit and Google Firebase, AI Club’s Text Detection App uses Optical Character Recognition (OCR) to extract textual information from images. Built with ML Kit and Google Firebase, AI Club’s Text Detection App uses Optical Character Recognition (OCR) to extract textual information from images. Built with ML Kit and Google Firebase, AI Club’s Text Detection App uses Optical Character Recognition (OCR) to extract textual information from images.",
      id: 2,
    },
    {
      image: img3,
      title: "Object Detector",
      dateOfCreation: "April 19, 2021",
      summary:
        "Is it a flower? A watch? A laptop? Or a notebook? Let AI Club’s Object Detector App help you find out! Harnessing the power of TensorFlow Lite, our Object Detector app matches an arbitrary object’s properties and characteristics with those of hundreds of thousands of samples from the ImageNet DB. In doing so, it accurately identifies a wide range of objects from any arbitrary visual input. Is it a flower? A watch? A laptop? Or a notebook? Let AI Club’s Object Detector App help you find out! Harnessing the power of TensorFlow Lite, our Object Detector app matches an arbitrary object’s properties and characteristics with those of hundreds of thousands of samples from the ImageNet DB. In doing so, it accurately identifies a wide range of objects from any arbitrary visual input.",
      id: 3,
    },
    {
      image: img4,
      title: "Text Detection",
      dateOfCreation: "April 19, 2021",
      summary:
        "Text Detection is a specific implementation of Visual-AI (also known as computer vision or vision-ai) that allows text embedded in (burnt into) images and videos to be read and converted into machine readable text.",
      id: 4,
    },
  ],
};

function ProjectsPage() {
  const ShowProjects = dummyData.projects.map((data) => {
    return (
      <div>
        {/* Project Card */}
        <section className="projectsCard">
          <div className={"image"}>
            <img src={data.image} />
          </div>
          <div className={"projs-text"}>
            <h3>{data.title}</h3>
            <p>{data.summary.substring(0,80)}...</p>
            <NavLink
              to={`${data.id}`}
              state={data}
              className="btn btn-outline-dark"
            >
              View Details
            </NavLink>
          </div>
        </section>
      </div>
    );
  });

  return (
    <div>
      {/* Banner */}
      <Banner title="Our Projects" />
      {/* Projects */}
      <div className={"projs-container"}>{ShowProjects}</div>
    </div>
  );
}

export default ProjectsPage;

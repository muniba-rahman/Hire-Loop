import React from "react";
import "./Banner.css";

const Banner = ({ title }) => {
  return (
    <section
      className={"banner"}
      href={"https://www.vecteezy.com/free-vector/black-background"}
    >
      <div
        className={"overlay titleContainer"}
        style={{ alignItems: "center", justifyContent: "center" }}
      >
        <h1>{title}</h1>
      </div>
    </section>
  );
};

export default Banner;

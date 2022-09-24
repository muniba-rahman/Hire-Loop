import React from "react";
import "./Registeration.css";
import RegisterationForm from "./RegisterationForm";

function InstructorRegisteration() {
  return (
    <div className={"registerationPage"}>
      <section
        className={"banner"}
        href={"https://www.vecteezy.com/free-vector/black-background"}
      >
        <div
          className={"overlay titleContainer"}
          style={{
            alignItems: "stretch",
            flexDirection: "column",
            justifyContent: "center",
          }}
        >
          <RegisterationForm title={"Instructor"} />
        </div>
      </section>
      <section></section>
    </div>
  );
}

export default InstructorRegisteration;

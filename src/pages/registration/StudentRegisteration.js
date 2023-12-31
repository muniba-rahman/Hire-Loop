import React from "react";
import "./Registeration.css";
import RegisterationForm from "./RegisterationForm";

function StudentRegisteration() {
  return (
    <div className={"registerationPage"}>
      <section
        class={"banner"}
        href={"https://www.vecteezy.com/free-vector/black-background"}
      >
        <div
          className={"overlay titleContainer"}
          style={{
            alignItems: "stretch",
            justifyContent: "center",
            flexDirection: "column",
          }}
        >
          <RegisterationForm title={"Student"} />
        </div>
      </section>
    </div>
  );
}

export default StudentRegisteration;

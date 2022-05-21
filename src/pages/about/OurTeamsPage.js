import React from "react";
import { Link } from "react-router-dom";
import { OUR_TEAMS } from "../../constants/image_constants";
import { OUR_TEAMS_PAGE } from "../../constants/string_constants";
import "./About.css";

export default function OurTeamsPage() {
  return (
    <div className={"ourTeamsPage"}>
      <section
        className={"banner"}
        href={"https://www.vecteezy.com/free-vector/black-background"}
      >
        <div
          className={"overlay titleContainer"}
          style={{ alignItems: "center", justifyContent: "center" }}
        >
          <h1>Our Teams</h1>
        </div>
      </section>
      <section className={"sec-1"}>
        <div className={"image"}>
          <img src={OUR_TEAMS_PAGE.secOne.img} />
        </div>
        <div className={"text-container"}>
          <h1>{OUR_TEAMS_PAGE.secOne.title}</h1>
          <p>{OUR_TEAMS_PAGE.secOne.para}</p>
        </div>
      </section>
      <section className={"sec-2"}>
        <h1>Our Teams</h1>
        <h6>
          A Total Of 10 Teams Function Under The AI Club. From Content Writing
          To Marketing To Technical Etc, Each Team Consists Of Dedicated And
          Skilled Individuals
        </h6>
        <div className={"images"}>
          {OUR_TEAMS_PAGE.secTwo.map((obj, i) => (
            <div key={i}>
              <Link to={`${obj.path}`}>
                <div className={"overlay"} />
                <img src={obj.image} />
              </Link>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}

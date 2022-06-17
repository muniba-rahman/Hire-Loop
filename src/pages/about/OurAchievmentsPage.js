import React from "react";
import Banner from "../../components/banner/Banner";
import { OUR_ACHIEVEMENTS_PAGE } from "../../constants/string_constants";

function OurAchievmentsPage() {
  return (
    <div className={"achievementsPage"}>
      <Banner title={"Our Achievements"} />
      <section className={"sec-1"}>
        <div>
          <h2>{OUR_ACHIEVEMENTS_PAGE.secOne.headings[0]}</h2>
          <br />
          <h6 style={{ whiteSpace: "pre-line" }}>
            {OUR_ACHIEVEMENTS_PAGE.secOne.paras[0]}
          </h6>
          <br />
          <br />
          <br />
          <h2>{OUR_ACHIEVEMENTS_PAGE.secOne.headings[1]}</h2>
          <br />
          <h6 style={{ whiteSpace: "pre-line" }}>
            {OUR_ACHIEVEMENTS_PAGE.secOne.paras[1]}
          </h6>
          <br />
          <br />
          <h5>{OUR_ACHIEVEMENTS_PAGE.secOne.author}</h5>
        </div>
      </section>
    </div>
  );
}

export default OurAchievmentsPage;

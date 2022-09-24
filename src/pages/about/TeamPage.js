import React, { useEffect } from "react";
import { OUR_TEAMS_PAGE } from "../../constants/string_constants";

function TeamPage() {
  const pathName = window.location.pathname.split("/").pop();
  const pageProps = OUR_TEAMS_PAGE.secTwo.filter(
    (obj) => obj.path == pathName
  )[0];
  const { bannerTitle, secOne, secTwo } = pageProps.pageData;

  useEffect(() => {
    console.log("path ===>", pathName);
    console.log("data ===>", pageProps);
  }, []);

  return (
    <div className={"teamPage"}>
      <section
        className={"banner"}
        href={"https://www.vecteezy.com/free-vector/black-background"}
      >
        <div
          className={"overlay titleContainer"}
          style={{ alignItems: "center", justifyContent: "center" }}
        >
          <h1>{bannerTitle}</h1>
        </div>
      </section>
      <section className={"sec-1"}>
        <div>
          <img src={pageProps.image} />
        </div>
        <div className={"text-container"}>
          <h2>{secOne.title}</h2>
          <p style={{ whiteSpace: "pre-line" }}>{secOne.para}</p>
        </div>
      </section>
      <section className={"sec-2"}>
        <h2>{secTwo.title}</h2>
        <h6>{secTwo.subTitle}</h6>
        <br />
        <div className={"images"}>
          {secTwo.images.map((obj, i) => {
            return (
              <div key={i} className={"image"}>
                <img src={obj.img} />
                <p style={{ whiteSpace: "pre-line" }}>
                  {obj.name}
                  {`\n`}
                  {obj.position}
                </p>
              </div>
            );
          })}
        </div>
      </section>
    </div>
  );
}

export default TeamPage;

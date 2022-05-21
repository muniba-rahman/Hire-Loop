import React from "react";
import "./About.css";
import { ABOUT_PAGE } from "../../constants/string_constants";
import { Carousel } from "react-responsive-carousel";
import { OUR_TEAMS } from "../../constants/image_constants";
import { FONT_COLOR_BLUE } from "../../constants/color_constants";

export default function AboutPage() {
  const SectionOne = ({ arrayOfParas }) => {
    console.log("arrayOfParas:", arrayOfParas);
    return (
      <section className="sec-1">
        {arrayOfParas.map((obj, index) => {
          return (
            <div
              key={index}
              style={{ flex: 1, flexDirection: "column", padding: "0 30px" }}
            >
              <h4 style={{ color: FONT_COLOR_BLUE }}>{obj.title}</h4>
              <p style={{ fontSize: "80%" }}>{obj.para}</p>
            </div>
          );
        })}
      </section>
    );
  };

  return (
    <div className={"aboutPage"}>
      <section
        className={"banner"}
        href={"https://www.vecteezy.com/free-vector/black-background"}
      >
        <div
          className={"overlay titleContainer"}
          style={{ alignItems: "center", justifyContent: "center" }}
        >
          <h1>ABOUT US</h1>
        </div>
      </section>
      <SectionOne arrayOfParas={ABOUT_PAGE.secOne} />
      <section className={"sec-2"}>
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <img
            src={ABOUT_PAGE.secTwo.img}
            style={{ objectFit: "contain", maxWidth: "100%" }}
          />
        </div>
        <div className={"text-container"}>
          <h2 style={{ fontWeight: "bold" }}>{ABOUT_PAGE.secTwo.title}</h2>
          <h4>{ABOUT_PAGE.secTwo.subTitle}</h4>
          <p>{ABOUT_PAGE.secTwo.para}</p>
        </div>
      </section>
      <section className={"sec-3"}>
        <h2>Our Teams</h2>
        <h6>
          A Total Of 10 Teams Function Under The AI Club. From Content Writing
          To Marketing To Technical Etc, Each Team Consists Of Dedicated And
          Skilled Individuals
        </h6>
        <div className={"image_slider"}>
          <Carousel
            autoPlay={true}
            showThumbs={false}
            showArrows={true}
            className={"carouselHome"}
            showStatus={false}
            centerMode={true}
            centerSlidePercentage={100}
            infiniteLoop={true}
          >
            {OUR_TEAMS.map((obj, index) => {
              return (
                <div
                  key={index}
                  style={{
                    flexDirection: "row",
                    display: "flex",
                    cursor: "pointer",
                    width: "100%",
                  }}
                >
                  <img src={obj.image} style={{ width: "100%" }} />
                </div>
              );
            })}
          </Carousel>
        </div>
      </section>
      <section className={"sec-4"}>
        <h2>Our Excom Body</h2>
        <div className={"images"}>
          {ABOUT_PAGE.secFour.images.map((obj, i) => (
            <div key={i}>
              <img src={obj.src} />
              <div style={{ paddingTop: "10px" }}>
                <p
                  style={{
                    whiteSpace: "pre-line",
                    fontWeight: "500",
                  }}
                >
                  {obj.name}
                  {"\n"}
                  <i>{obj.position}</i>
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}

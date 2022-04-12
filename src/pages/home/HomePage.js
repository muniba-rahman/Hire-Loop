import React, { useState } from "react";
import "./Home.css";
import image from "../../images/home1.jpg";
import image2 from "../../images/robotshape-1.png";
import image3 from "../../images/white-bg.jpg";
import ourProjects1 from "../../images/ourProjects1.jpg";
import ourProjects2 from "../../images/ourProjects2.jpg";
import ourProjects3 from "../../images/ourProjects3.jpg";
import ourProjects4 from "../../images/ourProjects4.jpg";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
import {
  img_team_excom,
  img_team_web,
  img_team_content,
  img_team_tech,
  img_team_manage,
  img_team_graphic,
  img_team_promo,
  img_team_creative,
  img_team_market,
  img_team_register,
  img_team_social,
} from "../../constants/image_constants";

import {
  FONT_COLOR_BLUE,
  FONT_COLOR_DEFAULT,
} from "../../constants/color_constants";
import { HOME_PAGE } from "../../constants/string_constants";

export default function HomePage() {
  const [buttonIndex, setButtonIndex] = useState(0);
  const secTwo = HOME_PAGE.secTwo;
  const ourProjectList = [
    { image: ourProjects1, title: "Cow Detector App" },
    { image: ourProjects2, title: "Chat Bot" },
    { image: ourProjects3, title: "Object Detector" },
    { image: ourProjects4, title: "Text Detection" },
  ];

  const ourTeams = [
    { image: img_team_excom },
    { image: img_team_web },
    { image: img_team_content },
    { image: img_team_tech },
    { image: img_team_manage },
    { image: img_team_graphic },
    { image: img_team_promo },
    { image: img_team_creative },
    { image: img_team_market },
    { image: img_team_register },
    { image: img_team_social },
  ];

  const renderProjectList = (projects) => {
    return projects.map((obj, index) => {
      return (
        <div
          key={index}
          className={"projectDiv"}
          style={{
            backgroundImage: `url(${obj.image})`,
            backgroundSize: "cover",
          }}
        >
          <div className={"projectOverlay"}>
            <h1>{obj.title.toUpperCase()}</h1>
          </div>
        </div>
      );
    });
  };

  return (
    <div>
      <section className={"sec sec1"}>
        <div
          className={"imageBg"}
          style={{
            backgroundImage: `url(${image})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        >
          <div className={"overlay"}>
            <div className={"titlePara"}>
              <p>
                <h1>Advancing AI In Pakistan</h1>
                <h3>
                  We Are Leading The AI Revolution In Pakistan, Educating The
                  The Next Generation Of Pakistani AI Researchers And Innovators
                </h3>
                <button className={"joinUsBtn"}>Join Us</button>
              </p>
            </div>
          </div>
        </div>
      </section>
      <section className={"sec sec2"}>
        <div className={"blockA"}>
          <div className={"imageBg2"}>
            <img className={"aiRobot"} src={image2} />
          </div>
          <div style={{ flex: 1 }}>
            <div className={"blockAB"}>
              <div
                style={{
                  display: "flex",
                  flexDirection: "row",
                  justifyContent: "center",
                  borderBottom: "1px solid grey",
                }}
              >
                <button className={"typeBtn"} onClick={() => setButtonIndex(0)}>
                  <h3
                    style={
                      buttonIndex == 0
                        ? { color: FONT_COLOR_BLUE }
                        : { color: FONT_COLOR_DEFAULT }
                    }
                  >
                    About Us
                  </h3>
                </button>
                <button className={"typeBtn"} onClick={() => setButtonIndex(1)}>
                  <h3
                    style={
                      buttonIndex == 1
                        ? { color: FONT_COLOR_BLUE }
                        : { color: FONT_COLOR_DEFAULT }
                    }
                  >
                    Our Mission
                  </h3>
                </button>
                <button className={"typeBtn"} onClick={() => setButtonIndex(2)}>
                  <h3
                    style={
                      buttonIndex == 2
                        ? { color: FONT_COLOR_BLUE }
                        : { color: FONT_COLOR_DEFAULT }
                    }
                  >
                    Our Vision
                  </h3>
                </button>
              </div>
              <h1 style={{ color: FONT_COLOR_DEFAULT }}>
                {secTwo[buttonIndex].title}
              </h1>
              <p style={{ color: FONT_COLOR_DEFAULT }}>
                {secTwo[buttonIndex].para}
              </p>
            </div>
          </div>
        </div>
      </section>
      <section className={"sec sec3"}>
        <div className={"sec_div"} style={{ color: FONT_COLOR_DEFAULT }}>
          <h1>Our Projects</h1>
          <h3>
            We Work On Ambitious Projects To Create Solutions And Enhance The
            Standards Of Living Through Technology
          </h3>
        </div>
        <div className={"projList"}>{renderProjectList(ourProjectList)}</div>
      </section>
      <section className={"sec sec4"}>
        <div
          className={"bgImgSec4"}
          style={{
            backgroundImage: `url(${image3})`,
          }}
        />
        <div className={"sec_div"} style={{ color: FONT_COLOR_DEFAULT }}>
          <h1>Our Team</h1>
          <h3>
            A Total Of <strong style={{ color: "#44699d" }}>10 Teams</strong>{" "}
            Function Under The AI Club. From Content Writing To Marketing To
            Technical Etc, Each Team Consists Of Dedicated And Skilled
            Individuals.
          </h3>
        </div>
        <div className={"image_slider"}>
          <Carousel
            autoPlay={true}
            showThumbs={false}
            showArrows={true}
            className={"carouselHome"}
            showStatus={false}
            centerMode={true}
            centerSlidePercentage={100}
          >
            {ourTeams.map((obj, index) => {
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
    </div>
  );
}

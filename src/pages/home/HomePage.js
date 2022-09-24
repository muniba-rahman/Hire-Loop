import React, { useState } from "react";
import "./Home.css";
import image from "../../images/imgBg.jpg";
import image2 from "../../images/robotshape-1.png";
import image3 from "../../images/white-bg.jpg";
import image4 from "../../images/HowAIWorks.png";
import image5 from "../../images/white-bg2.jpg";
import ourProjects1 from "../../images/ourProjects1.jpg";
import ourProjects2 from "../../images/ourProjects2.jpg";
import ourProjects3 from "../../images/ourProjects3.jpg";
import ourProjects4 from "../../images/ourProjects4.jpg";
import blog1 from "../../images/blog1_mock.jpg";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
import { OUR_TEAMS } from "../../constants/image_constants";

import {
  FONT_COLOR_BLUE,
  FONT_COLOR_DEFAULT,
} from "../../constants/color_constants";
import { HOME_PAGE } from "../../constants/string_constants";
import { useEffect } from "react";
import blogServices from "../../axios/services/blog.service";
import { Link } from "react-router-dom";

export default function HomePage() {
  const [buttonIndex, setButtonIndex] = useState(0);
  const [blogs, setBlogs] = useState([]);
  const secTwo = HOME_PAGE.secTwo;
  const ourProjectList = [
    { image: ourProjects1, title: "Cow Detector App" },
    { image: ourProjects2, title: "Chat Bot" },
    { image: ourProjects3, title: "Object Detector" },
    { image: ourProjects4, title: "Text Detection" },
  ];

  var dateOptions = {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric",
  };

  const getBlogListAPI = async () => {
    const response = await blogServices.getBlogList(3);
    console.log("getBlogList ===>", response);
    if (response.data?.length && response.status === 200) {
      setBlogs(response.data);
    }
  };

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

  useEffect(() => {
    getBlogListAPI();
  }, []);

  return (
    <div className={"homePage"}>
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
              <h1>Advancing AI In Pakistan</h1>
              <br />
              <h2>
                We Are Leading The AI Revolution In Pakistan, Educating The The
                Next Generation Of Pakistani AI Researchers And Innovators
              </h2>
              <br />
              <button className={"joinUsBtn"}>Join Us</button>
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
        <div className={"sec_div"}>
          <h1>Our Projects</h1>
          <h3>
            We Work On Ambitious Projects To Create Solutions And Enhance The
            Standards Of Living Through Technology
          </h3>
        </div>
        <div className={"projList"}>{renderProjectList(ourProjectList)}</div>
      </section>
      <section className={"sec sec4"}>
        <div className={"navSpace"}></div>

        <div
          className={"bgImgSec4"}
          style={{
            backgroundImage: `url(${image3})`,
          }}
        />
        <div className={"sec_div"}>
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
        <div className={"navSpace"}></div>
      </section>
      <section className={"sec5 sec"}>
        <div className={"sec_div"}>
          <h1 style={{ width: "80%", textAlign: "center", paddingTop: "5%" }}>
            How AI Club Works
          </h1>
          <h3>
            The AI Club Brings The Young AI Startups Into The Spotlight Linking
            Them With Potential Investors.
          </h3>
        </div>
        <div className={"sec5_body"}>
          <div className={"imageContainer"}>
            <img src={image4} className={"sec5_img"} />
          </div>
          <div className={"sec5_text"}>
            <h2 style={{ width: "80%", textAlign: "center", paddingTop: "5%" }}>
              Preparing undergrad students to dominate the industry by:
            </h2>
            <ul
              className={"listPrepare"}
              style={{ textAlign: "left", width: "80%", fontSize: "16px" }}
            >
              <li>
                The Annual AI fest provides a medium for sharing and
                implementing breakthrough ideas.
              </li>
              <br />
              <li>Arranging seminars, bootcamps, and workshops etc.</li>
              <br />
              <li>Providing access to online courses.</li>
              <br />
            </ul>
          </div>
        </div>
      </section>
      <section className="sec sec6">
        <div className="navSpace"></div>

        <div
          className={"bgImgSec6"}
          style={{
            backgroundImage: `url(${image5})`,
          }}
        />
        <div className="sec_div">
          <h1>Our Blogs</h1>
        </div>
        <div className="blogsList">
          {blogs.map((obj, i) => {
            return (
              <div key={obj._id} className={`blog blog-${i}`}>
                <img src={obj.thumbnail} />
                <div style={{ textAlign: "left" }}>
                  <h4 className="blogTitle">{obj.title}</h4>
                  <p className="blogDate">
                    {new Date(obj.created_on).toLocaleDateString(
                      "en-US",
                      dateOptions
                    )}
                  </p>
                  <p className="blogPreview">{obj.preview}</p>
                </div>
              </div>
            );
          })}
        </div>
        <Link
          style={{
            alignSelf: "flex-end",
            marginRight: "20px",
            marginTop: "20px",
          }}
          to={"/blogs"}
        >{`Find More >>>`}</Link>
      </section>
    </div>
  );
}

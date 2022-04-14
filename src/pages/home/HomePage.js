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

  var dateOptions = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };

  const blogList = [
    { 
      image: blog1,
      title: 'AI and Psychiatry',
      date: Date('11/2/2021'),
      preview: 'WHAT EXACTLY IS PSYCHIATRY? The human psyche and the art of understanding it requires deep complexity as this field has a lot to offer.',
    },
    {
      image: blog1,
      title: 'SELF DRIVING CARS: PROS AND CONS',
      date: Date('7/2/2021'),
      preview: 'NTRODUCTION:   So, there you are on a rainy night, and you have called a taxi. Strangely the driver does not talk. You arrived at'
    },
    {
      image: blog1,
      title: `Climate Change and AI's Prospects`,
      date: Date('6/9/2021'),
      preview: 'Of all the existential threats living species face in the current century and will be facing going into the future, Climate change remains to be'
    }
  ]

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
                <h1>Advancing AI In Pakistan</h1>
                <h2>
                  We Are Leading The AI Revolution In Pakistan, Educating The
                  The Next Generation Of Pakistani AI Researchers And Innovators
                </h2>
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
              <p style={{ color: FONT_COLOR_DEFAULT}}>
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
      <div className={'navSpace'}></div>

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
        <div className={'navSpace'}></div>

      </section>
      <section className={'sec5 sec'}>
            <div style={{width:'100%', display:'flex', alignItems:"center", flexDirection:'column', justifyContent:'center', textAlign:'center'}}>
              <h1 style={{width:'80%', textAlign:'center', paddingTop:'5%'}}>How AI Club Works</h1>
              <h3 style={{ width:'80%',textAlign:'center'}}>The AI Club Brings The Young AI Startups Into The Spotlight Linking Them With Potential Investors.</h3>
            </div>
            <div className={'sec5_body'}>
              <div className={'imageContainer'}>
                <img src={image4} className={'sec5_img'}/>
              </div>
              <div className={'sec5_text'}>
                <h2 style={{width:'80%', textAlign:'center', paddingTop:'5%'}}>
                  Preparing undergrad students to dominate the industry by:
                </h2>
                <ul className={'listPrepare'}style={{textAlign:'left', width:'80%', fontSize:'16px'}}>
                  <li>The Annual AI fest provides a medium for sharing and implementing breakthrough ideas.</li><br/>
                  <li>Arranging seminars, bootcamps, and workshops etc.</li><br/>
                  <li>Providing access to online courses.</li><br/>
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
                {
                  blogList.map((obj, i)=>{
                    return  <div key={i} className="blog">
                    <img src={blog1}/>
                    <div style={{textAlign:'left'}} >
                      <h2 className="blogTitle">AI and Psychiatry</h2>
                      <p className="blogDate">{new Date(blogList[i].date).toLocaleDateString("en-US",dateOptions)}</p>
                      <p className="blogPreview">{blogList[i].preview}</p>
                    </div>
                  </div>
                  })
                }
              </div>
             
      </section>

    </div>
  );
}

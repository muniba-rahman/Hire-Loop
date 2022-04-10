import React from 'react'
import './Home.css';
import image from '../../images/home1.jpg';
import image2 from '../../images/robotshape-1.png';
import { FONT_COLOR } from '../../constants/color_constants';

export default function HomePage() {
  const secTwo = [
    {
      type: "About Us",
      title: "Pioneers of a highly ambitious AI society for the Pakistani youth",
      para:"Founded in 2016, the AI CLUB is a derivative of the research centre for Artificial intelligence at NEDUET. Established by a group of undergraduate students of NED University, the club is all about artificial intelligence. Integrating several teams having a diverse set of skills, the AI club brings together all the ideas and individuals passionate about AI technology. We hold ourselves true to the promise of enlightening the young enthusiasts and encouraging emerging startups. The AI club organizes various events including; seminars, workshops, and boot camps featuring researchers and innovators shedding light upon topics such as Machine Learning, Deep Learning, data analysis, entrepreneurship, and robotic automation etc."
    }
  ]
  return (
    <div>
        <section className={'sec'}>
          <div className={'imageBg'} style={{backgroundImage:`url(${image})`, backgroundSize:'cover', backgroundPosition:'center'}}>
            <div className={'overlay'}>
            <div className={'titlePara'}>
              <p>
                <h1>Advancing AI In Pakistan</h1>
                <h3>We Are Leading The AI Revolution In Pakistan, Educating The The Next Generation Of Pakistani AI Researchers And Innovators</h3>
              </p>
            </div>
            </div>
          </div>
        </section>
        <section className={'sec2'}>
          <div className={'blockA'}>
            <div  className={'imageBg2'}>
              <img src={image2}/>
            </div>
            <div style={{flex:1}}>
              <div className={'blockAB'}>
                <div style={{display:'flex', flexDirection:'row', justifyContent:'center'}}>
                  <button className= {'typeBtn'}><h3>About Us</h3></button>
                  <button className= {'typeBtn'}><h3>Our Mission</h3></button>
                  <button className= {'typeBtn'}><h3>Our Vision</h3></button>
                </div>
                <h1 style={{color:FONT_COLOR}}>{secTwo[0].title}</h1>
                <h3 style={{color:FONT_COLOR}}>{secTwo[0].para}</h3>
              </div>
            </div>
          </div>
        </section>
    </div>
  )
}

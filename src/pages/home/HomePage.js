import React, { useState } from 'react'
import './Home.css';
import image from '../../images/home1.jpg';
import image2 from '../../images/robotshape-1.png';
import { FONT_COLOR } from '../../constants/color_constants';
import { HOME_PAGE } from '../../constants/string_constants';

export default function HomePage() {
  const [buttonIndex, setButtonIndex] = useState(0);
  const secTwo = HOME_PAGE.secTwo;
  return (
    <div>
        <section className={'sec'}>
          <div className={'imageBg'} style={{backgroundImage:`url(${image})`, backgroundSize:'cover', backgroundPosition:'center'}}>
            <div className={'overlay'}>
            <div className={'titlePara'}>
              <p>
                <h1>Advancing AI In Pakistan</h1>
                <h3>We Are Leading The AI Revolution In Pakistan, Educating The The Next Generation Of Pakistani AI Researchers And Innovators</h3>
                <button className={"joinUsBtn"}>Join Us</button>
              </p>
              
            </div>
            </div>
          </div>
        </section>
        <section className={'sec2'}>
          <div className={'blockA'}>
            <div  className={'imageBg2'}>
              <img className={'aiRobot'} src={image2}/>
            </div>
            <div style={{flex:1}}>
              <div className={'blockAB'}>
                <div style={{display:'flex', flexDirection:'row', justifyContent:'center', borderBottom:'1px solid grey'}}>
                  <button className= {'typeBtn'} onClick={()=>setButtonIndex(0)}><h3 style={buttonIndex==0?{color:'#358bfc'}:{color:FONT_COLOR}}>About Us</h3></button>
                  <button className= {'typeBtn'} onClick={()=>setButtonIndex(1)}><h3 style={buttonIndex==1?{color:'#358bfc'}:{color:FONT_COLOR}}>Our Mission</h3></button>
                  <button className= {'typeBtn'} onClick={()=>setButtonIndex(2)}><h3 style={buttonIndex==2?{color:'#358bfc'}:{color:FONT_COLOR}}>Our Vision</h3></button>
                </div>
                <h1 style={{color:FONT_COLOR}}>{secTwo[buttonIndex].title}</h1>
                <h3 style={{color:FONT_COLOR}}>{secTwo[buttonIndex].para}</h3>
              </div>
            </div>
          </div>
        </section>
    </div>
  )
}

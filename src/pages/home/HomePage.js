import React from 'react'
import './Home.css';
import image from '../../images/home1.jpg';

export default function HomePage() {
  return (
    <div>
        <section className={'sec1'}>
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
        <section className={'sec1'}></section>
    </div>
  )
}

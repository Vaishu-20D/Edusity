import React from 'react'
import './About.css';

import about_img from '../../assets/about.png';
import play_icon from '../../assets/play-icon.png';

const About = () => {
  return (
    <>

      <div className="about">
        <div className="about-left">
          <img src={about_img} className='about-img' />
          <img src={play_icon} className='play-icon' />

        </div>
        <div className="about-right">
          <h3>ABOUT UNIVERSITY</h3>
          <h2>Nurturing Tommarow's Leaders Today</h2>


          <p>Embark on a transdormative eduacational journey with our university's comparehensive eduaction programs . our cutting-edge curriculum is desighned to empower students with the knowledge, skills, and experiences needed to excel in the dyanamic field of eduaction</p>


          <p> With a focus on innovation, hands-on learning, and personalized mentorship, our progras prepare aspiring educators to make a meaningful impact in classrooms, schools, and communities</p>

          <p> Wheather you aspire to become a techer, administarator, counselor, or educational leader, our diverse range of programs counseler, or educational leader, our diverse range of programs offers the perfect pathway to achieve your goals and unlock your full notentional in shanine future of education </p>
        </div>
      </div>

    </>
  )
}

export default About;

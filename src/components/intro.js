import React from 'react';
import './intro.css';
import {Link} from 'react-scroll';

const intro = () => {
  return (
    <section id="intro">
        <div className="introContent">
        <span className="hello">Hello,</span>
        <span className="introText">I'm <span className="introName"> Anand</span><br/> Web Developer
        </span>
        <p className="introPara">I am a skilled web Developer</p>
        <Link><button className="btn"><img src="hireMe.png"  alt="Hire"  className="btnImg"/>Hire Me</button></Link>
        </div>

        <img src="image.png" alt="profile" className="bg"/>
    </section>
  )
}

export default intro

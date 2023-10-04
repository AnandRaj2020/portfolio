import React from 'react';
import './skills.css';

const skills = () => {
  return (
    <section id='skills'>
        <span className='skillTitle'>What I do</span>
        <span className="skillDesc"> I am a skilled and passionate web designer with experience</span>
        <div className="skillBars">
            <div className="skillBar">
                <img src="ui-design.png" alt="UI" classNmae="skillBarImg"></img>
                <div className="skillBarText">
                    <h2>UI UX Design</h2>
                    <p>anand</p>
                </div>   
            </div>
            <div className="skillBar">
                <img src="website-design.png" alt="web" classNmae="skillBarImg"></img>
                <div className="skillBarText">
                    <h2>Website Design</h2>
                    <p>anand</p>
                </div>   
            </div>
            <div className="skillBar">
                <img src="app-design.png" alt="app" classNmae="skillBarImg"></img>
                <div className="skillBarText">
                    <h2>App Design</h2>
                    <p>anand raj</p>
                </div>   
            </div>
        </div>

    </section>
  )
}

export default skills

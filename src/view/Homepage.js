// Homepage.js
import React from 'react';
import '../css/Navbar.css';
import '../css/Home.css';
import TrentonImage from '../Images/mephoto.png';
import DynamicList from '../view/DynamicList';
import MyChart from './MyChart';

function Homepage() {
  return (
    <div className="homepage">
      <div className="">
        <h1>Trenton Dobert - BDO Interview</h1>
      </div>

      <div className="sectionDiv">
        <div className="content">
          <h1>About Me</h1>
          <p>
            Hey guys! My Name is Trenton Dobert and I'd like to make a proposition to join your team as a full stack ASP.NET Web Developer.
            For starters, I've developed in the ASP.Net environment for over 6 years. I developed manufacturing support software for an Aerospace
            Company called "Rockwell Collins" or "Collins Aerospace". Most of my time was spent working on applications for floor managers, executives
            or machine operators. These applications promoted productivity by providing scheduling, reporting, statistical, forecasting and other types of
            planning and organizing productivity. I noticed BDO has an interest in Data Visualization software and thought I'd be a prefect fit for the team.

            On this page I list some standout traits you might appreciate in a member of your team, aswell as any relevant technology to the job that I worked with.
            Additionally, I provide a short little graphic on my confidence levels of this technology to help prove my frontend capability and presentation skills.

            I appreciate your time and consideration and hope you find this website helpful in reviewing me as your next teammate! 
          </p>
        </div>
        <div className="image-container">
          <img id="portrait" src={TrentonImage} alt="Trenton Dobert"></img>
        </div>
      </div>

      <div id="traits" className="sectionDiv">
        <div>
          <h2>List of Standout Traits</h2>
          <DynamicList />
        </div>
      </div>

      <div className="sectionDiv">
          <div className="content" style={{ textAlign: 'center' }}>
            <h2>Known Relevant Technologies</h2>
            <ol style={{ display: 'inline-block', textAlign: 'left' }}>
              <li>1. ASP Architecture</li>
              <li>2. C#</li>
              <li>3. Javascript</li>
              <li>4. React.JS</li>
              <li>5. Vue.JS</li>
              <li>6. SQL</li>
              <li>7. Bootstrap</li>
              <li>8. GIT</li>
            </ol>
          </div>
          <div className="image-container">
            <MyChart></MyChart>
          </div>

      </div>
    </div>
  );

}



export default Homepage;

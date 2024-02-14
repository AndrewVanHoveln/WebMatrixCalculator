import React from 'react';
import './AboutMe.css'

function AboutMe() {
  return (
    <div className="about-me">
      <h1>About Me</h1>
      <div className="bio">
        <p>
          Welcome to my personal website! 
          My name is Andrew Van Hoveln and I'm a passionate software developer with an ambition to deliver software that makes an impact on real people. <br/> <br/>
          Here's a little bit about me: 
        </p>
        <ul>
          <li>Location: Henning, IL</li>
          <li>Education: Illinois State University Computer Science</li>
          <li>Interests: In my free time I really enjoy working on my own personal projects. I also have a passion for Esports and competitive gaming.</li>
        </ul>
      </div>
    </div>
  );
}

export default AboutMe;
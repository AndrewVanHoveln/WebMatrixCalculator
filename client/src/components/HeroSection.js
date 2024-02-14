import React from 'react';
import '../App.css'
import './HeroSection.css'

function HeroSection(){
    return (
        <div className="hero-container">
            <video src="/videos/video-1.mp4" autoPlay loop muted />
            <div className="textblock">
                <h1>Welcome</h1>
                <p>This is my personal website where I have a page for my resume, a page that tells you a bit about me, and a page for a full stack matrix operation web app that i created.</p>
            </div>
        </div>
    );
}

export default HeroSection;
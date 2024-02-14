import React from 'react';
import './Resume.css';

function Resume() {
    const onButtonClick = () => {
        const pdfUrl = "Resume.pdf";
        const link = document.createElement("a");
        link.href = pdfUrl;
        link.download = "AndrewVanHovelnResume.pdf"; // specify the filename
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
    };
    return (
        <>
            <div className="resume">
                <iframe src="Resume.pdf"/>
            </div>
        </>
    );
};

export default Resume;
import React, {useState} from 'react';
import './TextSubmission.css'

function TextSubmission({ onSubmit, text }){
    const [textValue, setTextValue] = useState('');
    
    const handleChange = (event) => {
        setTextValue(event.target.value);
    };

    const handleSubmit = () => {
        onSubmit(textValue);
    };

    return (
        <>
            <div className="submssion-area">
                <label htmlFor="paragraphBox">Enter your sentence to be tagged:</label><br />
                <textarea id="paragraphBox" name="paragraphBox" rows="4" cols="50" value={textValue} onChange={handleChange}></textarea><br />
                <button onClick={handleSubmit}>{text}</button>
            </div>
        </>
    );
};

export default TextSubmission;
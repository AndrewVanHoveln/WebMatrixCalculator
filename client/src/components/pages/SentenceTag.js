import React, { useState } from 'react';
import './SentenceTag.css';
import '../TextSubmission'
import TextSubmission from '../TextSubmission';

function SentenceTag() {
    const [submittedText, setSubmittedText] = useState('');
    const [arrSentence, setArrSentence] = useState([]);
    const [tags, setTags] = useState([]);

    const handleTextSubmit = (text) => {
        setSubmittedText(text);

        fetch("/sentence-tag", {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({sentence: text})
        }).then(
            res => res.json()
        ).then(
            data => {
                const words = [];
                let word = '';
                const punctuation = ['.', ',', '!', '?', ';', ':']
                for (let i = 0; i < text.length; i++){
                    if(text[i] === ' ' && word.length > 0){
                        words.push(word)
                        word = ''
                    }
                    if(punctuation.includes(text[i])){
                        words.push(word)
                        words.push(text[i])
                        word = ''
                    }
                    else {
                        word += text[i]
                    }
                }
                for(let i = 0; i < data.length; i++){
                    if (punctuation.includes(data[i])){
                        data[i] = 'PUNCTUATION'
                    }
                }
                setTags(data);
                setArrSentence(words);
            }
        )
    };

  return (
    <div className='sentence-tag'>
        <TextSubmission onSubmit={handleTextSubmit} text="Submit"/>
        {submittedText && <div className="table-container">
        <table className='sent-table'>
        <thead>
            <tr>
            <th scope="col">Words</th>
            <th className="col">Tags</th>
            </tr>
        </thead>
        <tbody>
            {/* Iterate over the arrays and generate rows */}
            {arrSentence.map((item, index) => (
            <tr key={index}>
                <td>{item}</td>
                <td>{tags[index]}</td>
            </tr>
            ))}
        </tbody>
        </table>
        </div>}
    </div>
  );
};

export default SentenceTag;
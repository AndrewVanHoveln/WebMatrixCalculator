import React, {useState} from 'react'
import './MatrixCalculator.css'
import RadioOptions from '../RadioOptions'

function MatrixCalculator() {

    const [a, setMatA] = useState('')
    const [b, setMatB] = useState('')
    const [c, setMatC] = useState([])
    const [errorMsg, setErrMsg] = useState('')
    const [selectedOption, setSelectedOption] = useState('')

    const handleAChange = (event) => {
        setMatA(event.target.value)
    }

    const handleBChange = (event) => {
        setMatB(event.target.value)
    }

    const handleOptionChange = (event) => {
        setSelectedOption(event.target.value)
    }

    const handleTextSubmit = async () => {
        setErrMsg('');
        setMatC([]);

        if(!a || !b){
            setErrMsg("One of the matricies is blank!");
            return;
        }
        let aMat = [];
        let bMat = [];
        try{
            aMat = JSON.parse(a);
            bMat = JSON.parse(b);
        }
        catch(err){
            setErrMsg("Matrix Formatting Incorrect");
            return;
        }
        

        if (!Array.isArray(aMat[0])) {
            aMat = [aMat]
        }

        if (!Array.isArray(bMat[0])) {
            bMat = [bMat]
        }

        let url = 'http://127.0.0.1:8000/'; 

        if(!selectedOption){
            setErrMsg("Please select an operation");
            return;
        }
        url += selectedOption
        

        if(aMat.length < 0 || bMat < 0){
            setErrMsg("Matricies entered incorrectly!");
            return;
        }

        const postData = {
            a: aMat,
            b: bMat
        };

        const options = {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(postData)
        };

        try{
            const response = await fetch(url, options);
            if(!response.ok){
                throw new Error('Data entered incorrectly');
            }

            const data = await response.json();
            setMatC(data.c)
        } catch (error) {
            setErrMsg(error.message)
        }
    }

    return (
        <div className="matrix-calculator">
            <h1>Welcome to the matrix calculator! <br/></h1>
            <p>To use this calculator you need to type in the matricies in a 2D Array Format.<br/><br/>
            For Example:<br/>
            [[1,2,3,4],<br/>
            [1,2,3,4],<br/>
            [1,2,3,4]]<br/><br/><br/></p>
            <div className="textBoxes">
                <div className="a-box">
                    <label htmlFor="paragraphBox">Enter Matrix A:</label><br />
                    <textarea id="paragraphBox" name="paragraphBox" rows="4" cols="50" value={a} onChange={handleAChange}></textarea><br />
                </div>
                <div className="b-box">
                    <label htmlFor="paragraphBox">Enter Matrix B:</label><br />
                    <textarea id="paragraphBox" name="paragraphBox" rows="4" cols="50" value={b} onChange={handleBChange}></textarea><br />
                </div>
            </div>
            <div className="controls">
                <RadioOptions handleOptionChange={handleOptionChange} selectedOption={selectedOption}/>
                <button onClick={handleTextSubmit}>Calculate!</button>
            </div>
            
            {errorMsg && <div className="err-msg">{errorMsg}</div>}
            {c.length > 0 && (
                <div className="mat-c">
                    <label>Resulting Matrix C: <br/></label>
                    <table border="1">
                        <tbody>
                            {c.map((row, rowIndex) => (
                                <tr key={rowIndex}>
                                    {row.map((cell, cellIndex) => (
                                        <td key={cellIndex}>{cell}</td>
                                    ))}
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            )}
        </div>
    )
}

export default MatrixCalculator;
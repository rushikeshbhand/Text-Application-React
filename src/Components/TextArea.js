import React, { useState } from 'react';

export default function Textarea(props) {
    const [text, setText] = useState('');

    const handleOnChange = (event) => {
        setText(event.target.value);
    };

    const handleUpClick = () => {
        let newText = text.toUpperCase();
        setText(newText);
    };

    const handleLoClick = () => {
        let newText = text.toLowerCase();
        setText(newText);
    };

    const handleClear = () => {
        setText('');
    };
    
    // const trimtext = () => {
    //     if (text.trim() !== '') {
    //         let newText = text.trim();
    //         setText(newText);
    //     }
    // };
    

    return (
        <>
            <div className="form-group">
                <label htmlFor="exampleFormControlTextarea1"><h5>Enter your text</h5></label>
                <textarea className="form-control" id="exampleFormControlTextarea1" rows="8" value={text} onChange={handleOnChange}></textarea>
            </div>
            <button type="button" className="btn btn-outline-primary mx-1" onClick={handleUpClick}>Convert to uppercase</button>
            <button type='button' className='btn btn-outline-primary mx-1' onClick={handleLoClick}>convert to lowercase</button>
            <button type='button' className='btn btn-outline-primary mx-1' onClick={handleClear}>Clear texts</button>
            {/* <button type='button' className='btn btn-outline-primary mx-1' onClick={trimtext}>Trim text</button> */}
            <br /> <br />
            <p><h5>There are {text.split(" ").length} words and {text.length} characters in above paragraph</h5></p>
            <p>{text}</p>
        </>
    );
}

import React, { useState } from 'react'

export default function TextForm(props) {

    const handleonChange = (event) => {
        setText(event.target.value);
    }

    const handleUp = () => {
        let val = text.toUpperCase();
        setText(val);
        props.showAlert("Converted to UpperCase !", "success");
    }

    const handleLo = () => {
        let val = text.toLowerCase();
        setText(val);
        props.showAlert("Converted to LowerCase !", "success");

    }

    const handleCl = () => {
        let val = '';
        setText(val);
        props.showAlert("TextArea is Cleaned", "success");
    }

    const handleCo = () => {
        let txt = document.getElementById('myBox');
        txt.select();
        navigator.clipboard.writeText(txt.value);
        document.getSelection().removeAllRanges();
        props.showAlert("Text is copied to clipboard", "success");
    }

    const [text, setText] = useState("Enter the Text. ");
    return (
        <>
            <div className='container' style={{ color: (props.mode === 'dark') ? 'white' : '#092960' }}>
                <h1 className="mb-3disabled={text.length===0} " style={{ color: (props.mode === 'dark') ? 'white' : '#092960' }}>{props.heading}</h1>
                <div className="mb-3">
                    <textarea className="form-control" id="myBox" style={{ backgroundColor: (props.mode === 'dark') ? '#1e346a' : 'white', color: (props.mode === 'dark') ? 'white' : '#092960' }} value={text} onChange={handleonChange} rows="10"></textarea>
                </div>
                <button disabled={text.length===0} className='btn btn-primary mx-1 my-1' onClick={handleUp} >Convert to UpperCase</button>
                <button disabled={text.length===0} className='btn btn-primary mx-1 my-1' onClick={handleLo} >Convert to LowerCase</button>
                <button disabled={text.length===0} className='btn btn-primary mx-1 my-1' onClick={handleCl} >Clear Text</button>
                <button disabled={text.length===0} className='btn btn-primary mx-1 my-1' onClick={handleCo} >Copy Text</button>
            </div>
            <div className="container my-3" style={{ color: (props.mode === 'dark') ? 'white' : '#092960' }}>
                <h3 style={{ color: (props.mode === 'dark') ? 'white' : '#092960' }}>Text Summary</h3>
                <p style={{ color: (props.mode === 'dark') ? 'white' : '#092960' }}>
                    <b>{text.split(" ").filter((element) => { return element.length !== 0 }).length} words and {text.length} characters.</b>
                </p>
                <h3>Preview</h3>
                <p>
                    <b>{text.length > 0 ? text : "Nothing to preview."}</b>
                </p>
            </div>
        </>
    )
}

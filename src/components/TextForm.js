import React, { useState } from "react";

export default function TextForm(props) {
    const handleloclick = () => {
    let newText = text.toLowerCase();
    setText(newText);
  };
  const handleupclick = () => {
    let newText = text.toUpperCase();
    setText(newText);
  };
  const handleclearclick=()=>{
    let newText = "";
    setText(newText);
  }
  const handlecopy=()=>{
    var text=document.getElementById("myBox");
    text.select();
    navigator.clipboard.writeText(text.value);
  }
  const handleExtraSpaces=()=>{
    let newtext=text.split(/[ ]+/)
    console.log(newtext)
    setText(newtext.join(" "))
  }
  const handleOnchange = (event) => [setText(event.target.value)];
  const [text, setText] = useState("");
  return (
    <>
      <div>
        <h1>{props.heading}</h1>
        <div className="mb-3">
          <textarea
            className="form-control"
            id="myBox"
            value={text}
            onChange={handleOnchange}
            rows="8"
          ></textarea>
        </div>
        <button className="btn btn-primary" onClick={handleupclick}>
          Convert To Uppercase
        </button>
        <button className="btn btn-primary mx-2" onClick={handleloclick}>
          Convert To Lowercase</button>
        <button className="btn btn-primary mx-2" onClick={handleclearclick}>
          Clear Text
        </button>
        <button className="btn btn-primary mx-2" onClick={handlecopy}>
          Copy Text
        </button>
        <button className="btn btn-primary mx-2" onClick={handleExtraSpaces}>
          Remove Extra Spaces
        </button>
      </div>
      <div className="container my-2">
        <h2>Your Text Summary</h2>
        <p>
          word {text.split(" ").length} character{text.length}
        </p>
        <p>{0.008 * text.split(" ").length} Minutes read</p>
        <h2>Preview</h2>
        <p>{text}</p> 
      </div>
    </>
  );
}

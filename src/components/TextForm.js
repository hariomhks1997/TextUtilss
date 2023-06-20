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
          Convert To Lowercase
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

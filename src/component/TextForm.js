import React, { useState } from "react";

export default function Textform(props) {
  const downloadTxtFile = () => {
    const element = document.createElement("a");
    const file = new Blob([text], {
      type: "text/plain",
    });
    element.href = URL.createObjectURL(file);
    element.download = "myFile.txt";
    element.click();
    // props.showAlert("File downloaded", "Success")
  };
  const handleUpClick = () => {
    // setText(text)
    let newtext = text.toUpperCase();
    setText(newtext);
    // console.log("Uppercase was clicked");
    // props.showAlert("Convert to uppercase", "Success")/
  };
  const handleLoClick = () => {
    let newtext = text.toLowerCase();
    setText(newtext);
    // props.showAlert("Convert to lowercase", "Success")
  };
  const handleOnChange = (event) => {
    // console.log("on changed");
    setText(event.target.value);
  };

  const [text, setText] = useState("");
  // text = "new text"; // wrong way to assigned the value
  // setText = ("new text"); // corrct way to assigned the value
  return (
    <>
      <div style={{ color: props.Mode === "dark" ? "white" : "black" }}>
        <h1>{props.heading}</h1>
        <div className="mb-3">
          <textarea
            className="form-control"
            value={text}
            style={{
              backgroundColor: props.Mode === "dark" ? "grey" : "white",
              color: props.Mode === "dark" ? "dark" : "light",
            }}
            onChange={handleOnChange}
            id="myBox"
            rows="8"
          ></textarea>
        </div>
        <button className="btn btn-primary mx-2" onClick={handleUpClick}>
          Convert to Uppercase
        </button>
        <button className="btn btn-primary mx-2" onClick={handleLoClick}>
          Convert to Lowercase
        </button>
        <button className="btn btn-primary mx-2" onClick={downloadTxtFile}>
          Download Text
        </button>
      </div>
      <div
        className="container"
        my="5"
        style={{ color: props.Mode === "Dark" ? "light" : "dark" }}
      >
        <h1>Your Summary</h1>
        <p>
          {text.split(" ").length} words {text.length} characters
        </p>
        <p>{0.008 * text.split(" ").length}Minutes to read</p>
        <h1>Preview</h1>
        <p>{text}</p>
      </div>
    </>
  );
}

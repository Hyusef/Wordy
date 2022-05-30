import React from "react";
import "./input.css";
import { useState } from "react";
import WordData from "./WordData";

function Input(props) {
  const [text, setText] = useState("");
  const [wordsL, setWordsL] = useState(20);
  const [color, setColor] = useState("red");
  const [cToggle, setCToggle] = useState(false);
  const formHandler = (e) => {
    e.preventDefault();
    setText(e.target.textinput.value);
    if (e.target.number.value) {
      setWordsL(e.target.number.value);
    }
    setColor(e.target.color.value);
    props.setExWords(
      e.target.wordsRemove.value.split(/[^A-Za-z]/g).map((w) => w.toLowerCase())
    );
  };
  const chartToggleHandler = (e) => {
    setCToggle(!cToggle);
  };
  props.getData(text, wordsL, color, cToggle);
  return (
    <div className="inputMain">
      <div className="formContainer">
        <form onSubmit={formHandler}>
          <textarea
            name="textinput"
            rows="25"
            cols="100"
            placeholder=""
            required
          ></textarea>
          <div className="inputs">
            <div className="input">
              <label htmlFor="number">
                Enter the amount of words you want as a number:{" "}
              </label>
              <input
                type="number"
                name="number"
                placeholder="Optional..."
                max="100"
                min="20"
              ></input>
            </div>
            <div className="input">
              <label htmlFor="wordsRemove">
                Enter the words to be removed:{" "}
              </label>
              <input
                type="text"
                name="wordsRemove"
                placeholder="Optional..."
              ></input>
            </div>
            <div className="input">
              <label htmlFor="color">Choose the color of the cloud: </label>
              <input type="color" name="color"></input>
            </div>
            <button
              className="chart"
              name="chartToggle"
              onClick={chartToggleHandler}
            >
              {cToggle ? "Hide Chart" : "Show Chart"}
            </button>
          </div>
          <button className="submit" type="submit">
            Submit
          </button>
        </form>
      </div>
      <WordData
        wordsToAnalyse={props.wordsToAnalyse}
        color={color}
        wordsL={wordsL}
        cToggle={cToggle}
        exWords={props.exWords}
      />
    </div>
  );
}

export default Input;

//responsiveness of the inputform

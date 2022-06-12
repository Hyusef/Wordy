import "./App.css";
import { useState, useRef } from "react";
import Main from "./components/Main";
import About from "./components/About";
import Input from "./components/Input";
import Footer from "./components/Footer";

function App() {
  const [wta, setwta] = useState("");
  const [wLength, setWLength] = useState(20);
  const [hue, setHue] = useState("red");
  const [exWords, setExWords] = useState("");
  const [chartToggle, setToggle] = useState(false);
  const inputEl = useRef(null);
  const englishWordsFilter = [
    "what",
    "where",
    "who",
    "when",
    "how",
    "it",
    "he",
    "she",
    "they",
    "them",
    "and",
    "the",
    "of",
    "on",
    "his",
    "her",
    "was",
    "a",
    "an",
    "",
    "as",
    "that",
    "by",
    "but",
    "for",
    "in",
    "to",
    "than",
    "also",
    "its",
    "while",
    "with",
    "from",
    "are",
    "from",
    "were",
    "have",
    "had",
    "not",
    "is",
    "or",
    "at",
    "has",
    "after",
    "their",
    "been",
    "this",
    "into",
    "some",
    "we",
    "they're",
    "these",
    "which",
    "whose",
    "so",
    "do",
    "be",
    "does",
    "very",
    "about",
    "most",
    "no",
    "there",
    "between",
    "over",
    "is",
    "if",
    "any",
    "such",
    "would",
    "you",
    "it's",
    "i've",
    "i'm",
    "it.",
    "me",
    "my",
    "it’s",
    "they’re",
    'will',
    'o  ',
    'me',
    'you',
    'him',
    'her'
  ];

  const getData = (words, wordsLength, color, toggle) => {
    setwta(words);
    setWLength(wordsLength);
    setHue(color);
    setToggle(toggle);
  };

  const onlyLetters = /^[a-zA-Z]+/;
  const wordsToAnalyse = wta
    .toLowerCase()
    .split(" ")
    .filter(
      (e) =>
        !englishWordsFilter.includes(e) &&
        e.match(onlyLetters) &&
        !exWords.includes(e)
    );

  //wordsToAnalyse={wta} color={hue} wordsL={wLength} cToggle={chartToggle}

  return (
    <div className="App">
      <Main />
      <About />
      {/* <svg id="" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#3f52fc" fill-opacity="1" d="M0,224L48,218.7C96,213,192,203,288,213.3C384,224,480,256,576,250.7C672,245,768,203,864,202.7C960,203,1056,245,1152,272C1248,299,1344,309,1392,314.7L1440,320L1440,0L1392,0C1344,0,1248,0,1152,0C1056,0,960,0,864,0C768,0,672,0,576,0C480,0,384,0,288,0C192,0,96,0,48,0L0,0Z"></path></svg> */}
      <Input
        getData={getData}
        wordsToAnalyse={wordsToAnalyse}
        setExWords={setExWords}
        exWords={exWords}
      />

      <header className="App-header">
        {/*   <form onSubmit={formHandler}>
                <textarea name="textinput" rows="10" cols="100"></textarea>
                <button type = "submit">Submit</button>
                <input type="number" name="number" placeholder="Enter a number" max="500"  min="20"></input>
                <input type="text" name="wordsRemove" onChange={exclWordHandler} placeholder="Enter words to be excluded seperated by non character"></input>
                <input type="color" name="color" ></input>
                <button  name="chartToggle" onClick={chartToggleHandler}>{cToggle?"Hide Chart":"Show Chart"}</button>
            </form>  */}
      </header>
      <Footer />
    </div>
  );
}
export default App;


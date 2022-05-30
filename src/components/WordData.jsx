import React from "react";
import "./WordData.css";
import jsPDF from "jspdf";
import { useRef } from "react";
import html2canvas from "html2canvas";
import Barchart from "./Barchart";
import { BsDownload } from "react-icons/bs";

function WordData({ wordsToAnalyse, color, wordsL, cToggle }) {
  const inputEl = useRef(null);
  const wordObj = {};
  wordsToAnalyse.forEach(function (word) {
    const currentWordCount = wordObj[word] || 0;
    wordObj[word] = currentWordCount + 1;
  });

  const elecount = Object.values(wordObj).length
    ? Object.values(wordObj).reduce((a, b) => a + b)
    : 0;
  const l = Object.keys(wordObj).length;
  const sortedByFreq = Object.entries(wordObj).sort(([, a], [, b]) => b - a);
  const scrambleArr = sortedByFreq.slice(0, wordsL);

  let ci = scrambleArr.length,
    ri;
  //scrcambling the array
  while (ci !== 0) {
    ri = Math.floor(Math.random() * ci);
    ci--;
    [scrambleArr[ci], scrambleArr[ri]] = [scrambleArr[ri], scrambleArr[ci]];
  }

  //data for the bar chart
  const data = {
    labels: scrambleArr.map((e) => e[0]),
    datasets: [
      {
        data: scrambleArr.map((e) => e[1]),
        backgroundColor: color,
      },
    ],
  };

  const downloadHandler = () => {
    html2canvas(inputEl.current).then((canvas) => {
      const imgData = canvas.toDataURL("image/png");
      const imgWidth = 190;
      const pageHeight = 290;
      const imgHeight = (canvas.height * imgWidth) / canvas.width;
      let heightLeft = imgHeight;
      const doc = new jsPDF("pt", "mm");
      let position = 0;
      doc.text("hello word", 50, 50);
      doc.addImage(imgData, "PNG", 10, 0, imgWidth, imgHeight + 25);
      heightLeft -= pageHeight;
      while (heightLeft >= 0) {
        position = heightLeft - imgHeight;
        doc.addPage();
        doc.addImage(imgData, "PNG", 10, position, imgWidth, imgHeight + 25);
        heightLeft -= pageHeight;
      }
      doc.save("download.pdf");
    });
  };
  return (
    <div>
      {scrambleArr.length && (
        <div className="wordDataMain">
          <div className="wordMain">
            <div id="resultsDiv" ref={inputEl}>
              <div className="wordsContainer">
                {scrambleArr.map((e) => {
                  const wordRatio =
                    wordObj[e[0]] / elecount > 0.025
                      ? 0.015
                      : wordObj[e[0]] / elecount;
                  console.log(wordRatio);
                  return (
                    <span
                      className="awords"
                      key={e}
                      style={{
                        opacity: `${wordRatio * wordsL * wordsL * 10 + 30}%`,
                        fontSize: `${wordRatio * wordsL * wordsL * 10 + 5}px`,
                      }}
                    >
                      <a
                        target="_blank"
                        style={{ color: color }}
                        href={`https://www.dictionary.com/browse/${e[0]}`}
                      >
                        {e[0]}
                      </a>
                    </span>
                  );
                })}
              </div>
              <div className={`chartContainer ${cToggle ? "" : "hidden"} `}>
                <Barchart data={data} />
              </div>
            </div>
          </div>
          <button onClick={downloadHandler}>
            <BsDownload />
          </button>
        </div>
      )}
    </div>
  );
}

export default WordData;

<h1 align="center">
  <br>
  <a href="https://wordys.netlify.app/"><img src="https://user-images.githubusercontent.com/61304986/175816124-2bbf7b98-565a-47cc-96d0-307778a73274.png" alt="swisscalc" width="150"></a>


  

</h1>

<h4 align="center">Wordy is the best word collage generator. It can generate a collage based on the most common words in large texts.  </h4>




<p align="center">
  <a href="#key-features">Key Features</a> •
  <a href="#about">About</a> •
  <a href="#tech-stack">Tech Stack</a> •
  <a href="#how-to-use">How To Use</a> •
  <a href="#challenges">Challenges</a> •
  <a href="#lessons-learned">Lessons Learned</a> •
  <a href="#improvements">Improvements</a> •
</p>

![screenshot](https://user-images.githubusercontent.com/61304986/172940210-565203e5-c9ec-40e7-9987-ccb3fce2406e.gif)

## Key Features

 
* Generates Word Collage/Cloud from large texts.
* Word collage can be customised based on colour, removal of certain words and a word limit.
* A chart can be generated in addition to the word collage.
* The generated cloud can be downloaded as pdf along with the chart.


## About
<p> This is a word collage generator. It can be used to quickly see the most common words in a text visually. This can then be customised and downloaded.It works best with large texts as it is not intended for smaller texts. It also has an added feature where if a word is not understood clicking it will take you to the dictionary.</p>

## Tech Stack
* React
* Tailwind
* jsPdf 
* ChartJs 
* Material-UI 
* Styled-Components


## How To Use

To clone and run this application, you'll need [Git](https://git-scm.com) and [Node.js](https://nodejs.org/en/download/) (which comes with [npm](http://npmjs.com)) installed on your computer. From your command line:

```bash
# Clone this repository
$ git clone https://github.com/hyusef/Wordy

# Go into the repository
$ cd Wordy

# Install dependencies
$ npm install

# Run the app
$ npm start
```

## Challenges
* I didn't have many challenges doing this project but i had one big challenge which was figuring out the formula for deciding the opacity and the font-size of the words. I had many different variations but i needed something that could work with very large texts while at the same time also working with not so large texts. I had a problem where if i used a small text sample the font size would become huge. I finally had to settle with this:
```    
const wordRatio =
wordObj[e[0]] / elecount > 0.025
? 0.015
: wordObj[e[0]] / elecount;

opacity: `${wordRatio * wordsL * wordsL * 10 + 30}%`,
fontSize: `${wordRatio * wordsL * wordsL * 10 + 5}px`,                        
 ```
 This code uses a ratio instead of the length of the texts. And if the ratio is larger that 0.025 i limit it to 0.015. This has given me much better results.


## Lessons Learned
* I learnt that when creating an app we should take into account different groups of users. A scientist may use this app much differently than a businessman so even though the input is different their expectation is the same. A working app that does what it says it does and as programmers that is where the real challenge lies.

## Improvements

* The typography of the middle section is trash.
* The way the words are filtered is not ideal.
* A few components can be further broken down.


## You may also like...

- [Posinews](https://github.com/hyusef/Posinews) - News scraped from r/upliftingnews.. 

## License

MIT

---




'use strict';

const highestScore = (inputString) => {
  let highestWord = '';
  let highestScoreValue = 0;
  splitString = inputString.split(' ');
  for (const word in splitString) {
    lowerWord = splitString[word].toLowerCase();
    letters = lowerWord.split('');
    let score = 0;
    for (const letter in letters) {
      score += letters[letter].charCodeAt();
      console.log(score)
    }
    if (highestScoreValue < score) {
      highestScoreValue = score;
      highestWord = splitString[word];
    }
    console.log(highestWord);
  }
  return highestWord;
};

const span = document.querySelector('span');
const wordList = ['Developer', 'Coder', 'Teacher', 'YouTuber'];

const word = 'Developer';
wordIndex = 0;
let characterIndex = 0;
let skipUpdate = 0;
let reverseType = false;

const inervalId = setInterval(() => {
  if(skipUpdate){
    skipUpdate--
    return
  }
  if(!reverseType){
    skipUpdate = 2
    span.innerText = span.innerText+wordList[wordIndex][characterIndex];
    characterIndex++; 
  }else{
    span.innerText = span.innerText.slice(0, span.innerText.length-1);
  }

  if(characterIndex === wordList[wordIndex].length){
    skipUpdate = 2
    reverseType = true;
  }

  if(span.innerText.length == 0 && reverseType){
    reverseType = false;
    characterIndex = 0;
    wordIndex++;
  }

  if(wordIndex === wordList.length){
    wordIndex = 0;
  }
},100)

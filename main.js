const customName = document.getElementById('customname');
const randomize = document.querySelector('.randomize');
const story = document.querySelector('.story');

function randomValueFromArray(array){
  const random = Math.floor(Math.random()*array.length);
  return array[random];
}

const storyText = "It was 94 fahrenheit outside, so :insertx: went for a walk. When they got to :inserty:, they stared in horror for a few moments, then :insertz:. Bob saw the whole thing, but was not surprised — :insertx: weighs 300 pounds, and it was a hot day.";

const insertX = ["Willy the Goblin","Big Daddy","Father Christmas"];
const insertY = ["the soup kitchen","Disneyland","the White House"];
const insertZ = ["insertZ","insertZ","insertZ"];


randomize.addEventListener('click', result);

function result() {

  let newStory = storyText;

  let xitem = randomValueFromArray(insertX);
  let yitem = randomValueFromArray(insertY);
  let zitem = randomValueFromArray(insertZ);
  
  // 小西コメント
  // const PLEFIX_X = ':insertx:';
  // while (true) {
  //   if (-1 === newStory.indexOf(PLEFIX_X)) {
  //     break;
  //   }
  //   newStory = newStory.replace(PLEFIX_X, xitem);
  // }
  
  newStory = newStory.replace(":insertx:",xitem);
  newStory = newStory.replace(":insertx:",xitem);
  newStory = newStory.replace(":inserty:",yitem);
  newStory = newStory.replace(":insertz:",zitem);

  if(customName.value !== '') {
    const name = customName.value;
    newStory = newStory.replace('Bob',name);
  }

  if(document.getElementById("uk").checked) {
    const weight = Math.round(300);
    const temperature =  Math.round(94);

  }

//   story.textContent = ;
  story.style.visibility = 'visible';
}





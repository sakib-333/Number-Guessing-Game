//Variables
let low = 1,
  high = 10,
  correcr_ans = 0,
  cnt,
  chance;
isRunning = false;

//From HTML
let startButton = document.getElementById('start-button');
let messageField = document.getElementById('message');
let userNumberField = document.getElementById('user-number-field');
let chanceField = document.getElementById('chance');

userNumberField.disabled = true;

//Event listener
startButton.addEventListener('click', startButtonClicked);

//Event listener function
function startButtonClicked(e) {
  if (isRunning == false) {
    let userInput = prompt(`Enter a number between ${low}-${high}`);
    correcr_ans = Math.floor(Math.random() * 10 + 1);
    cnt = 0;
    isRunning = true;
    chance = 3;
    chanceField.innerHTML = `${chance}`;
    messageField.innerHTML = '';
    userNumberField.disabled = false;
    console.log(correcr_ans);
  } else {
    alert('Game is running');
  }
}

//Others function
function checkButtonClicked() {
  if (userNumberField.value != '' && cnt < 3) {
    if (userNumberField.value == correcr_ans) {
      messageField.innerHTML = 'You win';
      userNumberField.disabled = true;
      cnt = 4;
      isRunning = false;
    } else if (userNumberField.value < correcr_ans) {
      messageField.innerHTML = 'Correct answer is greater!';
    } else {
      messageField.innerHTML = 'Correct answer is smaller!';
    }
    cnt++;
    chanceField.innerHTML = `${--chance}`;
    if (cnt == 3) {
      messageField.innerHTML = 'You lose!';
      isRunning = false;
      userNumberField.disabled = true;
    }
    userNumberField.value = '';
  }
}

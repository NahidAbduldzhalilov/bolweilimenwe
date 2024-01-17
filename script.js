let counterValue = document.querySelector(`#countervalue`);
let btn = document.querySelector(`#btn`);
let games = 0;
let quessNumber = document.querySelector(`#quessnumber`);
let randomNumber = Math.ceil(Math.random() * 100);
let value = document.querySelector(`#value`);
let div = document.querySelector(".foruser");
let newgamebtn = document.querySelector(`.newgame`);
let gamefinish = 0;
console.log(randomNumber)

let game = () => {
  games++;

  if (quessNumber.value > randomNumber) {
    value.textContent = `Выберите число меньше`;
  } else if (quessNumber.value < randomNumber) {
    value.textContent = `Выберите число больше`;
  } else if (quessNumber.value == randomNumber) {
    value.textContent = `Угадал за ${games} ходов`;
    div.classList.add("d-none");
    newgamebtn.classList.remove(`d-none`);
    gamefinish++;
    counterValue.textContent = `${gamefinish}`;
  }
};

let gameAgain = () => {
  div.classList.remove("d-none");
  newgamebtn.classList.add(`d-none`);
  quessNumber.value = ``;
  games = 0;
  value.textContent = `-`;
  randomNumber = Math.ceil(Math.random() * 100);
  console.log(randomNumber);
};

btn.addEventListener(`click`, game);

newgamebtn.addEventListener(`click`, gameAgain);

const alphabet = [
  "a",
  "b",
  "c",
  "d",
  "e",
  "f",
  "g",
  "h",
  "i",
  "j",
  "k",
  "l",
  "m",
  "n",
  "o",
  "p",
  "q",
  "r",
  "s",
  "t",
  "u",
  "v",
  "w",
  "x",
  "y",
  "z",
];
const data = [
  { category: "fruits", Hint: "a yellow fruit", name: "banana" },

  { category: "fruits", Hint: "a green fruit", name: "cucumber" },

  { category: "fruits", Hint: "a fruit with 3 colors", name: "apple" },

  { category: "cloths", Hint: "most of cloths have", name: "pocket" },

  { category: "cloths", Hint: "a shirt with big flowers on", name: "hawaii" },
];
const alphabetButtons = document.querySelector(".alphabetButtons");
const category = document.querySelector(".category");
const newGame = document.querySelector(".newGame");
const gamePlayButton = document.querySelectorAll(".gamePlayButton");
const dashes = document.querySelector(".dashes");
const hint = document.querySelector(".hint");
const hintText = document.querySelector(".hintText");

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

//this loop inserts some buttons in the 'alphabetButtons' div in html file, as much as the number of alphabet.
//so we will have the alphabet as buttons in the website.
for (i = 0; i < alphabet.length; i++) {
  alphabetButtons.insertAdjacentHTML(
    "beforeend",
    `<button class="alphabetButton ${alphabet[i]} buttonAnimation">${alphabet[i]}</button>`
  );
}
const alphabetButton = document.querySelectorAll(".alphabetButton");
//console.log(alphabetButtons);

//----------------------------------------------------------------------------------------------------------------------------------

//animation of all of buttons, whe the mouse goes on them.
/*const buttonAnimation = document.querySelectorAll(".buttonAnimation");
for (i = 0; i < buttonAnimation.length; i++) {
  buttonAnimation[i].addEventListener("mouseenter", function (e) {
    //console.log(e.target);
    e.target.style.backgroundColor = "blueviolet";
    e.target.style.color = "white";
    e.target.style.transition = "0.3s";
  });
  buttonAnimation[i].addEventListener("mouseout", function (e) {
    //console.log(e.target);
    e.target.style.backgroundColor = "white";
    e.target.style.color = "blueviolet";
    e.target.style.transition = "0.3s";
  });
}*/

//----------------------------------------------------------------------------------------------------------------------------------
let pressedChar;
//when one of alphabet buttons has been clicked:
//the button character which is clicked, will be saved in 'pressedChar' variable;
for (i = 0; i < alphabetButton.length; i++) {
  alphabetButton[i].addEventListener('click', function(e){
    pressedChar = e.target
  });
}
console.log(pressedChar)

//----------------------------------------------------------------------------------------------------------------------------------

//a cell of the data array will be chosen, and it will be saved in 'answer' variable;
//and its properties will be gotten to use them.
const NewGame = function () {
  let answer = data[Math.trunc(Math.random() * data.length)];
  category.textContent = "The Chosen Category Is " + answer.category;
  dashes.innerHTML = "";
  hintText.textContent = "Hint : ";
  pressedChar.classList.add("alphabetButton");
  pressedChar.classList.remove("de-activeButton");

  //there will be shown some dashes as much as the the 'answer'word's characters.
  for (i = 0; i < answer.name.length; i++) {
    dashes.innerHTML += " - ";
  }

  //console.log(answer.name);
  //console.log(answer.name.length);
  return answer;
};

//----------------------------------------------------------------------------------------------------------------------------------

//when the 'New Game' is clicked:
newGame.addEventListener("click", () => {
  NewGame();
  let answer = NewGame();
  console.log(answer);

  //...............................................

  //when the 'hint' buttons is clicked:
  //1. the 'answer' will be gotten from where it has been defined(the 'New Game' function.).
  //2. the hint of answer will be shown.
  const hinter = function () {
    hintText.textContent = "Hint : " + answer.Hint;
    console.log(answer);
  };
  hint.addEventListener("click", () => {
    hinter();
  });

  //.....................

  //2. characters of the answer's name (the purpose word), will be looped;
  //3. if there was any 'pressedChar' in the answer word's characters:
  //4.

  //console.log(pressedChar)

  //console.log(answer.name);
  //console.log(pressedChar);

  for (i = 0; i < answer.name.length; i++) {
    if (answer.name[i] === pressedChar.textContent) {
      console.log("yes");
    } else {
      pressedChar.classList.remove("alphabetButton");
      pressedChar.classList.add("de-activeButton");
      console.log(pressedChar);

      //console.log("no");
    }
  }

  //console.log(pressedChar)
});

//----------------------------------------------------------------------------------------------------------------------------------

//----------------------------------------------------------------------------------------------------------------------------------

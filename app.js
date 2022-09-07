const cards = document.querySelectorAll(".main__card");

function shuffeCards() {
  for (cardElement of cards) {
    const randomOrder = Math.trunc(Math.random() * 12);
    cardElement.style.order = randomOrder;
  }
}

shuffeCards();

for (cardElement of cards) {
  cardElement.addEventListener("click", flipCard);
}

let pickedCards = [];
let locked = false;

let numberOfTries = 0;

function flipCard(e) {
  const { target } = e;

  let valueOfFrontCard = target.children[1].children[0].getAttribute("src"); //Gets the "src" attribute of the image in the front of the card

  valueOfFrontCard = valueOfFrontCard
    .substring(0, valueOfFrontCard.indexOf(".svg"))
    .replace("./ressources/", ""); //We get the name of the fruit through their filename

  //It'd be smarter to use the HTML data set attributes

  if (locked) {
    return;
  }

  saveCard(target, valueOfFrontCard);

  if (pickedCards.length === 2) {
    verifyResult();
  }
}

function saveCard(element, value) {
  if (element === pickedCards[0]?.element) {
    //If we clicked the same element twice, it will only add it once in the array of the picked cards
    return;
  }
  element.classList.add("show-card");
  pickedCards.push({ element, value });
  console.table(pickedCards);
}

function verifyResult() {
  setScore();
  if (pickedCards[0].value === pickedCards[1].value) {
    pickedCards[0].element.removeEventListener("click", flipCard);
    pickedCards[1].element.removeEventListener("click", flipCard);
    console.log(pickedCards[0].element, "matched with", pickedCards[1].element);
    pickedCards = [];
    return;
  }
  locked = true;
  setTimeout(() => {
    pickedCards[0].element.classList.remove("show-card");
    pickedCards[1].element.classList.remove("show-card");
    pickedCards = [];
    locked = false;
  }, 650);
}

const adviceParagraph = document.querySelector(".advice-paragraph");
const attemptsParagraph = document.querySelector(".attempts-paragraph");

const restartParagraphsArray = document.querySelectorAll(".restart-paragraph");

let cardsArray = Array.from(cards);

function setScore() {
  numberOfTries++;

  const unpairedRemainingCards = cardsArray.filter((card) => {
    return !card.classList.contains("show-card");
  });
  console.log(unpairedRemainingCards);
  if (!unpairedRemainingCards.length) {
    adviceParagraph.textContent = "Congratulations, you've finished the game!";
    numberOfTries === 6
      ? (attemptsParagraph.textContent = `Final score: ${numberOfTries}, you hit the highest possible score, amazing!`)
      : (attemptsParagraph.textContent = `Final score: ${numberOfTries}`);

    setTimeout(() => {
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });
    }, 650);

    return;
  }
  attemptsParagraph.textContent = `Number of attempts: ${numberOfTries}`;
}

window.addEventListener("keydown", restartGame);

let lockShuffle = false;
function restartGame(e) {
  if (e.keyCode === 32) {
    //The space bar has a keycode which is 32
    e.preventDefault(); //To negate the default behavior when you press the space bar
    console.log("Space hit");
    for (card of cards) {
      card.classList.remove("show-card");
      card.addEventListener("click", flipCard);
    }
    numberOfTries = 0;
    adviceParagraph.textContent =
      "Try to win with the least amount of attempts possible";
    attemptsParagraph.textContent = `Number of attempts: ${numberOfTries}`;
    setTimeout(() => {
      shuffeCards();
    }, 600);
  }
}

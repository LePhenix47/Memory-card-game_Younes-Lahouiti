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

let cardImagesName = {
  apple: "apple",
  banana: "banana",
  brocoli: "brocoli",
  cherry: "cherry",
  pepper: "pepper",
  strawberry: "strawberry",
};

function flipCard(e) {
  let frontOfCard = e.target.children[1].children[0]
    .getAttribute("src")
    .slice("./ressources/", 5);
  console.log(frontOfCard);
}

console.log(cardImagesName);

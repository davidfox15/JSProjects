let cardList = [];

const btnClose = document.querySelector("#closeButton");
const btnCreate = document.querySelector("#createButton");
const btnDelete = document.querySelector("#allDeleteButton");
const btnAdd = document.querySelector("#addButton");
const cardForm = document.querySelector(".card_form");

const question = document.getElementById("question");
const answer = document.getElementById("answer");

const list = document.querySelector(".ListOfCards");

document.addEventListener("DOMContentLoaded", () => {
  let json = localStorage.getItem("cards");
  if (json) {
    cardList = JSON.parse(json);
    console.log(cardList);
    loadList();
  }
});

btnClose.addEventListener("click", () => {
  cardForm.classList.add("card_form_hidden");
});

btnCreate.addEventListener("click", () => {
  cardForm.classList.remove("card_form_hidden");
});

btnDelete.addEventListener("click", () => {
  localStorage.clear();
  cardList = [];
  while (list.firstChild) {
    list.removeChild(list.firstChild);
  }
});

btnAdd.addEventListener("click", () => {
  if (question.value !== "" && answer.value !== "") {
    let obj = { question: question.value, answer: answer.value };
    console.log(obj);
    cardList.push(obj);

    localStorage.setItem("cards", JSON.stringify(cardList));
    console.log(localStorage.getItem("cards"));

    loadList();
  }
});

const loadList = () => {
  list.innerHTML = "";
  for (let i = 0; i < cardList.length; i++) {
    addCardToList(cardList[i].question,cardList[i].answer);
  } 
};

const addCardToList = (question, answer) => {
  let card = document.createElement("div");
  card.classList.add("card", "card_item");
  let cardQuestion = document.createElement("span");
  cardQuestion.classList.add("card__question");
  cardQuestion.innerHTML = question;
  let cardAnswer = document.createElement("span");
  cardAnswer.classList.add("card__answer", "card__answer_hidden");
  cardAnswer.innerHTML = answer;
  card.appendChild(cardQuestion);
  card.appendChild(cardAnswer);
  list.appendChild(card);

  card.addEventListener("click", () => {
    if (cardAnswer.classList.contains("card__answer_hidden")) {
      cardAnswer.classList.remove("card__answer_hidden");
    } else {
      cardAnswer.classList.add("card__answer_hidden");
    }
  });
};

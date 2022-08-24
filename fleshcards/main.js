const btnClose = document.querySelector("#closeButton");
const btnCreate = document.querySelector("#createButton");
const btnDelete = document.querySelector("#allDeleteButton");
const btnAdd = document.querySelector("#addButton");
const cardForm = document.querySelector(".card_form");

const question = document.getElementById("question");
const answer = document.getElementById("answer");

const list = document.querySelector(".ListOfCards");

btnClose.addEventListener("click", () => {
  cardForm.classList.add("card_form_hidden");
});

btnCreate.addEventListener("click", () => {
  cardForm.classList.remove("card_form_hidden");
});

btnDelete.addEventListener("click", () => {
  while (list.firstChild) {
    list.removeChild(list.firstChild);
  }
});

btnAdd.addEventListener("click", () => {
  if (question.value !== "" && answer.value !== "") {
    let card = document.createElement("div");
    card.classList.add("card", "card_item");
    let cardQuestion = document.createElement("span");
    cardQuestion.classList.add("card__question");
    cardQuestion.innerHTML = question.value;
    let cardAnswer = document.createElement("span");
    cardAnswer.classList.add("card__answer", "card__answer_hidden");
    cardAnswer.innerHTML = answer.value;
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
  }
});

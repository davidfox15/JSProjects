const canvas = document.querySelector(".canvas");
const answers = document.querySelectorAll(".answer__option");
const modes = document.querySelectorAll(".menu__mode");
let mode = "";

document.addEventListener("DOMContentLoaded", () => {
  generateExpression();
});

answers.forEach((element) => {
  element.addEventListener("click", () => handleClickChoice(element));
});

modes.forEach((element) => {
  element.addEventListener("click", () => handleClickMenu(element));
});

// Обработка нажатий на кнопки ответов
const handleClickChoice = (element) => {
  if (element.classList.contains("answer_option__true")) generateExpression();
};

// Обработка нажатий на пункты меню
const handleClickMenu = (element) => {
  for (let element of modes) {
    element.classList.remove("menu__mode_chosen");
  }
  element.classList.add("menu__mode_chosen");
  mode = element.id;
  generateExpression();
};

// Содздает выражение и выводит его на страницу вместе с вариантами ответов
const generateExpression = () => {
  let expression = "";
  switch (mode) {
    case "add":
      expression = genExpressionAdd();
      break;
    case "subtract":
      expression = genExpressionSubtract();
      break;
    case "multiply":
      expression = genExpressionMultiply();
      break;
    case "divide":
      expression = genExpressionDevide();
      break;
    default:
      expression = genExpressionAdd();
      break;
  }
  let array = сreateAnswerOptions(expression);
  updateExpression(array, expression);
};

// Диапазон для генерации похожих ложных чисел
const randomInt = (number) => {
  let min = number - 10;
  let max = number + 10;
  return Math.floor(Math.random() * (max - min + 1) + min);
};

// Генерирует варианты оветов
const сreateAnswerOptions = (expression) => {
  const answer = +eval(expression).toFixed(2);
  let array = [answer];
  while (array.length < 3) {
    let rnd = randomInt(answer);
    if (array.includes(rnd)) continue;
    array.push(rnd);
  }
  array.sort(() => Math.random() - 0.5);
  return array;
};

// Обновляет выражение и ответы на странице
const updateExpression = (array, expression) => {
  canvas.innerHTML = expression + " =";
  for (let i = 0; i < 3; i++) {
    answers[i].classList.remove("answer_option__true");
    answers[i].innerHTML = array[i];
    if (array[i] === +eval(expression).toFixed(2))
      answers[i].classList.add("answer_option__true");
  }
};

// Возвращает выражение сложения
const genExpressionAdd = () => {
  let expression =
    Math.floor(Math.random() * 11) + " + " + Math.floor(Math.random() * 11);
  return expression;
};

// Возвращает выражение вычитания
const genExpressionSubtract = () => {
  let expression =
    Math.floor(Math.random() * 11) + " - " + Math.floor(Math.random() * 11);
  return expression;
};

// Возвращает выражение умножения
const genExpressionMultiply = () => {
  let expression =
    Math.floor(Math.random() * 11) + " * " + Math.floor(Math.random() * 11);
  return expression;
};

// Возвращает выражение деления
const genExpressionDevide = () => {
  let expression =
    Math.floor(Math.random() * 100) +
    1 +
    " / " +
    (Math.floor(Math.random() * 10) + 1);
  return expression;
};

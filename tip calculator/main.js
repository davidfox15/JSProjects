const button = document.querySelector("#сount-button");
const quality = document.querySelector("#quality-select");
const money = document.querySelector("#money");
const persons = document.querySelector("#persons");

button.addEventListener("click", () => {
  let regex = /^(0|[1-9][0-9]+)$/;
  const moneyValid = new RegExp(regex).test(money.value);
  const personsValid = new RegExp(regex).test(persons.value);
  console.log("Money vlid is: " + moneyValid);
  console.log("Persons valid is: " + personsValid);
  if (moneyValid && personsValid) {
    console.log(money.value / persons.value);
    let span = document.querySelector(".result");
    if (document.querySelector(".result")) {
      span.innerHTML = money.value / persons.value;
      return;
    }
    span = document.createElement("span");
    span.classList.add("result");
    span.innerHTML = money.value / persons.value;
    document
      .querySelector(".calculator")
      .insertAdjacentElement("beforeend", span);
  } else {
    alert("Данные введены не корректно");
  }
});

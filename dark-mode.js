const themeTogglerButton = document.querySelector(".theme__toggler-button");
const body = document.body;

const moonIcon = document.querySelector(".fa-moon");
const sonIcon = document.querySelector(".fa-sun");

themeTogglerButton.addEventListener("click", switchTheme);

function switchTheme(e) {
  body.classList.add("light");
}

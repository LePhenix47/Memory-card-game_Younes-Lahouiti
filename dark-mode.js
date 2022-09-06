const themeTogglerButton = document.querySelector(".theme__toggler-label");
const body = document.body;

const moonIcon = document.querySelector(".fa-moon");
const sonIcon = document.querySelector(".fa-sun");

themeTogglerButton.addEventListener("click", switchTheme);

function switchTheme(e) {
  console.log(e.target);

  if (
    window.matchMedia("(prefers-color-scheme: dark)") &&
    window.matchMedia("(prefers-color-scheme: dark)").matches
  ) {
    console.log("Users uses dark mode");
  }
}

const themeTogglerButton = document.querySelector(".theme__toggler-label");
const body = document.body;

const moonIcon = document.querySelector(".fa-moon");
const sonIcon = document.querySelector(".fa-sun");

themeTogglerButton.addEventListener("click", switchTheme);

let checkedIfUserUsesDarkMode = 0;
function switchTheme(e) {
  console.log(e.target);

  if (
    window.matchMedia("(prefers-color-scheme: dark)") &&
    window.matchMedia("(prefers-color-scheme: dark)").matches &&
    checkedIfUserUsesDarkMode === 0
  ) {
    body.classList.add("light");
    checkedIfUserUsesDarkMode++;
  }

  if (body.classList.contains("light")) {
    body.classList.replace("light", "dark");
  } else if (body.classList.contains("dark")) {
    body.classList.replace("dark", "light");
  } else if (!body.classList.contains("light")) {
    body.classList.add("light");
  }

  console.log(body.classList.value);
}

const themeTogglerButton = document.querySelector(".theme__toggler-label");
const body = document.body;
const checkboxToggler = document.querySelector("#toggler");

themeTogglerButton.addEventListener("click", switchTheme);

let usesDarkMode = false;

function switchTheme(e) {
  if (body.classList.contains("dark-theme")) {
    body.classList.replace("dark-theme", "light-theme");
  } else {
    body.classList.replace("light-theme", "dark-theme");
  }

  console.log(body.classList);
}

function checkTheBoxIfDarkMode() {
  if (
    window.matchMedia("(prefers-color-scheme: dark)") &&
    window.matchMedia("(prefers-color-scheme: dark)").matches
  ) {
    console.log("Users uses dark mode");
    checkboxToggler.checked = true;
    usesDarkMode = true;
  }
  if (usesDarkMode) {
    body.classList.add("dark-theme");
  } else {
    body.classList.add("light-theme");
  }
}

checkTheBoxIfDarkMode();

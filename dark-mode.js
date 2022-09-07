const themeTogglerButton = document.querySelector(".theme__toggler-label");
const body = document.body;
const checkboxToggler = document.querySelector("#toggler");

const themeParagraph = document.querySelector(".theme__toggler span");

themeTogglerButton.addEventListener("click", switchTheme);

let usesDarkMode = false;

function switchTheme() {
  if (body.classList.contains("dark-theme")) {
    body.classList.replace("dark-theme", "light-theme");
    body.style.backgroundPosition = "0% 0%";
    themeParagraph.textContent = "Light";

    console.log("Switched to light theme");
  } else {
    body.classList.replace("light-theme", "dark-theme");
    body.style.backgroundPosition = "100% 0%";
    themeParagraph.textContent = "Dark";

    console.log("Switched to dark theme");
  }

  console.log(body.classList);
}

function checkTheBoxIfUsesDarkMode() {
  if (
    window.matchMedia("(prefers-color-scheme: dark)") &&
    window.matchMedia("(prefers-color-scheme: dark)").matches
  ) {
    console.log("Users uses dark mode on their device");
    checkboxToggler.checked = true;
    usesDarkMode = true;
  }
  if (usesDarkMode) {
    body.classList.add("dark-theme");
    themeParagraph.textContent = "Dark";
  } else {
    body.classList.add("light-theme");
    themeParagraph.textContent = "Light";
  }
}

checkTheBoxIfUsesDarkMode();

//  light-dark-mode-javascript

document.addEventListener("DOMContentLoaded", function () {
  const themeToggle = document.getElementById("theme-toggle");
  const body = document.body;

  const savedTheme = localStorage.getItem("theme");
  if (savedTheme) {
    body.classList.remove("light-mode", "dark-mode");
    body.classList.add(savedTheme);
    themeToggle.textContent =
      savedTheme === "light-mode" ? "dark_mode" : "light_mode";
  } else {
    if (body.classList.contains("light-mode")) {
      themeToggle.textContent = "dark_mode";
    } else {
      themeToggle.textContent = "light_mode";
    }
  }

  themeToggle.addEventListener("click", function () {
    const isLight = body.classList.contains("light-mode");
    body.classList.toggle("light-mode", !isLight);
    body.classList.toggle("dark-mode", isLight);

    localStorage.setItem("theme", isLight ? "dark-mode" : "light-mode");

    themeToggle.textContent = isLight ? "light_mode" : "dark_mode";
  });
});

//   tab-javascript

function showTab(tabId) {
  const savedTab = localStorage.getItem("activeTab") || tabId;

  if (!tabId) {
    tabId = savedTab;
  } else {
    localStorage.setItem("activeTab", tabId);
  }

  const tabContents = document.querySelectorAll(".tab-content");
  tabContents.forEach((content) => {
    content.classList.remove("active");
  });

  const tabs = document.querySelectorAll(".tab");
  tabs.forEach((tab) => {
    tab.classList.remove("active");
  });

  document.getElementById(tabId).classList.add("active");

  const clickedTab = document.querySelector(
    `.tab[onclick="showTab('${tabId}')"]`
  );
  clickedTab.classList.add("active");
}

document.addEventListener("DOMContentLoaded", function () {
  const savedTab = localStorage.getItem("activeTab") || "today";
  showTab(savedTab);
});

const matchContainer = document.getElementById("matchContainer");

// ==============================
// Dark / Light Mode Toggle
// ==============================

// Create toggle button dynamically
const toggleBtn = document.createElement("button");
toggleBtn.className = "theme-toggle";
toggleBtn.setAttribute("aria-label", "Toggle dark mode");
toggleBtn.innerHTML = "🌙";
document.body.appendChild(toggleBtn);

const root = document.documentElement;

// Load saved theme or system preference
const savedTheme = localStorage.getItem("theme");
const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;

if (savedTheme === "dark" || (!savedTheme && prefersDark)) {
  enableDarkMode();
} else {
  enableLightMode();
}

// Toggle on click
toggleBtn.addEventListener("click", () => {
  const isDark = root.classList.contains("dark");
  isDark ? enableLightMode() : enableDarkMode();
});

// ------------------------------
// Theme functions
// ------------------------------
function enableDarkMode() {
  root.classList.add("dark");
  localStorage.setItem("theme", "dark");
  toggleBtn.textContent = "☀️";
}

function enableLightMode() {
  root.classList.remove("dark");
  localStorage.setItem("theme", "light");
  toggleBtn.textContent = "🌙";
}

// ==============================
// LeetCode Solved Count
// ==============================

const leetcodeUser = "Devyansh-Joshi"; // CHANGE if username differs
const leetcodeCountEl = document.getElementById("leetcode-count");

fetch(`https://leetcode-stats-api.herokuapp.com/${leetcodeUser}`)
  .then((res) => res.json())
  .then((data) => {
    if (data.status === "success") {
      leetcodeCountEl.textContent = `${data.totalSolved} solved`;
    } else {
      leetcodeCountEl.textContent = "profile";
    }
  })
  .catch(() => {
    leetcodeCountEl.textContent = "profile";
  });

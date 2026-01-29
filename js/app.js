
import { initializeTheme } from './modules/theme.js';
import { initializeShare } from './modules/share.js';

document.addEventListener("DOMContentLoaded", () => {
    initializeTheme();
    initializeShare();
});
const toggleBtn = document.getElementById("productsToggle");
const productsSection = document.getElementById("productsSection");

if (toggleBtn) {
  toggleBtn.addEventListener("click", (e) => {
    e.preventDefault(); // wichtig bei <a>
    productsSection.classList.toggle("hidden");
    productsSection.scrollIntoView({ behavior: "smooth" });
  });
}

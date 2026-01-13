import themes from "./data.js";

const container = document.getElementById("themes");

function getTextColor(bgColor) {
  const r = parseInt(bgColor.substr(1, 2), 16);
  const g = parseInt(bgColor.substr(3, 2), 16);
  const b = parseInt(bgColor.substr(5, 2), 16);

  // công thức luminance
  const luminance = (0.299 * r + 0.587 * g + 0.114 * b) / 255;

  return luminance > 0.6 ? "#333" : "#fff";
}

themes.forEach(theme => {
  const card = document.createElement("div");
  card.className = "theme-card";
  card.style.background = theme.background;

  const titleColor = getTextColor(theme.background);

  card.innerHTML = `
    <div class="theme-title" style="color:${titleColor}">${theme.title}</div>
    <div class="colors">
      ${theme.colors.map(c =>
    `<div class="color color-copy" 
          style="background:${c}; color:${getTextColor(c)};" 
          data-color="${c}">
          ${c}
        </div>`
  ).join("")}
    </div>
    <div class="theme-title color-copy" 
      style="color:${titleColor}; margin-top: 35px;"
      data-color="${theme.background}">
        ${theme.background}
    </div>
  `;

  container.appendChild(card);
});

// copy color
document.addEventListener("click", e => {
  if (e.target.classList.contains("color-copy")) {
    const color = e.target.dataset.color;
    navigator.clipboard.writeText(color);
    showToast(`Copied ${color}`);
  }
});


const toast = document.getElementById("toast");

function showToast(message = "Copied!") {
  toast.textContent = message;
  toast.classList.add("show");

  setTimeout(() => {
    toast.classList.remove("show");
  }, 1200);
}

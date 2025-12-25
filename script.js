const themes = [
  {
    title: "TRANG SỨC",
    background: "#C09B81",
    colors: ["#5B3724", "#755543", "#ADA399", "#DBD5CB", "#FFF7ED"]
  },
  {
    title: "MỸ PHẨM",
    background: "#E6C7C2",
    colors: ["#6B3E3E", "#A26769", "#D4A5A5", "#F2D6D6", "#FFF5F5"]
  },
  {
    title: "NAIL",
    background: "#F4CED9",
    colors: ["#D8849A", "#3B3431", "#6F514A", "#DAB8AC", "#F2E7E3"]
  },
  {
    title: "COFFEE",
    background: "#F1DEBC",
    colors: ["#A45C23", "#4C2113", "#B38B60", "#DCB485", "#FFFFFF"]
  },
  {
    title: "TAROT",
    background: "#382C59",
    colors: ["#6C5E8C", "#CBB6DE", "#BCAAAF", "#496DA2", "#FFFFFF"]
  },
  {
    title: "NGÂN HÀNG",
    background: "#0F30A7",
    colors: ["#061755", "#295AB7", "#14FEC6", "#FEEB82", "#FFFFFF"]
  },
  {
    title: "GIẢI TRÍ",
    background: "#000000",
    colors: ["#C8C2E0", "#9594B4", "#334CA3", "#9F2C57", "#9456B7"]
  },
  {
    title: "THÚ CƯNG",
    background: "#0ABFAC",
    colors: ["#5F3523", "#CBAC94", "#F6C860", "#3E7494", "#FFFFFF"]
  },
  {
    title: "EAT CLEAN",
    background: "#9FBD48",
    colors: ["#74493D", "#D26426", "#3C603C", "#FFF7ED", "#FFFFFF"]
  },
  {
    title: "GYM",
    background: "#D91F28",
    colors: ["#000000", "#9D2628", "#917169", "#E3DEDC", "#FFFFFF"]
  },
  {
    title: "CÔNG NGHỆ",
    background: "#060D10",
    colors: ["#21A691", "#87DF2C", "#27403E", "#B4B4B2", "#FFFFFF"]
  },
  {
    title: "Y TẾ",
    background: "#0099CF",
    colors: ["#B8ACAA", "#101732", "#1040C5", "#0D74B1", "#FFFFFF"]
  },
  {
    title: "THỂ THAO",
    background: "#FFFFFF",
    colors: ["#DC3E37", "#F2965B", "#322A2A", "#AC9D9A", "#EFEBEA"]
  },
  {
    title: "",
    background: "",
    colors: []
  }
];

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
        `<div class="color" style="background:${c}" data-color="${c}"></div>`
      ).join("")}
    </div>
    <div class="theme-title" style="color:${titleColor}; margin-top: 35px;">${theme.background}</div>
  `;

  container.appendChild(card);
});

// copy color
document.addEventListener("click", e => {
  if (e.target.classList.contains("color")) {
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

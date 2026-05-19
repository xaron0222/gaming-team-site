const loading = document.getElementById("loading");
const siteContent = document.getElementById("site-content");
const progress = document.getElementById("loading-progress");
const percent = document.getElementById("loading-percent");
const loadingText = document.getElementById("loading-text");

let count = 0;
let dotCount = 0;

const dotInterval = setInterval(() => {
  dotCount = (dotCount + 1) % 4;
  loadingText.textContent = "LOADING" + ".".repeat(dotCount);
}, 450);

const loadingInterval = setInterval(() => {
  count++;

  progress.style.width = count + "%";
  percent.textContent = count + "%";

  if (count >= 100) {
    clearInterval(loadingInterval);
    clearInterval(dotInterval);

    loadingText.textContent = "LOADING...";

    setTimeout(() => {
      loading.classList.add("hide");
      siteContent.classList.add("show");
    }, 500);
  }
}, 25);

// スマホメニュー
const menuButton = document.getElementById("menu-button");
const globalNav = document.getElementById("global-nav");

menuButton.addEventListener("click", () => {
  globalNav.classList.toggle("active");
});

// メニューを押したらスマホメニューを閉じる
const navLinks = document.querySelectorAll(".global-nav a");

navLinks.forEach((link) => {
  link.addEventListener("click", () => {
    globalNav.classList.remove("active");
  });
});

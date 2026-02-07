const yesBtn = document.getElementById("yesBtn");
const noBtn = document.getElementById("noBtn");
const mainScreen = document.getElementById("mainScreen");
const yesScreen = document.getElementById("yesScreen");
const rain = document.getElementById("emojiRain");
const msg = document.getElementById("noMessage");
const music = document.getElementById("bgMusic");

/* ================= MUSIC (iphone safe) ================= */
document.body.addEventListener(
  "click",
  () => {
    music.play().catch(() => {});
  },
  { once: true },
);

/* ================= YES CLICK ================= */
yesBtn.addEventListener("click", () => {
  mainScreen.classList.remove("active");
  yesScreen.classList.add("active");

  confettiBurst();
});

/* ================= NO BUTTON ESCAPE (FIXED) ================= */
const texts = [
  "Hategyyyy ghasbbb",
  "Haraamm 3alekyyyyy",
  "Tab alafekra el markeb el tgeb tewady 😡",
  "LEH KDA DANA BAHEBEKKKK",
  "Daa zolmm dahhhh",
  "Ekthyarr khatee22",
];

function moveNo() {
  const x = Math.random() * (window.innerWidth - 120);
  const y = Math.random() * (window.innerHeight - 60);

  noBtn.style.position = "fixed";
  noBtn.style.left = x + "px";
  noBtn.style.top = y + "px";

  msg.innerText = texts[Math.floor(Math.random() * texts.length)];
  msg.style.opacity = 1;
  setTimeout(() => (msg.style.opacity = 0), 2200);

  burstHearts();
}

["mouseenter", "mousemove", "touchstart"].forEach((ev) => {
  noBtn.addEventListener(ev, moveNo);
});

/* ================= HEART RAIN ================= */
const emojis = ["❤️", "💘", "💖", "🌹"];
setInterval(() => {
  const e = document.createElement("div");
  e.className = "emoji";
  e.innerText = emojis[Math.floor(Math.random() * emojis.length)];
  e.style.left = Math.random() * 100 + "vw";
  e.style.fontSize = 18 + Math.random() * 18 + "px";
  e.style.animationDuration = 3 + Math.random() * 3 + "s";
  rain.appendChild(e);
  setTimeout(() => e.remove(), 6000);
}, 300);

/* ================= BURSTS ================= */
function burstHearts() {
  for (let i = 0; i < 20; i++) {
    const h = document.createElement("div");
    h.className = "emoji";
    h.innerText = "💖";
    h.style.left = Math.random() * 100 + "vw";
    h.style.fontSize = "22px";
    h.style.animationDuration = "2s";
    rain.appendChild(h);
    setTimeout(() => h.remove(), 2000);
  }
}

function confettiBurst() {
  const conf = ["❤️", "💘", "💝", "🌹", "✨"];
  for (let i = 0; i < 80; i++) {
    const c = document.createElement("div");
    c.className = "emoji";
    c.innerText = conf[Math.floor(Math.random() * conf.length)];
    c.style.left = Math.random() * 100 + "vw";
    c.style.animationDuration = 2 + Math.random() * 2 + "s";
    rain.appendChild(c);
    setTimeout(() => c.remove(), 4000);
  }
}

/* ================= COUNTDOWN ================= */
const date = new Date("Feb 12 2026 19:30:00");

setInterval(() => {
  const diff = date - new Date();
  const d = Math.floor(diff / 86400000);
  const h = Math.floor(diff / 3600000) % 24;
  const m = Math.floor(diff / 60000) % 60;

  document.getElementById("countdown").innerText = `⏳ ${d}d ${h}h ${m}m left`;
}, 1000);

/* ================= SLIDESHOW ================= */
const photos = ["photo1.jpg", "photo2.jpg", "photo3.jpg"];
let idx = 0;

setInterval(() => {
  idx = (idx + 1) % photos.length;
  document.getElementById("slideImg").src = photos[idx];
}, 2500);

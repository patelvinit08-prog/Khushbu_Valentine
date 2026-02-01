const yesBtn = document.getElementById("yesBtn");
const noBtn = document.getElementById("noBtn");
const message = document.getElementById("message");

yesBtn.onclick = () => {
  message.textContent = "Yay! 💕 I’m so happy! ❤️";
};

noBtn.onclick = () => {
  message.textContent = "Oh no 😢… maybe next time!";
};

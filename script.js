// Floating hearts with gentle drift
function createHeart() {
    const heart = document.createElement('div');
    heart.className = 'heart';
    heart.textContent = '❤️';

    let startX = Math.random() * window.innerWidth;
    heart.style.left = startX + 'px';
    heart.style.fontSize = 20 + Math.random() * 15 + 'px';

    let duration = 6 + Math.random() * 3; // 6-9s
    document.querySelector('.hearts-container').appendChild(heart);

    // Animate hearts with horizontal drift
    let drift = (Math.random() - 0.5) * 100; // -50 to +50px
    heart.animate([
        { transform: `translate(0px, 0px)` },
        { transform: `translate(${drift}px, -110vh)` }
    ], {
        duration: duration * 1000,
        easing: 'linear',
        fill: 'forwards'
    });

    setTimeout(() => heart.remove(), duration * 1000);
}

// Spawn hearts
setInterval(createHeart, 1000);

// "No" button messages
const messages = [
    "Are you sure?",
    "Really sure??",
    "Are you positive?",
    "Pookie please...",
    "Just think about it!",
    "If you say no, I will be really sad...",
    "I will be very sad...",
    "I will be very very very sad...",
    "Ok fine, I will stop asking...",
    "Just kidding, say yes please! ❤️"
];

let messageIndex = 0;

function handleNoClick() {
    const noButton = document.querySelector('.no-button');
    const yesButton = document.querySelector('.yes-button');
    noButton.textContent = messages[messageIndex];
    messageIndex = (messageIndex + 1) % messages.length;
    const currentSize = parseFloat(window.getComputedStyle(yesButton).fontSize);
    yesButton.style.fontSize = `${currentSize * 1.2}px`;
}

// "Yes" button
function handleYesClick() {
    window.location.href = "yes_page.html";
}

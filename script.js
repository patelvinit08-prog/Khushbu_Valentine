// Floating hearts across screen
function createHeart() {
    const heart = document.createElement('div');
    heart.className = 'heart';
    heart.textContent = '❤️';

    heart.style.left = Math.random() * window.innerWidth + 'px';
    heart.style.top = (window.innerHeight + 50) + 'px';
    heart.style.fontSize = 20 + Math.random() * 15 + 'px';
    document.querySelector('.hearts-container')?.appendChild(heart);

    const drift = (Math.random() - 0.5) * 200;
    heart.animate([
        { transform: 'translate(0,0)', opacity: 1 },
        { transform: `translate(${drift}px, -${window.innerHeight + 100}px)`, opacity: 0 }
    ], { duration: 8000 + Math.random() * 4000, easing: 'linear', fill: 'forwards' });

    setTimeout(() => heart.remove(), 12000);
}

setInterval(createHeart, 500);

// "No" button prank messages
const messages = [
    "Are you sure?", "Really sure??", "Are you positive?", "Pookie please...",
    "Just think about it!", "If you say no, I will be really sad...",
    "I will be very sad...", "I will be very very very sad...",
    "Ok fine, I will stop asking...", "Just kidding, say yes please! ❤️"
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

function handleYesClick() {
    window.location.href = "yes_page.html";
}

// Click-to-pop hearts on yes page
document.addEventListener('click', function(e) {
    const heart = document.createElement('div');
    heart.className = 'heart';
    heart.textContent = '💖';
    heart.style.left = e.clientX + 'px';
    heart.style.top = e.clientY + 'px';
    heart.style.fontSize = '30px';
    document.body.appendChild(heart);

    heart.animate([
        { transform: 'translateY(0) scale(1)', opacity: 1 },
        { transform: 'translateY(-100px) scale(1.5)', opacity: 0 }
    ], { duration: 1000, easing: 'ease-out', fill: 'forwards' });

    setTimeout(() => heart.remove(), 1000);
});

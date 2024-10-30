


const text = `
Happy Birthday, Sadaf! 🎂✨
On this special day, I want to remind you how talented 
and wonderful you are. Your words weave magic, and I 
feel so grateful to have you in my life. May your journey 
ahead be filled with stories as colorful as your dreams. 💖
`;

// Typing effect
function startTyping() {
  const typedText = document.getElementById('typedText');
  const typingSound = document.getElementById('typingSound');
  let index = 0;

  typingSound.play();  // Start typing sound

  function typeLetter() {
    if (index < text.length) {
      typedText.innerHTML += text.charAt(index);
      index++;
      setTimeout(typeLetter, 50);  // Adjust typing speed
    } else {
      typingSound.pause();  // Stop sound when text completes
      document.getElementById('surprise').classList.remove('hidden');
    }
  }

  typeLetter();
}

// Confetti Celebration
function startCelebration() {
  const canvas = document.getElementById('confetti');
  const ctx = canvas.getContext('2d');

  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;

  const confettiPieces = Array.from({ length: 200 }).map(() => ({
    x: Math.random() * canvas.width,
    y: Math.random() * canvas.height,
    color: `hsl(${Math.random() * 360}, 100%, 70%)`,
    size: Math.random() * 10 + 5,
    speed: Math.random() * 4 + 1,
  }));

  function drawConfetti() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    confettiPieces.forEach((piece) => {
      ctx.fillStyle = piece.color;
      ctx.fillRect(piece.x, piece.y, piece.size, piece.size);
      piece.y += piece.speed;
      if (piece.y > canvas.height) piece.y = 0;  // Loop back to top
    });
    requestAnimationFrame(drawConfetti);
  }

  drawConfetti();
}

function showMemories() {
    document.getElementById('welcome-screen').classList.remove('active');
    document.getElementById('memories-screen').classList.add('active');
}

function showWelcome() {
    document.getElementById('memories-screen').classList.remove('active');
    document.getElementById('welcome-screen').classList.add('active');
}

// Efectos adicionales para hacerlo más especial
document.addEventListener('DOMContentLoaded', function() {
    // Agregar confeti al hacer clic
    document.body.addEventListener('click', function(e) {
        createConfetti(e.clientX, e.clientY);
    });
    
    // Reproducir sonido de corazón (opcional)
    const heartSound = new Audio('data:audio/wav;base64,UklGRigAAABXQVZFZm10IBAAAAABAAEARKwAAIhYAQACABAAZGF0YQQAAAAAAA==');
});

function createConfetti(x, y) {
    for (let i = 0; i < 10; i++) {
        const confetti = document.createElement('div');
        confetti.innerHTML = ['❤️', '💖', '✨', '🌟', '💫'][Math.floor(Math.random() * 5)];
        confetti.style.position = 'fixed';
        confetti.style.left = x + 'px';
        confetti.style.top = y + 'px';
        confetti.style.fontSize = '20px';
        confetti.style.pointerEvents = 'none';
        confetti.style.zIndex = '1000';
        confetti.style.animation = `confettiFall ${Math.random() * 2 + 1}s ease-in forwards`;
        
        document.body.appendChild(confetti);
        
        setTimeout(() => {
            confetti.remove();
        }, 2000);
    }
}

// Agregar estilo para el confeti
const style = document.createElement('style');
style.textContent = `
    @keyframes confettiFall {
        0% {
            transform: translate(0, 0) rotate(0deg);
            opacity: 1;
        }
        100% {
            transform: translate(${Math.random() * 200 - 100}px, 200px) rotate(360deg);
            opacity: 0;
        }
    }
`;
document.head.appendChild(style);

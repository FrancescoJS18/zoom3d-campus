// ===== CANVAS DE PARTÍCULAS DEL FONDO =====
const canvas = document.getElementById("heroCanvas");
const ctx = canvas.getContext("2d");

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

let particles = [];

class Particle {
    constructor() {
        this.x = Math.random() * canvas.width;
        this.y = Math.random() * canvas.height;
        this.size = Math.random() * 3 + 1;
        this.speedX = (Math.random() - 0.5) * 0.4;
        this.speedY = (Math.random() - 0.5) * 0.4;
        this.alpha = Math.random() * 0.8 + 0.2;
    }

    update() {
        this.x += this.speedX;
        this.y += this.speedY;

        // Reaparece cuando sale de la pantalla
        if (this.x < 0 || this.x > canvas.width ||
            this.y < 0 || this.y > canvas.height) {
            this.x = Math.random() * canvas.width;
            this.y = Math.random() * canvas.height;
        }
    }

    draw() {
        ctx.fillStyle = `rgba(255, 0, 200, ${this.alpha})`;
        ctx.shadowBlur = 15;
        ctx.shadowColor = "#ff00cc";
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
        ctx.fill();
    }
}

function initParticles() {
    particles = [];
    for (let i = 0; i < 120; i++) {
        particles.push(new Particle());
    }
}

function animate() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    particles.forEach(p => {
        p.update();
        p.draw();
    });

    requestAnimationFrame(animate);
}

initParticles();
animate();

// Ajustar al cambiar tamaño pantalla
window.addEventListener("resize", () => {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    initParticles();
});

const btn = document.getElementById('goButton');

btn.addEventListener('click', (e) => {
    e.preventDefault();
    document.body.classList.add('fade-out');
    setTimeout(() => {
        window.location.href = '/otra-pagina.html';
    }, 400);
});



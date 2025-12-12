// Snowfall effect
const canvas = document.getElementById('snowfall');
const ctx = canvas.getContext('2d');

function resizeCanvas() {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
}

resizeCanvas();
window.addEventListener('resize', resizeCanvas);

class Snowflake {
    constructor() {
        this.reset();
        this.y = Math.random() * canvas.height;
    }

    reset() {
        this.x = Math.random() * canvas.width;
        this.y = -10;
        this.size = Math.random() * 4 + 2.5;
        this.speed = Math.random() * 0.5 + 0.3;
        this.drift = Math.random() * 0.5 - 0.25;
        this.opacity = Math.random() * 0.2 + 0.7;
        
        const colors = ['#FFFFFF', '#E0E0E0', '#D8D8D8', '#C0C0C0'];
        this.color = colors[Math.floor(Math.random() * colors.length)];
    }

    update() {
        this.y += this.speed;
        this.x += this.drift;
        
        if (this.y > canvas.height) {
            this.reset();
        }
        
        if (this.x > canvas.width) {
            this.x = 0;
        } else if (this.x < 0) {
            this.x = canvas.width;
        }
    }

    draw() {
        ctx.globalAlpha = this.opacity;
        ctx.fillStyle = this.color;
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
        ctx.fill();
        ctx.globalAlpha = 1;
    }
}

const snowflakes = [];
const snowflakeCount = 60;

for (let i = 0; i < snowflakeCount; i++) {
    snowflakes.push(new Snowflake());
}

function animate() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    
    snowflakes.forEach(snowflake => {
        snowflake.update();
        snowflake.draw();
    });
    
    requestAnimationFrame(animate);
}

animate();

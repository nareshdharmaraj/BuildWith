document.addEventListener("DOMContentLoaded", function () {
    const canvas = document.createElement("canvas");
    canvas.id = "particles-canvas";
    document.body.prepend(canvas);

    const ctx = canvas.getContext("2d");
    let width, height;
    let particles = [];

    // Configuration
    const properties = {
        bgColor: 'rgba(15, 23, 42, 1)', // Matches --background-dark
        particleColor: 'rgba(245, 158, 11, 0.5)', // Matches --primary-color (Amber)
        particleRadius: 3,
        particleCount: 60,
        lineLength: 150,
        lineColor: 'rgba(100, 116, 139, 0.2)' // Matches --accent-color
    };

    function resize() {
        width = canvas.width = window.innerWidth;
        height = canvas.height = window.innerHeight;
    }

    class Particle {
        constructor() {
            this.x = Math.random() * width;
            this.y = Math.random() * height;
            this.velocityX = Math.random() * (Math.random() < 0.5 ? -1 : 1) * 0.5;
            this.velocityY = Math.random() * (Math.random() < 0.5 ? -1 : 1) * 0.5;
            this.size = Math.random() * 2 + 1;
        }

        update() {
            this.x += this.velocityX;
            this.y += this.velocityY;

            // Bounce off edges
            if (this.x > width || this.x < 0) this.velocityX *= -1;
            if (this.y > height || this.y < 0) this.velocityY *= -1;
        }

        draw() {
            ctx.beginPath();
            ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
            ctx.closePath();
            ctx.fillStyle = properties.particleColor;
            ctx.fill();
        }
    }

    function init() {
        resize();
        particles = [];
        for (let i = 0; i < properties.particleCount; i++) {
            particles.push(new Particle());
        }
    }

    function animate() {
        ctx.clearRect(0, 0, width, height);

        // Draw Particles and Lines
        for (let i = 0; i < particles.length; i++) {
            particles[i].update();
            particles[i].draw();

            // Draw Lines
            for (let j = i; j < particles.length; j++) {
                let distance = Math.sqrt((particles[i].x - particles[j].x) ** 2 + (particles[i].y - particles[j].y) ** 2);
                if (distance < properties.lineLength) {
                    ctx.beginPath();
                    ctx.strokeStyle = properties.lineColor;
                    ctx.lineWidth = 1;
                    ctx.moveTo(particles[i].x, particles[i].y);
                    ctx.lineTo(particles[j].x, particles[j].y);
                    ctx.stroke();
                    ctx.closePath();
                }
            }
        }
        requestAnimationFrame(animate);
    }

    window.addEventListener("resize", () => {
        resize();
        init();
    });

    init();
    animate();
});

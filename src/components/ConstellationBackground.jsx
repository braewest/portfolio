import { useEffect, useRef } from 'react';

export default function ConstellationBackground() {
    const canvasRef = useRef(null);

    useEffect(() => {
        const canvas = canvasRef.current;
        const ctx = canvas.getContext('2d');

        let width = window.innerWidth;
        let height = window.innerHeight;

        // Canvas variables
        const BACKGROUND_COLOR = '#0d0d0d';
        const MOUSE_CONNECTING_INFLUENCE = 300;
        const MOUSE_DETECTION_RADIUS = 900;
        const CONNECTING_DISTANCE = 80;
        const dots = [];

        // Dot variables
        const DOT_SPEED_MULTIPLIER = 0.4;

        let DOT_COUNT = 120;
        function setDotAmount() {
            const area = width * height;
            DOT_COUNT = Math.floor(area / 4000);
        }

        function resize() {
            width = canvas.width = window.innerWidth;
            height = canvas.height = window.innerHeight;
            setDotAmount();
            initializeDots();
        }

        window.addEventListener('resize', resize);

        // Track mouse position
        const mouse = { x: width / 2, y: height / 2 }
        function handleMouse(e) {
            mouse.x = e.clientX;
            mouse.y = e.clientY;
        }
        window.addEventListener('mousemove', handleMouse);

        // Dot class
        class Dot {
            constructor() {
                // Random position and velocity
                this.color = 'rgba(255,255,255,1)';
                this.x = Math.random() * width;
                this.y = Math.random() * height;
                this.vx = (Math.random() - 0.5) * DOT_SPEED_MULTIPLIER;
                this.vy = (Math.random() - 0.5) * DOT_SPEED_MULTIPLIER;
                this.radius = Math.random() * 1.5;
            }

            update() {
                // Move dot
                this.x += this.vx;
                this.y += this.vy;

                // Invert direction if past border
                if (this.x < 0) this.vx = Math.abs(this.vx);
                if (this.x > width) this.vx = -Math.abs(this.vx);
                if (this.y < 0) this.vy = Math.abs(this.vy);
                if (this.y > height) this.vy = -Math.abs(this.vy);

                // Update color
                const mdx = this.x - mouse.x;
                const mdy = this.y - mouse.y;
                const md = Math.sqrt(mdx * mdx + mdy * mdy);
                this.color = `rgba(255,255,255,${1 - md / MOUSE_DETECTION_RADIUS})`;
            }

            draw() {
                ctx.fillStyle = this.color;
                ctx.beginPath();
                ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2);
                ctx.fill();
            }
        }

        function initializeDots() {
            dots.length = 0;
            for (let i = 0; i < DOT_COUNT; i++) dots.push(new Dot());;
        }

        function connectDots() {
            for (let i = 0; i < dots.length; i++) {
                for (let j = i + 1; j < dots.length; j++) {
                    const mdx = dots[i].x - mouse.x;
                    const mdy = dots[i].y - mouse.y;
                    const md = Math.sqrt(mdx * mdx + mdy * mdy);
                    // If the dot is in mouse influence range, connect
                    if (md < MOUSE_CONNECTING_INFLUENCE) {
                        const dx = dots[i].x - dots[j].x;
                        const dy = dots[i].y - dots[j].y;
                        const d = Math.sqrt(dx * dx + dy * dy);
                        if (d < CONNECTING_DISTANCE) {
                            ctx.strokeStyle = `rgba(200,200,200,${1 - md / MOUSE_CONNECTING_INFLUENCE})`;
                            ctx.beginPath();
                            ctx.moveTo(dots[i].x, dots[i].y);
                            ctx.lineTo(dots[j].x, dots[j].y);
                            ctx.stroke();
                        }
                    }
                }
            }

            // Draw lines from mouse to nearby dots
            for (let i = 0; i < dots.length; i++) {
                const dx = dots[i].x - mouse.x;
                const dy = dots[i].y - mouse.y;
                const d = Math.sqrt(dx * dx + dy * dy);
                if (d < CONNECTING_DISTANCE) {
                    ctx.strokeStyle = `rgba(200,200,200,${1 - d / MOUSE_CONNECTING_INFLUENCE})`;
                    ctx.beginPath();
                    ctx.moveTo(dots[i].x, dots[i].y);
                    ctx.lineTo(mouse.x, mouse.y);
                    ctx.stroke();
                }
            }
        }

        function animate() {
            ctx.clearRect(0, 0, width, height);
            ctx.fillStyle = BACKGROUND_COLOR;
            ctx.fillRect(0, 0, width, height);
            dots.forEach(dot => {
                dot.update();
                dot.draw();
            });
            connectDots();
            requestAnimationFrame(animate);
        }

        resize();
        animate();

        return () => {
            window.removeEventListener('resize', resize);
            window.removeEventListener('mousemove', handleMouse);
        };
    }, []);

    return <canvas ref={canvasRef} className="bg-canvas" />;
}
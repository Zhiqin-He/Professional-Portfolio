import React from "react";
import classes from "./FlockCanvas.css";
import {useRef, useEffect} from 'react';
import {useSelector} from "react-redux";

const FlockCanvas = () => {
    const theme = useSelector(state => state.theme);
    const canvasRef = useRef(null);
    const mouse = useRef({x: null, y: null});
    useEffect(() => {
        const canvas = canvasRef.current;
        const ctx = canvas.getContext('2d');

        const resize = () => {
            canvas.width = window.innerWidth;
            canvas.height = window.innerHeight;

            ctx.fillStyle = theme.backgroundColor;
            ctx.fillRect(0, 0, canvas.width, canvas.height);
        };
        resize();

        const handleMouseMove = (e) => {
            mouse.current.x = e.clientX;
            mouse.current.y = e.clientY;
        };

        window.addEventListener('resize', resize);
        window.addEventListener('mousemove', handleMouseMove);

        class Boid {
            constructor() {
                this.position = {
                    x: Math.random() * canvas.width,
                    y: Math.random() * canvas.height,
                };
                this.velocity = {
                    x: Math.random() * 2 - 1,
                    y: Math.random() * 2 - 1,
                };
                this.acceleration = {x: 0, y: 0};
                this.maxSpeed = 2;
                this.maxForce = 0.05;
            }

            edges() {
                if (this.position.x > canvas.width) this.position.x = 0;
                if (this.position.x < 0) this.position.x = canvas.width;
                if (this.position.y > canvas.height) this.position.y = 0;
                if (this.position.y < 0) this.position.y = canvas.height;
            }

            processSteering(steering) {
                normalize(steering);
                steering.x *= this.maxSpeed;
                steering.y *= this.maxSpeed;
                steering.x -= this.velocity.x;
                steering.y -= this.velocity.y;
                limit(steering, this.maxForce);
                return steering
            }

            align(boids) {
                let perception = 40;
                let steering = {x: 0, y: 0};
                let total = 0;
                for (let other of boids) {
                    let d = distance(this.position, other.position);
                    if (other !== this && d < perception) {
                        steering.x += other.velocity.x;
                        steering.y += other.velocity.y;
                        total++;
                    }
                }
                if (total > 0) {
                    steering.x /= total;
                    steering.y /= total;
                    steering = this.processSteering(steering)
                }
                return steering;
            }

            cohesion(boids) {
                let perception = 50;
                let steering = {x: 0, y: 0};
                let total = 0;
                for (let other of boids) {
                    let d = distance(this.position, other.position);
                    if (other !== this && d < perception) {
                        steering.x += other.position.x;
                        steering.y += other.position.y;
                        total++;
                    }
                }
                if (total > 0) {
                    steering.x /= total;
                    steering.y /= total;
                    steering.x -= this.position.x;
                    steering.y -= this.position.y;
                    steering = this.processSteering(steering)
                }
                return steering;
            }

            separation(boids) {
                let perception = 30;
                let steering = {x: 0, y: 0};
                let total = 0;
                for (let other of boids) {
                    let d = distance(this.position, other.position);
                    if (other !== this && d < perception) {
                        let diff = {
                            x: this.position.x - other.position.x,
                            y: this.position.y - other.position.y,
                        };
                        let mag = d * d;
                        steering.x += diff.x / mag;
                        steering.y += diff.y / mag;
                        total++;
                    }
                }
                if (total > 0) {
                    steering.x /= total;
                    steering.y /= total;
                    steering = this.processSteering(steering)
                }
                return steering;
            }

            avoidMouse() {
                const m = mouse.current;
                if (!m.x || !m.y) return {x: 0, y: 0};
                let d = distance(this.position, m);
                if (d < 100) {
                    let flee = {
                        x: this.position.x - m.x,
                        y: this.position.y - m.y,
                    };
                    normalize(flee);
                    flee.x *= this.maxSpeed;
                    flee.y *= this.maxSpeed;
                    flee.x -= this.velocity.x;
                    flee.y -= this.velocity.y;
                    limit(flee, this.maxForce * 3);
                    return flee;
                }
                return {x: 0, y: 0};
            }

            flock(boids) {
                const alignment = this.align(boids);
                const cohesion = this.cohesion(boids);
                const separation = this.separation(boids);
                const avoid = this.avoidMouse();

                this.acceleration.x = alignment.x + cohesion.x + separation.x * 1.25 + avoid.x;
                this.acceleration.y = alignment.y + cohesion.y + separation.y * 1.25 + avoid.y;
            }

            update() {
                this.position.x += this.velocity.x;
                this.position.y += this.velocity.y;
                this.velocity.x += this.acceleration.x;
                this.velocity.y += this.acceleration.y;
                limit(this.velocity, this.maxSpeed);
                this.acceleration.x = 0;
                this.acceleration.y = 0;
            }

            draw(ctx) {
                ctx.beginPath();
                ctx.fillStyle = theme.boidColor;
                ctx.arc(this.position.x, this.position.y, 3, 0, Math.PI * 2);
                ctx.fill();
            }

        }

        const distance = (a, b) => Math.sqrt((a.x - b.x) ** 2 + (a.y - b.y) ** 2);
        const normalize = (v) => {
            const mag = Math.sqrt(v.x ** 2 + v.y ** 2);
            if (mag > 0) {
                v.x /= mag;
                v.y /= mag;
            }
        };
        const limit = (v, max) => {
            const mag = Math.sqrt(v.x ** 2 + v.y ** 2);
            if (mag > max) {
                v.x = (v.x / mag) * max;
                v.y = (v.y / mag) * max;
            }
        };

        const boids = Array.from({length: 100}, () => new Boid());

        const animate = () => {
            ctx.fillStyle = theme.backgroundColorCanvasAnimate;
            ctx.fillRect(0, 0, canvas.width, canvas.height);

            for (let boid of boids) {
                boid.edges();
                boid.flock(boids);
                boid.update();
                boid.draw(ctx);
            }

            requestAnimationFrame(animate);
        };
        animate();

        return () => {
            window.removeEventListener('mousemove', handleMouseMove);
            window.removeEventListener('resize', handleMouseMove);
        };
    }, [theme]);

    return <canvas ref={canvasRef} style={{position: 'fixed', zIndex: -100}} className={classes.flockCanvas}/>;
};

export default FlockCanvas;


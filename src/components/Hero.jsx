import React from "react";
import './Hero.css';

export default function Hero() {
  return (
    <section className="hero">
      <div className="hero-content">
        <h1>Hi, I'm Shivraj 👋</h1>
        <p>I design and develop modern web experiences using React.</p>
        <a href="#contact"><button className="hero-btn">Hire Me</button></a>
      </div>
    </section>
  );
}


import React from "react";

export default function About() {
  return (
    <section
      id="about"
      className="max-w-4xl mx-auto px-6 py-16 bg-white rounded-lg shadow-md mt-12"
    >
      <h2 className="text-4xl font-bold text-indigo-600 mb-6">About Me</h2>
      <p className="text-gray-700 text-lg leading-relaxed mb-4">
        Hi! I'm Shivraj, a passionate web developer specializing in modern web
        technologies like React, Node.js, and MongoDB. I love creating sleek,
        user-friendly websites and web applications that provide great user
        experiences.
      </p>
      <p className="text-gray-600 text-base leading-relaxed">
        With a strong foundation in JavaScript and a knack for problem-solving,
        I aim to build efficient and scalable solutions that make a real impact.
        When I'm not coding, I enjoy exploring new tech trends and contributing
        to open source projects.
      </p>
    </section>
  );
}


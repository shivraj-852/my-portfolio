import React from "react";

export default function DairyProject() {
  return (
    <section
      id="projects"
      className="max-w-7xl mx-auto px-6 py-16 bg-indigo-50 rounded-lg mt-12 shadow-lg"
    >
      <h2 className="text-4xl font-extrabold text-indigo-700 mb-8 text-center">
        Featured Project: Dairy Product Shell
      </h2>

      <div className="flex flex-col md:flex-row gap-8 items-center justify-center">
        {/* Image */}
        <img
          src="https://images.unsplash.com/photo-1582719478250-8f01f9fefb8e?auto=format&fit=crop&w=600&q=80"
          alt="Dairy Product Shell"
          className="w-full md:w-1/2 rounded-lg shadow-md object-cover"
        />

        {/* Project Info */}
        <div className="w-full md:w-1/2 bg-white rounded-lg p-6 shadow-md">
          <h3 className="text-2xl font-bold text-indigo-600 mb-4">
            Dairy Product Shell
          </h3>
          <p className="text-gray-700 mb-6">
            A modern web app designed to help dairy businesses manage their
            product inventory, sales, and deliveries efficiently. Built with
            React, Node.js, and MongoDB, featuring a clean UI and real-time
            updates.
          </p>
          <a
            href="https://github.com/yourusername/dairy-product-shell"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-indigo-600 text-white px-5 py-2 rounded-md hover:bg-indigo-700 transition-colors duration-300"
          >
            View on GitHub
          </a>
        </div>
      </div>
    </section>
  );
}


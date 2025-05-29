import React from "react";

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-6 mt-16">
      <div className="max-w-6xl mx-auto px-4 flex flex-col md:flex-row justify-between items-center">
        <p className="text-sm mb-2 md:mb-0">
          &copy; {new Date().getFullYear()} Shivraj. All rights reserved.
        </p>
        <div className="flex gap-4">
          <a
            href="https://github.com/your-username"
            className="hover:text-indigo-400 transition-colors duration-300"
            target="_blank"
            rel="noopener noreferrer"
          >
            GitHub
          </a>
          <a
            href="https://linkedin.com/in/your-username"
            className="hover:text-indigo-400 transition-colors duration-300"
            target="_blank"
            rel="noopener noreferrer"
          >
            LinkedIn
          </a>
          <a
            href="mailto:shivgurjar949@email.com"
            className="hover:text-indigo-400 transition-colors duration-300"
          >
            Email
          </a>
        </div>
      </div>
    </footer>
  );
}


import React, { useState } from "react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="w-full bg-white shadow-lg sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
        <h1 className="text-3xl font-extrabold text-indigo-600 cursor-pointer">
          My Portfolio
        </h1>

        {/* Desktop Menu */}
        <ul className="hidden md:flex gap-10 text-gray-700 font-medium">
          <li>
            <a
              href="#about"
              className="hover:text-indigo-600 transition-colors duration-300"
            >
              About
            </a>
          </li>
          <li>
            <a
              href="#skills"
              className="hover:text-indigo-600 transition-colors duration-300"
            >
              Skills
            </a>
          </li>
          <li>
            <a
              href="#projects"
              className="hover:text-indigo-600 transition-colors duration-300"
            >
              Projects
            </a>
          </li>
          <li>
            <a
              href="#contact"
              className="hover:text-indigo-600 transition-colors duration-300"
            >
              Contact
            </a>
          </li>
        </ul>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden focus:outline-none"
          aria-label="Toggle menu"
        >
          <svg
            className="w-8 h-8 text-indigo-600"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            {isOpen ? (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            ) : (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            )}
          </svg>
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <ul className="md:hidden bg-white shadow-lg flex flex-col gap-4 px-6 pb-6">
          <li>
            <a
              href="#about"
              className="block text-gray-700 font-medium hover:text-indigo-600 transition-colors duration-300"
              onClick={() => setIsOpen(false)}
            >
              About
            </a>
          </li>
          <li>
            <a
              href="#skills"
              className="block text-gray-700 font-medium hover:text-indigo-600 transition-colors duration-300"
              onClick={() => setIsOpen(false)}
            >
              Skills
            </a>
          </li>
          <li>
            <a
              href="#projects"
              className="block text-gray-700 font-medium hover:text-indigo-600 transition-colors duration-300"
              onClick={() => setIsOpen(false)}
            >
              Projects
            </a>
          </li>
          <li>
            <a
              href="#contact"
              className="block text-gray-700 font-medium hover:text-indigo-600 transition-colors duration-300"
              onClick={() => setIsOpen(false)}
            >
              Contact
            </a>
          </li>
        </ul>
      )}
    </nav>
  );
}


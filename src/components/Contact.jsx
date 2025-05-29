import React from "react";

export default function Contact() {
  return (
    <section
      id="contact"
      className="p-8 m-5 bg-gray-50 rounded-lg max-w-lg mx-auto shadow-lg mb-20"
    >

      <h2 className="text-3xl font-extrabold mb-6 text-indigo-600 text-center">
        Contact Me
      </h2>
      <form
        action="https://formsubmit.co/el/kasega"
        method="POST"
        className="flex flex-col gap-4 max-w-md"
      >
        <input type="hidden" name="_captcha" value="false" />
        <input type="hidden" name="_template" value="table" />
        <input type="hidden" name="_next" value="https://yourportfolio.com/thank-you" />

        <input type="text" name="name" placeholder="Your Name" className="border p-2 rounded" required />
        <input type="email" name="email" placeholder="Your Email" className="border p-2 rounded" required />
        <textarea name="message" placeholder="Your Message" className="border p-2 rounded" rows="4" required></textarea>
        <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded">Send</button>
      </form>


    </section>
  );
}


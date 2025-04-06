"use client";

import { useState } from "react";
import Swal from "sweetalert2";



const ContactPage = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const response = await fetch("/api", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    });

    if (response.ok) {
      Swal.fire({
        title: "Email Sent!",
        text: "I'll get back to you as soon as possible.",
        icon: "success",
      });
      const groups = document.querySelectorAll(".form-group");
      groups.forEach((group) => {
        const input = group.querySelector("input") as HTMLInputElement;
        const textarea = group.querySelector("textarea") as HTMLTextAreaElement;
        if (input) input.value = "";
        if (textarea) textarea.value = "";
      });
    } else {
      Swal.fire({
        title: "Error",
        text: "Email failed to send. Please try again later.",
        icon: "error",
      });
    }
  };

  return (
    <main>
      <head><title>Lim Lim Cubes | Contact Me</title>
  <meta name="description" content="For any inquires or concerns contact me here!" />
  <meta name="keywords" content="limcubes, speedcubing, Rubik's Cube, puzzle solving, cube algorithms, cubing tutorials, CFOP method, speedsolving, WCA, cube notation, cubing tips, best speedcubes, 3x3, 2x2, 4x4, 5x5, Megaminx, Pyraminx, Skewb, cubing competitions, fastest cubers, cube reviews, cube mods, advanced cubing techniques, PLL, OLL, F2L, beginner cubing guide, cube timers, online cubing, cubing tricks, Lim Cubes" /></head>
     
      <section className="contact">
        <h2>Contact Me</h2>
        <p>Feel free to reach out to me for any inquiries or questions.</p>
        <form className="contact-form" onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="name">Name:</label>
            <input
              type="text"
              id="name"
              name="name"
              required
              onChange={handleChange}
            />
          </div>
          <div className="form-group">
            <label htmlFor="email">Email:</label>
            <input
              type="email"
              id="email"
              name="email"
              required
              onChange={handleChange}
            />
          </div>
          <div className="form-group">
            <label htmlFor="message">Message:</label>
            <textarea
              id="message"
              name="message"
              required
              onChange={handleChange}
            ></textarea>
          </div>
          <button type="submit">Send</button>
        </form>
      </section>
    </main>
  );
};

export default ContactPage;

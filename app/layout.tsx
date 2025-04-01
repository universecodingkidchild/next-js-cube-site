"use client";
import type {Metadata} from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Image from "next/image";
import { useEffect, useState } from "react";
import Link from "next/link";
import { GoogleAnalytics } from '@next/third-parties/google';
import Swal from "sweetalert2";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://www.limcubes.tech"),
  title:"Lim Lim Cubes | Ready, Inspect, Solve!",
  keywords:"limcubes, speedcubing, Rubik's Cube, puzzle solving, cube algorithms, cubing tutorials, CFOP method, speedsolving, WCA, cube notation, cubing tips, best speedcubes, 3x3, 2x2, 4x4, 5x5, Megaminx, Pyraminx, Skewb, cubing competitions, fastest cubers, cube reviews, cube mods, advanced cubing techniques, PLL, OLL, F2L, beginner cubing guide, cube timers, online cubing, cubing tricks, Lim Cubes",
  description: "Learn how to solve the rubiks cube easier with Lim Cubes! We've got tons of resources and tutorials that can help and cater to your needs regardless of your skill level!",
  openGraph:{
    title:"Lim Lim Cubes | Ready, Inspect, Solve!",
    type: "website",
    locale: "en_US",
    url: "https://www.limcubes.tech",
    siteName: "Lim Cubes",

  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const header = document.querySelector("header");
    if (!header) return;

    window.addEventListener("scroll", function () {
      if (window.scrollY > 50) {
        header.classList.add("scrolled");
      } else {
        header.classList.remove("scrolled");
      }
    });
  }, []);

  const handleNewsletterSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const formData = new FormData(e.target as HTMLFormElement);
    const email = formData.get("email") as string;

    try {
      const response = await fetch("/api/newsletter", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email }),
      });

      if (response.ok) {
        Swal.fire({
          title: "Newsletter Joined",
          text: "Thanks for joining the newsletter!",
          icon: "success",
        });
        (e.target as HTMLFormElement).reset(); // Clear the form
      } else {
        const errorData = await response.json();
        Swal.fire({
          title: "Error",
          text: errorData.error || "Failed to subscribe. Please try again later.",
          icon: "error",
        });
      }
    } catch (error) {
      console.error("Error submitting newsletter:", error); // Log the error
      Swal.fire({
        title: "Error",
        text: "Failed to subscribe. Please try again later.",
        icon: "error",
      });
    }
  };

  return (
    <html lang="en">
      <head>
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.7.2/css/all.min.css"
          integrity="sha512-Evv84Mr4kqVGRNSgIGL/F/aIDqQb7xQ2vcrdIwxfjThSH8CSR7PBEakCr51Ck+w+/U6swU2Im1vVX0SVk9ABhg=="
          crossOrigin="anonymous"
        />
      </head>

      <body className={`${inter.variable} antialiased`}>
        <header>
          <nav>
            <Link href="/" className="logo">
              <Image
                src="https://i.imgur.com/wLLmL3n.png"
                alt="Logo"
                width={50}
                height={60}
              />
            </Link>
            <button
              className="hamburger"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              aria-label="Toggle Menu"
            >
              <i className={`fas ${isMenuOpen ? "fa-times" : "fa-bars"}`}></i>
            </button>
            <ul className={`nav-links ${isMenuOpen ? "open" : ""}`}>
              <li>
                <Link href="/" onClick={() => setIsMenuOpen(false)}>
                  Home
                </Link>
              </li>
              <li>
                <Link href="/about" onClick={() => setIsMenuOpen(false)}>
                  About
                </Link>
              </li>
              <li>
                <Link href="/contact" onClick={() => setIsMenuOpen(false)}>
                  Contact
                </Link>
              </li>
              <li>
                <Link href="/otherresources" onClick={() => setIsMenuOpen(false)}>
                  Other Resources
                </Link>
              </li>
            </ul>
          </nav>
        </header>

        {children}

        <footer>
          <div className="footer-container">
            <div className="footer-section">
              <h3>Quick Links</h3>
              <ul>
                <li>
                  <Link href="/">Home</Link>
                </li>
                <li>
                  <Link href="/about">About</Link>
                </li>
                <li>
                  <Link href="/otherresources">Other Resources</Link>
                </li>
                <li>
                  <Link href="/contact">Contact</Link>
                </li>
              </ul>
            </div>

            <div className="footer-section">
              <h3>Follow Me</h3>
              <ul className="social-links">
                <li>
                  <Link href="https://youtube.com/@limcubes" target="_blank">
                    <i className="fab fa-youtube"></i> YouTube
                  </Link>
                </li>
                <li>
                  <Link
                    href="https://www.instagram.com/limcubes"
                    target="_blank"
                  >
                    <i className="fab fa-instagram"></i> Instagram
                  </Link>
                </li>
                <li>
                  <Link href="https://www.tiktok.com/@limcubes" target="_blank">
                    <i className="fab fa-tiktok"></i> Tiktok
                  </Link>
                </li>
                <li>
                  <Link href="https://x.com/limcubes" target="_blank">
                    <i className="fab fa-x-twitter"></i> X/Twitter
                  </Link>
                </li>
              </ul>
            </div>

            <div className="footer-section">
              <h3>Newsletter</h3>
              <p>Subscribe to get updates on new tutorials and courses!</p>
              <form className="newsletter-form" onSubmit={handleNewsletterSubmit}>
                <input
                  type="email"
                  name="email"
                  placeholder="Enter your email"
                  required
                />
                <button type="submit">Subscribe</button>
              </form>
            </div>
          </div>

          <div className="footer-bottom">
            <p>&copy; 2025 Lim Cubes. All rights reserved.</p>
          </div>
        </footer>

        <GoogleAnalytics gaId="G-F1XTVFTD8B" />
      </body>
    </html>
  );
}
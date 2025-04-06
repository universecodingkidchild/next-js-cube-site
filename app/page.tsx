"use client";

import { useEffect } from "react";



export default function Home() {
  useEffect(() => {
    const preloader = document.getElementById("preloader");
    if (!preloader) return;

      setTimeout(function () {
        preloader.style.opacity = "0";
        setTimeout(function () {
          preloader.style.display = "none";
        }, 500);
      }, 1200);
  }, []);

  return (
    <main>
      <head><title>Lim Lim Cubes | Home</title>
  <meta name="description" content="Learn how to solve the rubiks cube easier with Lim Cubes! We've got tons of resources and tutorials that can help and cater to your needs regardless of your skill level!" />
  <meta name="keywords" content="limcubes, speedcubing, Rubik's Cube, puzzle solving, cube algorithms, cubing tutorials, CFOP method, speedsolving, WCA, cube notation, cubing tips, best speedcubes, 3x3, 2x2, 4x4, 5x5, Megaminx, Pyraminx, Skewb, cubing competitions, fastest cubers, cube reviews, cube mods, advanced cubing techniques, PLL, OLL, F2L, beginner cubing guide, cube timers, online cubing, cubing tricks, Lim Cubes" />
</head>
      
      {/* Preloader */}
      <div id="preloader">
        <div className="cube">
          <div className="face front"></div>
          <div className="face back"></div>
          <div className="face right"></div>
          <div className="face left"></div>
          <div className="face top"></div>
          <div className="face bottom"></div>
        </div>
      </div>

      {/* Hero Section */}
      <section className="hero">
        <div className="hero-content">
          <h1>Welcome to Lim Cubes</h1>
          <p>Learn, grow, and pursue your cubing journey!</p>
          <a href="/about" className="cta-button">
            Learn More!
          </a>
        </div>
      </section>

      {/* Introduction Section */}
      <section className="intro">
        <h2>About Me</h2>
        <p>
          Hi, I&apos;m Liam, a passionate content creator. I specialize in
          cubing and video production, as well as helping people achieve their
          goals with the Rubik&apos;s Cube through one-on-one coaching, video
          tutorials, and providing resources so they don&apos;t have to figure
          it all out on their own.
        </p>
      </section>

      {/* Featured Content Section */}
      <section className="featured">
        <h2>What I Offer</h2>
        <div className="cards">
          <div className="card">
            <h3>Personalized Coaching</h3>
            <p>One-on-one sessions tailored to your learning needs.</p>
            <a href="https://www.fiverr.com/s/xXmwqpq" className="card-button">
              Learn More
            </a>
          </div>
          <div className="card">
            <h3>YouTube Channel</h3>
            <p>Free tutorials and tips on how to cube.</p>
            <a
              href="https://youtube.com/@limcubes"
              target="_blank"
              className="card-button"
            >
              Watch Now
            </a>
          </div>
          <div className="card">
            <h3>Other Resources</h3>
            <p>
              Here are some useful resources to help you on your cubing journey.
            </p>
            <a href="/otherresources" className="card-button">
              Explore Resources
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}

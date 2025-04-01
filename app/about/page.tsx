import type {Metadata} from "next";

export const metadata: Metadata = {
  title:"Lim Lim Cubes | About Me",
  description: "Discover who I am and my initiative to help beginner cubers!",
  keywords:"limcubes, speedcubing, Rubik's Cube, puzzle solving, cube algorithms, cubing tutorials, CFOP method, speedsolving, WCA, cube notation, cubing tips, best speedcubes, 3x3, 2x2, 4x4, 5x5, Megaminx, Pyraminx, Skewb, cubing competitions, fastest cubers, cube reviews, cube mods, advanced cubing techniques, about, PLL, OLL, F2L, beginner cubing guide, cube timers, online cubing, cubing tricks, Lim Cubes",

};
export default function AboutPage() {
  return (
    <main>

    <title>About - Lim Cubes</title>
     {/* Preloader */}
    <section className="intro">
        <h2>About Me</h2>
        <p>
            Hi, I&apos;m Liam, a passionate 15-year-old cuber and content creator dedicated to helping others with their Rubik&apos;s Cube journey.
            My journey with cubing began when my cousin first brought his cube over to my house and showed it to me. I thought it was really cool, and out of curiosity, I decided to learn how to solve one on my own. What started as a fun challenge quickly turned into a major hobby of mine.
            Over the years, I&apos;ve been trying to learn and improve my solving technique by studying advanced and simple methods, learning algorithms, and practicing solves. It is a dream of mine to compete in competitions, meet cool people, and further improve my skills!
            <br /><br />
            I&apos;m thrilled to share my knowledge and experience with others because it makes it easier for beginners to understand the fundamentals when someone who has already learned it helps teach them. If you&apos;re a beginner looking to solve your first cube or just try it out for fun, I&apos;m here to guide you every step of the way.
            Through personalized coaching, video tutorials, and comprehensive resources, I aim to make cubing accessible, easy, and enjoyable for everyone.
            Join me on this exciting journey, and let&apos;s solve the cube together!
        </p>
    </section>
</main>
  );
}

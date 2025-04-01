import type {Metadata} from "next";

export const metadata: Metadata = {
  title:"Lim Lim Cubes | Other Resources",
  description: "These are some other resources such as videos, articles and different websites that can help you learn different algorithms and expand your cubing knowledge in general",
  keywords:"limcubes,  resources, other resources, speedcubing, Rubik's Cube, puzzle solving, cube algorithms, cubing tutorials, CFOP method, speedsolving, WCA, cube notation, cubing tips, best speedcubes, 3x3, 2x2, 4x4, 5x5, Megaminx, Pyraminx, Skewb, cubing competitions, fastest cubers, cube reviews, cube mods, advanced cubing techniques, PLL, OLL, F2L, beginner cubing guide, cube timers, online cubing, cubing tricks, Lim Cubes",
};
export default function OtherResourcesPage() {
    return (
        <main>
            <title>Other Resources - Lim Cubes</title>

            <section className="resources">
                <h1>Other Resources</h1>

                {/* Cube Shops */}
                <div className="resource-category">
                    <h2>Cube Shops</h2>
                    <ul>
                        <li><a href="https://speedcubeshop.com" target="_blank" rel="noopener noreferrer">SpeedCubeShop</a> - Canadian/Worldwide</li>
                        <li><a href="https://www.thecubicle.com" target="_blank" rel="noopener noreferrer">The Cubicle</a> - USD</li>
                        <li><a href="https://www.cubingoutloud.com/" target="_blank" rel="noopener noreferrer">Cubing Out Loud</a> - Canadian</li>
                    </ul>
                </div>

                {/* Other Tutorials */}
                <div className="resource-category">
                    <h2>Other Tutorials</h2>
                    <ul>
                        <li><a href="https://www.youtube.com/watch?v=7Ron6MN45LY" target="_blank" rel="noopener noreferrer">JPerm - Beginners Method - Video</a></li>
                        <li><a href="https://youtu.be/0Ti5CKsQLts?si=biGc706qTaSR92bF" target="_blank" rel="noopener noreferrer">Leila Gharani - Easiest tutorial you&apos;ll ever need - Video</a></li>
                    </ul>
                </div>

                {/* Timers */}
                <div className="resource-category">
                    <h2>Timers</h2>
                    <ul>
                        <li><a href="https://www.speedcubestats.com" target="_blank" rel="noopener noreferrer">SpeedCubeStats</a> - Includes finger tricks & PB sheet</li>
                        <li><a href="https://cstimer.net" target="_blank" rel="noopener noreferrer">CsTimer</a></li>
                    </ul>
                </div>

                {/* OLL Algorithms */}
                <div className="resource-category">
                    <h2>OLL Algorithms</h2>
                    <ul>
                        <li><a href="https://jperm.net/algs/oll" target="_blank" rel="noopener noreferrer">JPerm</a></li>
                        <li><a href="https://www.youtube.com/watch?v=vU6HsK3hvQs&t=47s" target="_blank" rel="noopener noreferrer">J Perm - 57 OLL cases video</a></li>
                    </ul>
                </div>

                {/* PLL Algorithms */}
                <div className="resource-category">
                    <h2>PLL Algorithms</h2>
                    <ul>
                        <li><a href="https://jperm.net/algs/pll" target="_blank" rel="noopener noreferrer">JPerm</a></li>
                        <li><a href="https://www.youtube.com/watch?v=QVXKNAjl_0k" target="_blank" rel="noopener noreferrer">Full Pll - Cubehead Video</a></li>
                    </ul>
                </div>

                {/* Intuitive F2L */}
                <div className="resource-category">
                    <h2>Intuitive F2L Algorithms</h2>
                    <ul>
                        <li><a href="https://www.cube.academy/intuitive-f2l-algs" target="_blank" rel="noopener noreferrer">Cube Academy</a></li>
                        <li><a href="https://drive.google.com/file/d/1nzAXYUWZJ6H2wIOXaHdWXep3W57tArbR/view?usp=sharing" target="_blank" rel="noopener noreferrer">JPerm (Google Drive)</a></li>
                    </ul>
                </div>

                {/* Reconstruction Tools */}
                <div className="resource-category">
                    <h2>Reconstruction Tools</h2>
                    <ul>
                        <li><a href="https://speedcubedb.com" target="_blank" rel="noopener noreferrer">SpeedCubeDB</a></li>
                        <li><a href="https://cubedb.net/?puzzle=3x3" target="_blank" rel="noopener noreferrer">CubeDB</a></li>
                    </ul>
                </div>
            </section>
        </main>
    );
}
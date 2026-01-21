"use client";

import React, { useState, useEffect } from "react";
import styles from "./about.module.css";
// import Navbar from "@/components/Navbar"; // Uncomment if using a shared Navbar component

export default function AboutPage() {
    const [loading, setLoading] = useState(true);

    // Loading Simulation
    useEffect(() => {
        const timer = setTimeout(() => {
            setLoading(false);
        }, 1000);
        return () => clearTimeout(timer);
    }, []);

    // Sound Logic
    const playHoverSound = () => {
        const audio = new Audio('/spray.mp3');
        audio.volume = 0.5; // Adjust volume as needed
        audio.play().catch((err) => {
            console.warn("Audio play failed (user interaction needed or file missing):", err);
        });
    };

    return (
        <>
            {/* LOADER */}
            {loading && (
                <div id="loader">
                    <img src="/logo.png" className="logo-img" alt="Logo" />
                    <div className="loading-text">
                        Loading<span className="dots"></span>
                    </div>
                </div>
            )}

            {/* NAVBAR: Include your component here if not in layout.tsx */}
            {/* <Navbar /> */}

            <div className={styles.pageWrapper}>
                <div className={styles.aboutContainer}>
                    <div className={styles.contentWrapper}>

                        {/* TEXT SECTION */}
                        <div className={styles.storySide}>
                            <img src="/logo.png" alt="Euphonious × Zyzzva '26" className={styles.logoImage} />

                            {/* 1. About GNIT */}
                            <div className={styles.storyBox} onMouseEnter={playHoverSound}>
                                <div className={styles.boxContent}>
                                    <h2>About GNIT</h2>
                                    <p>
                                        Guru Nanak Institute of Technology (GNIT), established in 2003 under the JIS Group Educational Initiatives, is committed to empowering aspiring professionals with advanced technological knowledge and professional expertise. This premier technical institute offers a range of undergraduate and postgraduate courses under the affiliation of MAKAUT (formerly WBUT), with some programs accredited by NBA. GNIT is approved by AICTE and is the first private engineering college in West Bengal to achieve an A+ accreditation from NAAC. It is also accredited by UGC, making it a hallmark of academic excellence.Located strategically in North Kolkata near Sodepur, the institute provides a vibrant academic environment. With a total student strength exceeding 7,000, GNIT's innovative educational practices have nurtured some of the finest scholars and industry leaders.
                                    </p>
                                </div>

                            </div>

                            {/* 2. About GNCC */}
                            <div className={styles.storyBox} onMouseEnter={playHoverSound}>
                                <div className={styles.boxContent}>
                                    <h2>About GNCC</h2>
                                    <p>
                                        With an area of 28,328 square meters, the Guru Nanak College Campus (GNCC) caters to the diverse educational needs of over 25,000 students. This sprawling educational hub in Kolkata combines excellence in academics, state-of-the-art infrastructure, and holistic development. Housing four renowned institutions—Guru Nanak Institute of Technology (GNIT), Guru Nanak Institute of Hotel Management (GNIHM), Guru Nanak Institute of Pharmaceutical Science and Technology (GNIPST), and Guru Nanak Institute of Dental Science and Research (GNIDSR)—the campus offers a dynamic and conducive learning environment.
                                    </p>
                                </div>

                            </div>

                            {/* 3. About Euphonious x Zyzzva */}
                            <div className={styles.storyBox} onMouseEnter={playHoverSound}>
                                <div className={styles.boxContent}>
                                    <h2>Euphonious</h2>
                                    <p>
                                        Euphonious is a grand inter-institutional cultural competition organized by Guru Nanak Institute of Technology (GNIT), where an enormous number of talented students from various institutions come together to showcase their stunning performances.
                                    </p>
                                    <h2>Zyzzva</h2>
                                    <p>
                                        Zyzzva, the flagship annual cultural fest of Guru Nanak Institute of Technology (GNIT), is a spectacular two-day celebration where students come together to showcase their diverse talents across music, dance, drama, art, and more. This vibrant extravaganza is a melting pot of creativity.
                                    </p>
                                    <p className={styles.storyExtra}>
                                        Join us for an unforgettable experience filled with music,
                                        dance, competitions, and memories that last a lifetime.
                                    </p>
                                </div>

                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </>
    );
}
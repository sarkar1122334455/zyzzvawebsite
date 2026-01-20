"use client";

import React, { useState, useEffect } from "react";
import styles from "./about.module.css";
// import Navbar from "@/components/Navbar"; // Uncomment if using a shared Navbar component

export default function AboutPage() {
    const [loading, setLoading] = useState(true);
    const [currentSlide, setCurrentSlide] = useState(0);

    // --- 1. DEFINE YOUR MEDIA HERE ---
    // Ensure these files exist in your public folder (e.g., public/slider1.jpg)
    const mediaData = [
        { type: "image", src: "/slider1.jpg" }, // Replace with actual filenames
        { type: "video", src: "/laptop2.mp4" },
        { type: "image", src: "/slider2.jpg" },
    ];

    // Loading Simulation
    useEffect(() => {
        const timer = setTimeout(() => {
            setLoading(false);
        }, 1000);
        return () => clearTimeout(timer);
    }, []);

    // Slider Logic
    const nextSlide = () => {
        setCurrentSlide((prev) => (prev + 1) % mediaData.length);
    };

    const prevSlide = () => {
        setCurrentSlide((prev) => (prev - 1 + mediaData.length) % mediaData.length);
    };

    // Render the current media item
    const renderMedia = () => {
        const item = mediaData[currentSlide];

        // Safety check if data is empty
        if (!item) return null;

        if (item.type === "video") {
            return (
                <video
                    key={item.src} // Key forces re-render/animation when slide changes
                    className={styles.mediaItem}
                    autoPlay
                    muted
                    loop
                    playsInline
                >
                    <source src={item.src} type="video/mp4" />
                </video>
            );
        } else {
            return (
                <img
                    key={item.src}
                    src={item.src}
                    className={styles.mediaItem}
                    alt="About slider"
                />
            );
        }
    };

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
                            <h1 className={styles.title}>Euphonious × Zyzzva '26</h1>

                            {/* VIDEO SECTION */}
                            <div className={styles.videoBox}>
                                <video
                                    className={styles.videoPlayer}
                                    autoPlay
                                    muted
                                    loop
                                    playsInline
                                >
                                    <source src="/your-video.mp4" type="video/mp4" />
                                    Your browser does not support the video tag.
                                </video>
                            </div>

                            {/* 1. About GNIT */}
                            <div className={styles.storyBox} onMouseEnter={playHoverSound}>
                                <h2>About GNIT</h2>
                                <p>
                                    Guru Nanak Institute of Technology (GNIT), established in 2003 under the JIS Group Educational Initiatives, is committed to empowering aspiring professionals with advanced technological knowledge and professional expertise. This premier technical institute offers a range of undergraduate and postgraduate courses under the affiliation of MAKAUT (formerly WBUT), with some programs accredited by NBA. GNIT is approved by AICTE and is the first private engineering college in West Bengal to achieve an A+ accreditation from NAAC. It is also accredited by UGC, making it a hallmark of academic excellence.Located strategically in North Kolkata near Sodepur, the institute provides a vibrant academic environment. With a total student strength exceeding 7,000, GNIT's innovative educational practices have nurtured some of the finest scholars and industry leaders. Its alumni have not only brought fame and recognition to the institute but have also excelled in their professional endeavors, contributing significantly to the industry.                                </p>
                            </div>

                            {/* 2. About GNCC */}
                            <div className={styles.storyBox} onMouseEnter={playHoverSound}>
                                <h2>About GNCC</h2>
                                <p>
                                    With an area of 28,328 square meters, the Guru Nanak College Campus (GNCC) caters to the diverse educational needs of over 25,000 students. This sprawling educational hub in Kolkata combines excellence in academics, state-of-the-art infrastructure, and holistic development. Housing four renowned institutions—Guru Nanak Institute of Technology (GNIT), Guru Nanak Institute of Hotel Management (GNIHM), Guru Nanak Institute of Pharmaceutical Science and Technology (GNIPST), and Guru Nanak Institute of Dental Science and Research (GNIDSR)—the campus offers a dynamic and conducive learning environment across multiple disciplines.

                                    Spread across a vast green landscape, the campus boasts modern academic blocks, cutting-edge laboratories, libraries, hostels, sports facilities, and recreational areas, ensuring a dynamic and conducive learning environment. Each institute specializes in its domain: GNIT excels in engineering and technology, GNIHM is a leader in hospitality and hotel management, GNIPST focuses on pharmaceutical sciences, and GNIDSR provides advanced dental education. Together, these institutions foster innovation, technical expertise, and professional skills, making GNCC a center of excellence in Eastern India.                                </p>
                            </div>

                            {/* 3. About Euphonious x Zyzzva */}
                            <div className={styles.storyBox} onMouseEnter={playHoverSound}>
                                <h2>Euphonious</h2>
                                <p>
                                    Euphonious is a grand inter-institutional cultural competition organized by Guru Nanak Institute of Technology (GNIT), where an enormous number of talented students from various institutions come together to showcase their stunning performances across diverse art forms like music, dance, drama, and fashion. This vibrant event celebrates cultural diversity and creativity, featuring electrifying competitions, mesmerizing performances, and a fusion of tradition and modernity. With exciting prizes, special workshops, and appearances by renowned artists, Euphonious offers an unforgettable experience filled with energy, passion, and a celebration of talent like never before!
                                </p>
                                <h2>Zyzzva</h2>
                                <p>
                                    Zyzzva, the flagship annual cultural fest of Guru Nanak Institute of Technology (GNIT), is a spectacular two-day celebration where students come together to showcase their diverse talents across music, dance, drama, art, and more. This vibrant extravaganza is a melting pot of creativity, energy, and cultural expression, drawing a crowd of over 25,000 enthusiastic visitors. The highlight of Zyzzva is the electrifying performances by renowned guest artists, which leave the audience spellbound and elevate the festive spirit. Alongside these, the event features thrilling competitions, interactive workshops, fashion shows, and food stalls, creating an unforgettable experience for everyone involved. Zyzzva is not just a fest; it's a celebration of youthful exuberance, offering an unparalleled platform for students to shine and for sponsors to connect with a dynamic and spirited audience, making it one of the most anticipated and talked-about events in the region.
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
        </>
    );
}
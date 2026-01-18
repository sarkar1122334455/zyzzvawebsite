"use client";

import React, { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { useIntro } from "./context/IntroContext";
// If you want to use Next.js Image optimization, uncomment the import below
// and replace <img> with <Image /> (requires width/height properties).
// import Image from "next/image";

export default function Home() {
  const [loading, setLoading] = useState(true);
  const [isMobile, setIsMobile] = useState(false);
  const { setNavbarVisible } = useIntro();

  // Hide navbar initially on mount
  useEffect(() => {
    setNavbarVisible(false);
    return () => setNavbarVisible(true);
  }, [setNavbarVisible]);

  // Refs for video elements to control playback
  const desktopVideoRef = useRef<HTMLVideoElement>(null);
  const mobileVideoRef = useRef<HTMLVideoElement>(null);

  // Handle Resize & Mobile Detection
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.matchMedia("(max-width: 768px)").matches);
    };

    // Initial check
    checkMobile();

    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  // Handle Video Loading & Playback switching
  useEffect(() => {
    // Determine which video is currently active based on screen size
    const activeVideo = isMobile ? mobileVideoRef.current : desktopVideoRef.current;
    const inactiveVideo = isMobile ? desktopVideoRef.current : mobileVideoRef.current;

    if (inactiveVideo) {
      inactiveVideo.pause();
      inactiveVideo.style.display = "none";
    }

    if (activeVideo) {
      activeVideo.style.display = "block";

      // Only play if not loading (or if loading finished)
      if (!loading) {
        activeVideo.play().catch((e) => console.log("Autoplay prevented:", e));
      }
    }
  }, [isMobile, loading]);

  // Initial Loader Logic (Simulating the 'canplaythrough' and timeout)
  useEffect(() => {
    const handleVideoReady = () => {
      setTimeout(() => {
        setLoading(false);
      }, 800);
    };

    // Fallback timeout in case video never loads (6s as per your code)
    const fallbackTimeout = setTimeout(() => {
      setLoading(false);
    }, 6000);

    const activeRef = isMobile ? mobileVideoRef : desktopVideoRef;

    if (activeRef.current) {
      // If video is already readystate 4 (HAVE_ENOUGH_DATA)
      if (activeRef.current.readyState >= 3) {
        handleVideoReady();
      } else {
        activeRef.current.addEventListener("canplaythrough", handleVideoReady, { once: true });
      }
    }

    return () => clearTimeout(fallbackTimeout);
  }, [isMobile]); // Re-run if mobile state changes immediately on mount

  const handleVideoEnded = () => {
    setNavbarVisible(true);
  };

  return (
    <main>
      {/* ✅ LOADER */}
      {loading && (
        <div id="loader">
          <img src="/logo.png" alt="Logo" className="logo-img" />
          <div className="loading-text">
            Loading<span className="dots"></span>
          </div>
        </div>
      )}



      {/* ✅ LANDING VIDEO CONTAINER */}
      <div id="landing" style={{ display: loading ? "none" : "block" }}>
        <video
          ref={desktopVideoRef}
          id="desktopVideo"
          muted
          playsInline
          preload="auto"
          onEnded={handleVideoEnded}
          style={{ display: isMobile ? "none" : "block" }}
        >
          <source src="/laptop2.mp4" type="video/mp4" />
        </video>

        <video
          ref={mobileVideoRef}
          id="mobileVideo"
          muted
          playsInline
          preload="auto"
          onEnded={handleVideoEnded}
          style={{ display: isMobile ? "block" : "none" }}
        >
          <source src="/VN20251208_012531.mp4" type="video/mp4" />
        </video>
      </div>
    </main>
  );
}
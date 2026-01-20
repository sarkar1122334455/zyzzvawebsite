"use client";

import React, { useState, useEffect, memo } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useIntro } from "../context/IntroContext";

function Navbar() {
    const [menuOpen, setMenuOpen] = useState(false);
    const pathname = usePathname();
    const { isNavbarVisible } = useIntro();
    const isHome = pathname === "/";

    // Keydown listener for Escape key to close menu
    useEffect(() => {
        const handleKeyDown = (e: KeyboardEvent) => {
            if (e.key === "Escape") setMenuOpen(false);
        };
        document.addEventListener("keydown", handleKeyDown);
        return () => document.removeEventListener("keydown", handleKeyDown);
    }, []);

    const toggleMenu = () => setMenuOpen(!menuOpen);

    // If on Home page and (navbar is hidden AND menu is closed), hide it.
    if (isHome && !isNavbarVisible && !menuOpen) {
        return null;
    }

    // Determine if we should force the navbar to top
    // If NOT Home, always show at top.
    // If Home, only show at top if menu is open (or rely on CSS default which is bottom).
    const isAtTop = !isHome || menuOpen;

    return (
        <>
            {/* MENU BAR */}
            <div
                className={`top-backdrop ${isAtTop ? "at-top" : ""}`}
                id="menuBar"
            >
                <button
                    className={`menu-button ${menuOpen ? "open" : ""}`}
                    id="menuToggle"
                    aria-label="Toggle menu"
                    onClick={toggleMenu}
                >
                    <img
                        src="/spraypaint.svg"
                        alt="Menu"
                        className="menu-icon-img"
                        style={{ width: '40px', height: '40px', objectFit: 'contain' }}
                    />
                </button>
            </div>

            {/* MENU OVERLAY */}
            <div
                className={`menu-overlay ${menuOpen ? "show" : ""}`}
                id="menuOverlay"
                aria-hidden={!menuOpen}
                onClick={(e) => {
                    // Close if clicking the background overlay
                    if (e.target === e.currentTarget) toggleMenu();
                }}
            >
                <div className="menu-radial">
                    <div className="orbit">
                        <Link href="/about" className="orbit-item" onClick={() => setMenuOpen(false)}>About</Link>
                        <Link href="/team" className="orbit-item" onClick={() => setMenuOpen(false)}>Team</Link>
                        <Link href="/contacts" className="orbit-item" onClick={() => setMenuOpen(false)}>Contacts</Link>
                        <Link href="/events" className="orbit-item" onClick={() => setMenuOpen(false)}>Events</Link>
                        <Link href="/glimpses" className="orbit-item" onClick={() => setMenuOpen(false)}>Glimpses</Link>
                        <Link href="/sponsor" className="orbit-item" onClick={() => setMenuOpen(false)}>Sponsor</Link>
                    </div>
                    <button
                        className="menu-center"
                        id="loginBtn"
                        onClick={() => {
                            window.location.href = "/";
                            setMenuOpen(false);
                        }}
                    >
                        Home
                    </button>
                </div>
            </div>
        </>
    );
}

// Export memoized version to prevent unnecessary re-renders
export default memo(Navbar);

"use client";

import React, { useState, useEffect, memo } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useIntro } from "../context/IntroContext";
import styles from "./Navbar.module.css";

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

    const isAtTop = !isHome || menuOpen;

    return (
        <>
            {/* MENU BAR */}
            <div
                className={`${styles.topBackdrop} ${isAtTop ? styles.atTop : ""}`}
                id="menuBar"
            >
                <button
                    className={styles.menuButton}
                    id="menuToggle"
                    aria-label="Toggle menu"
                    onClick={toggleMenu}
                >
                    <img
                        src="/spraypaint.svg"
                        alt="Menu"
                        className={styles.menuIconImg}
                    />
                </button>
            </div>

            {/* MENU OVERLAY */}
            <div
                className={`${styles.menuOverlay} ${menuOpen ? styles.show : ""}`}
                id="menuOverlay"
                aria-hidden={!menuOpen}
                onClick={(e) => {
                    if (e.target === e.currentTarget) toggleMenu();
                }}
            >
                <div className={styles.menuRadial}>
                    <div className={styles.orbit}>
                        <Link href="/about" className={styles.orbitItem} onClick={() => setMenuOpen(false)}>About</Link>
                        <Link href="/team" className={styles.orbitItem} onClick={() => setMenuOpen(false)}>Team</Link>
                        <Link href="/contacts" className={styles.orbitItem} onClick={() => setMenuOpen(false)}>Contacts</Link>
                        <Link href="/events" className={styles.orbitItem} onClick={() => setMenuOpen(false)}>Events</Link>
                        <Link href="/glimpses" className={styles.orbitItem} onClick={() => setMenuOpen(false)}>Glimpses</Link>
                        <Link href="/sponsor" className={styles.orbitItem} onClick={() => setMenuOpen(false)}>Sponsor</Link>
                    </div>
                    <button
                        className={styles.menuCenter}
                        id="loginBtn"
                        onClick={() => {
                            window.location.href = "/";
                            setMenuOpen(false);
                        }}
                    >
                        <span>Home</span>
                    </button>
                </div>
            </div>
        </>
    );
}

export default memo(Navbar);

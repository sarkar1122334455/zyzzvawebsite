"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import styles from "./sponsor.module.css";
// import Navbar from "@/components/Navbar"; // Uncomment if you have a navbar component

export default function SponsorPage() {
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        // Simulate loading time
        const timer = setTimeout(() => {
            setLoading(false);
        }, 1000);
        return () => clearTimeout(timer);
    }, []);

    // --- Data for Sponsors ---
    const titleSponsor = {
        name: "Premier Company",
        desc: "Proudly presenting Euphonious × Zyzzva '26",
        tagline: "Title Sponsor",
        icon: "👑"
    };

    const partners = [
        { name: "Partner A", desc: "Strategic Technology Partner", icon: "🤝" },
        { name: "Partner B", desc: "Innovation & Development Partner", icon: "🤝" },
        { name: "Partner C", desc: "Community Partner", icon: "🤝" },
        { name: "Partner D", desc: "Media & Content Partner", icon: "🤝" },
    ];

    const goldSponsors = [
        { name: "Company C", desc: "Quality Solutions", icon: "🥇" },
        { name: "Company D", desc: "Creative Excellence", icon: "🥇" },
        { name: "Company E", desc: "Innovation Hub", icon: "🥇" },
    ];

    const silverSponsors = [
        { name: "Company F", desc: "Tech Solutions", icon: "🥈" },
        { name: "Company G", desc: "Digital Services", icon: "🥈" },
        { name: "Company H", desc: "Creative Agency", icon: "🥈" },
        { name: "Company I", desc: "Media Partners", icon: "🥈" },
    ];

    return (
        <>
            {/* LOADER */}
            {loading && (
                <div id="loader">
                    {/* Ensure logo.png is in your public folder */}
                    <img src="/logo.png" className="logo-img" alt="Logo" />
                    <div className="loading-text">
                        Loading<span className="dots"></span>
                    </div>
                </div>
            )}

            {/* NAV BAR: If you don't have a global layout navbar, you can import it here */}
            {/* <Navbar /> */}

            <div className={styles.pageWrapper}>
                <div className={styles.sponsorContainer}>
                    <h1 className={styles.pageTitle}>Our Sponsors</h1>
                    <p className={styles.pageSubtitle}>Partners who make our festival possible</p>

                    <div className={styles.sponsorTiers}>

                        {/* TITLE SPONSOR SECTION */}
                        <div className={styles.titleSponsorSection}>
                            <div className={styles.titleSponsorBadge}>{titleSponsor.tagline}</div>
                            <div className={styles.titleSponsorCard}>
                                {/* Content removed as requested, background image used */}
                            </div>
                        </div>

                        {/* PARTNERS SECTION */}
                        <div className={styles.partnersSection}>
                            <h2 className={styles.partnersTitle}>Our Partners</h2>
                            <p className={styles.partnersSubtitle}>
                                Collaborating with industry leaders to create exceptional experiences
                            </p>
                            <div className={styles.partnersGrid}>
                                {partners.map((partner, index) => (
                                    <div key={index} className={styles.partnerCard}>
                                        <div className={styles.partnerLogo}>{partner.icon}</div>
                                        <h3>{partner.name}</h3>
                                        <p>{partner.desc}</p>
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* GOLD TIER */}
                        <div className={styles.tierSection}>
                            <h2 className={`${styles.tierTitle} ${styles.goldTitle}`}>Gold Sponsors</h2>
                            <div className={styles.sponsorGrid}>
                                {goldSponsors.map((sponsor, index) => (
                                    <div key={index} className={`${styles.sponsorCard} ${styles.goldCard}`}>
                                        <div className={styles.sponsorLogo}>{sponsor.icon}</div>
                                        <h3>{sponsor.name}</h3>
                                        <p>{sponsor.desc}</p>
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* SILVER TIER */}
                        <div className={styles.tierSection}>
                            <h2 className={`${styles.tierTitle} ${styles.silverTitle}`}>Silver Sponsors</h2>
                            <div className={styles.sponsorGrid}>
                                {silverSponsors.map((sponsor, index) => (
                                    <div key={index} className={`${styles.sponsorCard} ${styles.silverCard}`}>
                                        <div className={styles.sponsorLogo}>{sponsor.icon}</div>
                                        <h3>{sponsor.name}</h3>
                                        <p>{sponsor.desc}</p>
                                    </div>
                                ))}
                            </div>
                        </div>

                    </div>

                    {/* BECOME A SPONSOR CTA */}
                    <div className={styles.becomeSponsor}>
                        <div className={styles.sponsorCta}>
                            <h2>Become a Sponsor</h2>
                            <p>
                                Join us in creating an unforgettable festival experience. Partner
                                with us and reach thousands of students and enthusiasts.
                            </p>
                            <Link href="/contacts" className={styles.ctaButton}>
                                Get In Touch
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

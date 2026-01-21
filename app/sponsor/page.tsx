"use client";

import React, { useState, useEffect } from "react";
import SponsorCard from "../components/SponsorCard";
import styles from "./sponsor.module.css";

export default function SponsorPage() {
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const timer = setTimeout(() => {
            setLoading(false);
        }, 1000);
        return () => clearTimeout(timer);
    }, []);

    // Sponsor Data with exact details from requirements
    const titleSponsor = {

        name: "NPCI",
        fullName: "National Payments Corporation of India",
        tier: "Title Sponsor",
        logoUrl: "/sponsors/npci.png", // Add logos to public/sponsors/

    };

    const coTitleSponsor = {
        name: "HCL Tech",
        tier: "Co-Title Sponsor",
        logoUrl: "/sponsors/hcl.png",
    };

    const associateTitleSponsor = {
        name: "Hero MotoCorp",
        tier: "Associate Title Sponsor",
        logoUrl: "/sponsors/hero.png",
    };

    const upskillingPartners = [
        { name: "Skill Ladders", tier: "Upskilling Partner" },
        { name: "IALM", tier: "Upskilling Partner" },
        { name: "Experiment Labs", tier: "EdTech Partner" },
        { name: "Tripple One Solutions", tier: "EdTech Partner" },
        { name: "Elearnmarkets", tier: "EdTech Partner" },
    ];

    const otherPartners = [
        { name: "Logistics Partner", tier: "Logistics", icon: "🚚" },
        { name: "Gadgets Partner", tier: "Gadgets", icon: "📱" },
        { name: "Sporting Partner", tier: "Sporting", icon: "⚽" },
        { name: "Food & Beverage Partner", tier: "Food & Beverage", icon: "🍔" },
        { name: "Digital Media Partner", tier: "Digital Media", icon: "📺" },
    ];

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

            <div className={styles.pageWrapper}>
                <div className={styles.sponsorContainer}>
                    {/* HERO SECTION */}
                    <div className={styles.heroSection}>
                        <h1 className={styles.pageTitle}>
                            <span className={styles.glitchText}>Our Sponsors</span>
                        </h1>
                        <p className={styles.pageSubtitle}>
                            Partners powering the ultimate graffiti fest
                        </p>
                    </div>

                    {/* TITLE SPONSOR - NPCI */}
                    <section className={styles.titleSponsorSection}>
                        <div className={styles.sectionBadge}>👑 Title Sponsor</div>
                        <div className={styles.titleSponsorWrapper}>
                            <SponsorCard
                                name={titleSponsor.name}
                                tier={titleSponsor.tier}
                                logoUrl={titleSponsor.logoUrl}
                                description={titleSponsor.fullName}
                                delay={0.2}
                            />
                        </div>
                    </section>

                    {/* CO-TITLE & ASSOCIATE SPONSORS */}
                    <section className={styles.coTitleSection}>
                        <div className={styles.sectionBadge}>🥇 Premium Sponsors</div>
                        <div className={styles.premiumSponsorsGrid}>
                            <SponsorCard
                                name={coTitleSponsor.name}
                                tier={coTitleSponsor.tier}
                                logoUrl={coTitleSponsor.logoUrl}
                                delay={0.3}
                            />
                            <SponsorCard
                                name={associateTitleSponsor.name}
                                tier={associateTitleSponsor.tier}
                                logoUrl={associateTitleSponsor.logoUrl}
                                delay={0.4}
                            />
                        </div>
                    </section>

                    {/* UPSKILLING & EDTECH PARTNERS */}
                    <section className={styles.partnersSection}>
                        <h2 className={styles.sectionTitle}>
                            <span className={styles.neonText}>Upskilling & EdTech Partners</span>
                        </h2>
                        <div className={styles.partnersGrid}>
                            {upskillingPartners.map((partner, index) => (
                                <SponsorCard
                                    key={index}
                                    name={partner.name}
                                    tier={partner.tier}
                                    delay={0.1 * index}
                                />
                            ))}
                        </div>
                    </section>

                    {/* OTHER PARTNERS GRID */}
                    <section className={styles.partnersSection}>
                        <h2 className={styles.sectionTitle}>
                            <span className={styles.neonText}>Our Partners</span>
                        </h2>
                        <div className={styles.partnersGrid}>
                            {otherPartners.map((partner, index) => (
                                <SponsorCard
                                    key={index}
                                    name={partner.name}
                                    tier={partner.tier}
                                    delay={0.1 * index}
                                />
                            ))}
                        </div>
                    </section>

                    {/* BECOME A SPONSOR CTA */}
                    <div className={styles.becomeSponsor}>
                        <div className={styles.sponsorCta}>
                            <h2>Paint Your Brand Here</h2>
                            <p>
                                Join our crew and tag along with the biggest graffiti fest.
                                Reach thousands of students and artists.
                            </p>
                            <a href="/contacts" className={styles.ctaButton}>
                                <span>Get In Touch</span>
                                <span className={styles.sprayEffect}>→</span>
                            </a>
                        </div>
                    </div>
                </div>

                {/* FLOATING PARTICLES BACKGROUND */}
                <div className={styles.floatingParticles}>
                    <div className={styles.particle}></div>
                    <div className={styles.particle}></div>
                    <div className={styles.particle}></div>
                    <div className={styles.particle}></div>
                    <div className={styles.particle}></div>
                    <div className={styles.particle}></div>
                    <div className={styles.particle}></div>
                    <div className={styles.particle}></div>
                    <div className={styles.particle}></div>
                    <div className={styles.particle}></div>
                    <div className={styles.particle}></div>
                    <div className={styles.particle}></div>
                    <div className={styles.particle}></div>
                    <div className={styles.particle}></div>
                    <div className={styles.particle}></div>
                    <div className={styles.particle}></div>
                    <div className={styles.particle}></div>
                    <div className={styles.particle}></div>
                    <div className={styles.particle}></div>
                    <div className={styles.particle}></div>
                </div>
            </div>
        </>
    );
}
